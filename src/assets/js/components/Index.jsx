import React, { Component } from 'react';

function ListItem(props) {
  const post = props.value;
  return (
    <div>
        <p>{post.id}</p>
        <p>{post.type}</p>
        <p>{post.email}</p>
        <p>{post.instagram}</p>
      </div>
  ); 
}

export default class PostListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts, ministries } = this.props;
    if (!posts.length) {
      return (<p>No hay propuestas</p>);
    }
    const postsUl = posts.map((p) => <ListItem key={p.id} value={p} />);
    return (<ul>{postsUl}</ul>);
  }
}
