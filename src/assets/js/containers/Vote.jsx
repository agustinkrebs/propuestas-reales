import React, { Component } from 'react';
import VoteComponent from '../components/Vote';
import {Slider} from 'react-md';
import 'react-md/src/scss/_react-md.scss'

const face1 = "https://static.thenounproject.com/png/2546407-200.png";
const face2 = "https://static.thenounproject.com/png/2546575-200.png";
const face3 = "https://static.thenounproject.com/png/2546469-200.png";
const face4 = "https://static.thenounproject.com/png/2546486-200.png";
const face5 = "https://static.thenounproject.com/png/2561904-200.png";

function postObject(posts) {
  const objectList =  JSON.parse(posts);
  objectList.forEach((p) => {
    p.body = p.body.replace(/&quote&/g, "'").replace(/&line&/g, ' ');
  });
  return objectList;
}

export default class Vote extends Component {
  constructor(props) {
    super(props);
    const posts = postObject(props.serverData.posts);
    let styles = ['emoji', 'emoji', 'emoji', 'emoji', 'emoji'];

    this.state = {
      posts,
      nonVoted: posts,
      currentPost: posts[0],
      urgency: -1,
      affinity: -1,
      noMorePosts: false,
      userIp: null,
      styles: styles,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateNonVoted = this.updateNonVoted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.affinity1 = this.affinity1.bind(this);
    this.affinity2 = this.affinity2.bind(this);
    this.affinity3 = this.affinity3.bind(this);
    this.affinity4 = this.affinity4.bind(this);
    this.affinity5 = this.affinity5.bind(this);
    this.updateUrgency = this.updateUrgency.bind(this);
  }

  async componentDidMount() {
    const publicIp = require('public-ip');
    const ip = await publicIp.v4();
    this.setState({ userIp: ip });
  }

  async handleChange(event) {
    await this.setState({ [event.target.name]: event.target.value });
  }

  async affinity1() {
    this.setState({styles: ['emoji-elegida', 'emoji', 'emoji', 'emoji', 'emoji']});
    this.setState({affinity: 1});
  }

  async affinity2() {
    this.setState({styles: ['emoji', 'emoji-elegida', 'emoji', 'emoji', 'emoji']});
    this.setState({affinity: 2});
  }

  async affinity3() {
    this.setState({styles: ['emoji', 'emoji', 'emoji-elegida', 'emoji', 'emoji']});
    this.setState({affinity: 3});
  }

  async affinity4() {
    this.setState({styles: ['emoji', 'emoji', 'emoji', 'emoji-elegida', 'emoji']});
    this.setState({affinity: 4});
  }

  async affinity5() {
    this.setState({styles: ['emoji', 'emoji', 'emoji', 'emoji', 'emoji-elegida']});
    this.setState({affinity: 5});
  }


  async updateUrgency(urgency) {
    this.setState({ urgency });
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
    event.preventDefault();
    await this.updateNonVoted();
    await this.setState({ urgency: -1, affinity: -1, styles: ['emoji', 'emoji', 'emoji', 'emoji', 'emoji'] });
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
        <div className="votos">
          <h1>¿Qué te parece?</h1>
          <div className="faces">
            <img className={this.state.styles[0]} src={face1} onClick={this.affinity1}/>
            <img className={this.state.styles[1]} src={face2} onClick={this.affinity2}/>
            <img className={this.state.styles[2]} src={face3} onClick={this.affinity3}/>
            <img className={this.state.styles[3]} src={face4} onClick={this.affinity4}/>
            <img className={this.state.styles[4]} src={face5} onClick={this.affinity5}/>
          </div>
          <h1>¿Qué tan urgente crees que es?</h1>
          <div className="slider-bar">
            <Slider
              discrete
              id="discreteDefault"
              value={this.state.urgency}
              onChange={this.updateUrgency}
              max={5}
              step={1}
              discreteTicks={1}
              valuePrecision={1}
              />
          </div>
          <form onSubmit={this.onSubmit} encType="multipart/form-data">
            <button type="submit" className="votar-button">
                Calificar
            </button>
          </form>
        </div>
      </div>
    )
  }
}
