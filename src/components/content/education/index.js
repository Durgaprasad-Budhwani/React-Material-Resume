/**
 * Created by durgaprasad on 10/5/17.
 */
/**
 * Created by durgaprasad on 9/15/17.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PropTypes from 'prop-types';
import EventContainer from '../../common/event-container';
import Event from './event';
import SectionTitle from './../../common/section-title';
import { LEFT, RIGHT } from '../../utils/Constants';
import TimelineBar from './../../common/timeline-bar';

const styles = createStyleSheet(theme => ({
  relative: {
    position: 'relative',
  },
  clear: {
    position: 'relative',
    '*zoom': 1,
    
    '&:before': {
      content: " ",
      display: 'table',
    },
    
    '&:after': {
      content: " ",
      display: 'table',
      clear: 'both'
    }
  }
}));

class Timeline extends PureComponent {
  render () {
    const classes = this.props.classes;
    return (
      <Grid container
	    style={{marginBottom: 30}}
	    align="center"
	    direction="column"
	    justify="center">
	<SectionTitle title='Work Experience'/>
	<div style={{ position: 'relative' }}>
	  <div className={classes.clear}>
	    <TimelineBar height={40}
			 top={80}/>
	    <EventContainer
	      alignment={RIGHT}
	    >
	      <Event name="CSS"
		     title="Full Stack Developer"
		     company="Varian Medical System"
		     description="TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD "
		     year="2014 - Present"
	      />
	    </EventContainer>
	    <EventContainer
	      alignment={LEFT}
	    >
	      <Event name="CSS"
		     title="Full Stack Developer"
		     company="Varian Medical System"
		     description="TBD"
		     year="2014 - Present"
	      />
	    </EventContainer>
	  </div>
	</div>
      
      </Grid>
    )
  }
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timeline);