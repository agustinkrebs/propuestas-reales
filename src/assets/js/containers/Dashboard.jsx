import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    padding: '10px',
  },
  heading: {
    fontSize: '15px',
  },
})

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }
  componentDidMount() {
    this.getTopPosts()
  }

  async getTopPosts() {
    const response = await fetch('/api/stats')
    const posts = await response.json()
    this.setState({ posts })
  }

  render() {
    const { classes } = this.props
    console.log(this.state.posts)
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
          <Grid item xs={10}></Grid>
          {this.state.posts.map((post, i) => (
            <Grid item key={i} xs={10}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {post.type}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>{post.body}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
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
