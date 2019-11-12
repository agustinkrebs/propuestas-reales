import React, { Component } from 'react';
import VoteComponent from '../components/Vote';

function postObject(posts) {
  const rPosts = posts.reverse();
  const objectList = rPosts.map((p) => JSON.parse(p));
  objectList.forEach((p) => {
    p.body = p.body.replace(/&quote&/g, "'").replace(/&line&/g, ' ');
  });
  return objectList;
}


async function getIp() {
  const ip = fetch('http://www.geoplugin.net/json.gp')
    .then((response) => response.json())
    .then((myJson) => {
      console.log(myJson);
      return myJson.geoplugin_request;
    });
  return ip;
}


export default class Vote extends Component {
  constructor(props) {
    super(props);
    const posts = postObject(postList);

    this.state = {
      posts,
      nonVoted: posts,
      currentPost: posts[0],
      urgency: 0,
      affinity: 0,
      noMorePosts: false,
      userIp: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateNonVoted = this.updateNonVoted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const ip = await getIp();
    this.setState({ userIp: ip });
  }

  async handleChange(event) {
    await this.setState({ [event.target.name]: event.target.value });
  }

  async updateNonVoted() {
    const { nonVoted } = this.state;
    nonVoted.shift();
    if (nonVoted.length) {
      await this.setState({ nonVoted });
      await this.setState({ currentPost: nonVoted[0] });
    } else {
      await this.setState({ noMorePosts: true });
    }
  }

  async onSubmit(event) {
    const data = new FormData();
    data.append('affinity', this.state.affinity);
    data.append('urgency', this.state.urgency);
    data.append('postId', this.state.currentPost.id);
    data.append('userIp', this.state.userIp);
    fetch('/votes', {
      method: 'POST',
      body: data,
    });
    this.updateNonVoted();
    event.preventDefault();
  }

  render() {
    if (this.state.noMorePosts) {
      return (
        <h3>Gracias por tu ayuda! Ya opinaste sobre todas las propuestas</h3>
      );
    }
    return (
      <div className="react-index-container">
        <div className="posts-container">
          <VoteComponent currentPost={this.state.currentPost} />
        </div>
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <button type="submit" className="votar-button">
                Votar
          </button>
        </form>

      </div>
    );
  }
}
