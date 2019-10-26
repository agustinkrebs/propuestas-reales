import React, { Component } from 'react';

function ListItem(props) {
  const post = props.value;
  const showMinistries = post.ministries.map((m) => <p class="area">{m}</p>);
  return (
      <div class="post-container">
      <div class="areas-container">
          <h4 class="area-header">Área(s):</h4>
          {showMinistries}
  
      </div>
      <div class="body-container">
          <h4 class="propuesta-header">Propuesta:</h4>
          <p class="body">"{post.body}"</p>
      </div>
      <p class="id">{post.id}</p>
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
    return (<div>{postsUl}</div>);
  }
}
