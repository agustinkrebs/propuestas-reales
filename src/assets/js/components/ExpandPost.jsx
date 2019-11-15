import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  panelSummaryType: {
    padding: '0 24px 8px 24px',
  },
  panelSummary: {
    backgroundColor: 'rgb(51, 56, 129)',
    color: 'white',
    padding: '0px',
  },
  panelSummaryPreview: {
    backgroundColor: 'white',
    marginBottom: '-12px',
    color: 'black',
    padding: '0 24px 8px 24px',
  },
}))

function ExpandPost(props) {
  const classes = useStyles()
  return (
    <ExpansionPanel
      className={classes.panel}
      onChange={(e, expand) => props.expandHandler(expand, props.index)}
    >
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.panelSummary}
      >
        <Grid container direction="column">
          <Grid item className={classes.panelSummaryType}>
            <Typography>{props.post.type}</Typography>
          </Grid>
          <Grid
            item
            className={
              props.expand
                ? classes.panelSummaryType
                : classes.panelSummaryPreview
            }
          >
            <Typography className={classes.heading}>{props.summary}</Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{props.detail}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

ExpandPost.propTypes = {
  detail: PropTypes.string,
  summary: PropTypes.string,
  post: PropTypes.object.isRequired,
  expandHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  expand: PropTypes.bool,
}

export default ExpandPost
