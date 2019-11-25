import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import TopPosts from '../components/TopPosts'
import PostsCharts from '../components/PostsCharts'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({})
class Dashboard extends Component {
  render() {
    return (
      <Grid container direction="row">
        <TopPosts />
        <PostsCharts />
      </Grid>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
