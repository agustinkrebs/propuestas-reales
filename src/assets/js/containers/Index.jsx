import React, { Component } from 'react';
import IndexService from '../services/Index';
import PostListComponent from '../components/Index';

function postObject(posts) {
const rPosts = posts.reverse();
  const objectList = [];
  rPosts.forEach((p) => {
    const postTuples = p.split(',&,'); // p.id, '&', p.privacy, '&', p.email, '&', p.instagram,  '&', p.type, '&', p.body
    const object = {
 id: postTuples[0], privacy: postTuples[1], email: postTuples[2], instagram: postTuples[3], type: postTuples[4], body: postTuples[5], 
};
    objectList.push(object);
  });
  return objectList;
}

function ministryObject(ministries) {
  const objectList = [];
  ministries.forEach((p) => {
    const minTuples = m.split(',&,'); // p.id, '&', p.privacy, '&', p.email, '&', p.instagram,  '&', p.type, '&', p.body
    const object = { id: minTuples[0], ministry: minTuples[1] };
    objectList.push(object);
  });
  return objectList;
}

export default class PostList extends Component {
  constructor(props) {
    super(props);
    const posts = postObject(postList);
    const ministries = postObject(ministriesList);

    this.state = {
      ministries,
      posts,
      filteredPosts: posts,
      type: '-',
    };

    this.typeFilter = this.typeFilter.bind(this);
  }

  componentDidMount() {
  }

  async typeFilter(event) {
    await this.setState({type: event.target.value});
    const filteredPosts = await IndexService.typeFilter(this.state.posts, this.state.type);
    await this.setState({ filteredPosts });
  }

  render() {
    return (
        <div>
    <div>
        <select id="content" name="type" value={this.state.value} onChange={this.typeFilter}>
            <option value="-">- tipo -</option>
            <option value="law">Reforma/cambio a un Proyecto de Ley</option>
            <option value="citizen-project">Proyecto ciudadano</option>
            <option value="company-project">Proyecto dirigido a empresas</option>
        </select>
    </div>
    
    <div>
    <PostListComponent posts={this.state.filteredPosts} />
    </div>
    </div>
    );}
}
