import React, { Component } from 'react';
import PostListComponent from '../components/Index';

function postObject(posts) {
  const rPosts = posts.reverse();
  const objectList = rPosts.map((p) => JSON.parse(p));
  objectList.forEach(p => {
    p.body = p.body.replace(/&quote&/g, "'").replace(/&line&/g, " ");
  });
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
      typeFilter: '-',
      ministryFilter: '-',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  async handleChange(event) {
    await this.setState({ [event.target.name]: event.target.value });
    await this.filter();
  }

  async filter() {
    let newFilteredPosts = this.state.posts;
    if (this.state.typeFilter !== '-') {
      newFilteredPosts = newFilteredPosts.filter((p) => p.type === this.state.typeFilter);
    }
    if (this.state.ministryFilter !== '-') {
      newFilteredPosts = newFilteredPosts.filter((p) => p.ministries.includes(this.state.ministryFilter));
    }
    await this.setState({ filteredPosts: newFilteredPosts });
  }

  render() {
    const ministryOptions = this.state.ministries.map((m) => <option value={m.ministry}>{m.ministry}</option>);
    return (
      <div className="react-index-container">
        <h3>Filtra las propuestas:</h3>
        <div className="filter-type-container">
          <select id="content" name="typeFilter" onChange={this.handleChange}>
            <option value="-">Todos los tipos:</option>
            <option value="Reforma/cambio a un Proyecto de Ley">Reforma/cambio a un Proyecto de Ley</option>
            <option value="Proyecto ciudadano">Proyecto ciudadano</option>
            <option value="Proyecto dirigido a empresas">Proyecto dirigido a empresas</option>
          </select>
        </div>
        <div className="ministries-container">
          <select id="content" name="ministryFilter" onChange={this.handleChange}>
            <option value="-">Todas las áreas:</option>
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
