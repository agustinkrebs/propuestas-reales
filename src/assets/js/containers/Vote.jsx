import React, { Component } from 'react';
import VoteComponent from '../components/Vote';
import {Slider} from 'react-md';
import 'react-md/src/scss/_react-md.scss'

const happy = "https://static.thenounproject.com/png/407445-200.png";
const soso = "https://static.thenounproject.com/png/1538729-200.png";
const sad = "https://static.thenounproject.com/png/1259652-200.png";
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
    let styles = ['emoji', 'emoji', 'emoji'];

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
    this.happyAffinity = this.happyAffinity.bind(this);
    this.sadAffinity = this.sadAffinity.bind(this);
    this.indifferentAffinity = this.indifferentAffinity.bind(this);
    this.updateUrgency = this.updateUrgency.bind(this);
  }

  async componentDidMount() {
    const ip = await getIp();
    this.setState({ userIp: ip });
  }

  async handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    await this.setState({ [event.target.name]: event.target.value });
  }

  async sadAffinity() {
    console.log("cambio afiniut");
    this.setState({styles: ['emoji', 'emoji', 'emoji-elegida']});
    this.setState({affinity: 1});
  }

  async indifferentAffinity() {
    console.log("cambio afiniut");
    this.setState({styles: ['emoji', 'emoji-elegida', 'emoji']});
    this.setState({affinity: 2});
  }

  async happyAffinity() {
    console.log("cambio afiniut");
    this.setState({styles: ['emoji-elegida', 'emoji', 'emoji']});
    this.setState({affinity: 3});
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
    this.updateNonVoted();
    await this.setState({ urgency: -1, affinity: -1, styles:['emoji', 'emoji', 'emoji']})
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
        <div className="votos">
          <h1>¿Qué te parece?</h1>
          <img className={this.state.styles[0]} src={happy} onClick={this.happyAffinity}/>
          <img className={this.state.styles[1]} src={soso} onClick={this.indifferentAffinity}/>
          <img className={this.state.styles[2]} src={sad} onClick={this.sadAffinity}/>
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
        </div>
        
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <button type="submit" className="votar-button">
                Votar
          </button>
        </form>
        </div>
    )
  }
}
