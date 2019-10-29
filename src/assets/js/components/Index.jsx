import React, { Component } from 'react';

function ListItem(props) {
  const post = props.value;
  let name = '';
  if (!post.privacy){
    if (post.instagram != 'nan') { name = 'Instagram: ' + post.instagram }
    else if (post.email != 'nan') { name = 'Email: ' + post.email } 
  };
  const showMinistries = post.ministries.map((m) => <p key={post.id + '' + m} className={"area-" + m.replace(/\ /g, "-").replace(/\,/g, "")}>{m}</p>);
  return (
    <div className="post-container">
      <div className="type-part-container">
        <h4>{post.type}</h4>
      </div>
      <div className="lower-part-container">
        <div className="areas-container">
          <h4 className="area-header">Área(s):</h4>
          {showMinistries}
        </div>
        <div className="body-container">
          <h4 className="propuesta-header">Propuesta:</h4>
          <p className="body">
            "{post.body}"
          </p>
        </div>
        <p className="id"># {post.id}</p>
        <p className="body"> {name}</p>
      </div>
    </div>
  ); 
} 

export default class PostListComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { posts } = this.props;
    if (!posts.length) {
      return (<p>No hay propuestas</p>);
    }
    const postsUl = posts.map((p) => <ListItem key={p.id} value={p} />);
    return (<div className="inner-posts-container">{postsUl}</div>);
  }
}
