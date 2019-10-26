import React, { Component } from 'react';
import IndexService from '../services/Index';
import PostListComponent from '../components/Index';

function postObject(posts) {
  const rPosts = posts.reverse();
  const objectList = rPosts.map((p) => JSON.parse(p));
  return objectList;
}

function ministryObject(ministries) {
  const objectList = ministries.map((m) => JSON.parse(m));
  return objectList;
}

export default class PostList extends Component {
  constructor(props) {
    super(props);
    const posts = postObject(postList);
    const ministries = ministryObject(ministriesList);

    this.state = {
      ministries,
      posts,
      filteredPosts: posts,
      type: '-',
      ministry: '-',
    };
    this.typeFilter = this.typeFilter.bind(this);
    this.ministryFilter = this.ministryFilter.bind(this);
  }

  componentDidMount() {
  }

  async typeFilter(event) {
    await this.setState({ type: event.target.value });
    const filteredPosts = await IndexService.typeFilter(this.state.posts, this.state.type);
    await this.setState({ filteredPosts });
  }

  async ministryFilter(event) {
    await this.setState({ ministry: event.target.value });
    const filteredPosts = await IndexService.ministryFilter(this.state.posts, this.state.ministry);
    await this.setState({ filteredPosts });
  }

  render() {
    const ministryOptions = this.state.ministries.map((m) => <option value={m.ministry}>{m.ministry}</option>);
    return (
      <div className="react-index-container">
        <h3>Filtra las propuestas:</h3>
        <div className="filter-type-container">
          <select id="content" name="type" onChange={this.typeFilter}>
            <option value="-">- Tipo -</option>
            <option value="law">Reforma/cambio a un Proyecto de Ley</option>
            <option value="citizen-project">Proyecto ciudadano</option>
            <option value="company-project">Proyecto dirigido a empresas</option>
          </select>
        </div>
        <div className="ministries-container">
          <select id="content" name="ministry" onChange={this.ministryFilter}>
            <option value="-">- Categoria -</option>
            {ministryOptions}
          </select>
        </div>

        <div className="posts-container">
          <PostListComponent posts={this.state.filteredPosts} />
        </div>
      </div>
    );
  }
}
