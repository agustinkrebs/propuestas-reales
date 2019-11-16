import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { drawTypeChart, drawMinistryChart } from '../vis/dashboard'

export class PostsCharts extends Component {
  constructor(props) {
    super(props)
    this.state = { ministries: {}, types: {}, total: 0 }
    this.getNPosts = this.getNPosts.bind(this)
  }
  componentDidMount() {
    this.getNPosts()
  }

  async getNPosts() {
    const response = await fetch('/api/stats/nposts')
    const stats = await response.json()
    const ministries = []
    const types = []
    for (const [key, value] of Object.entries(stats.ministries)) {
      ministries.push({ key, value })
    }
    let total = 0
    for (const [key, value] of Object.entries(stats.types)) {
      if (key !== 'nan') {
        types.push({ key, value })
        total += value
      }
    }
    this.setState({
      ministries,
      types,
      total,
    })
    drawTypeChart(types)
    drawMinistryChart(ministries)
  }

  render() {
    const { total } = this.state
    return (
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Total: {total}
            </Typography>
            <div id="type-chart" />
          </Grid>
          <Grid item xs={12}>
            <div id="ministry-chart" />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default PostsCharts
