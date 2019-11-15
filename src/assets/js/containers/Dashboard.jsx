import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import ExpandPost from '../components/ExpandPost'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({})
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      summaries: Array(10),
      details: Array(10),
      expanded: Array(10),
    }
    this.expandHandler = this.expandHandler.bind(this)
  }
  componentDidMount() {
    this.getTopPosts()
  }

  async getTopPosts() {
    const response = await fetch('/api/stats')
    const posts = await response.json()
    this.setState({
      posts,
      summaries: posts.map(post => post.body.slice(0, 100) + '...'),
      details: posts.map(post => post.body),
    })
  }

  expandHandler(expand, i) {
    const { summaries, posts, expanded } = this.state
    if (expand) {
      summaries[i] = ''
    } else {
      summaries[i] = posts[i].body.slice(0, 100) + '...'
    }
    expanded[i] = expand
    this.setState({ summaries, expanded })
  }

  render() {
    const { summaries, details, posts, expanded } = this.state
    return (
      <Grid container>
        <Grid
          container
          item
          justify="center"
          xs={6}
          direction="row"
          spacing={1}
        >
          <Grid item xs={10}>
            <Typography align="center" variant="h5">
              Propuestas más relevantes
            </Typography>
          </Grid>
          {posts.map((post, i) => (
            <Grid item key={i} xs={10}>
              <ExpandPost
                detail={details[i]}
                summary={summaries[i]}
                post={post}
                expand={expanded[i]}
                index={i}
                expandHandler={this.expandHandler}
              ></ExpandPost>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" align="center">
            Viz 2
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
