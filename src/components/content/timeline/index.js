/**
 * Created by durgaprasad on 9/15/17.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Event from './event';
import SectionTitle from './../../common/section-title';
import { LEFT, RIGHT } from '../../utils/Constants';

const styles = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    height: '100%',
  },
  button: {
    marginTop: 15,
    marginBottom: 15
  },
  container: {
    padding: 10
  }
}));

class Skilss extends PureComponent {
  render () {
    const classes = this.props.classes;
    return (
      <Grid container
	    align="center"
	    direction="column"
	    justify="center">
	<SectionTitle title='Work Experience'/>
	<Event name="CSS"
	       title="Full Stack Developer"
	       company="Varian Medical System"
	       alignment={RIGHT}
	       description="TBD"
	       year="2014 - Present"
	/>
	<Event name="CSS"
	       title="Full Stack Developer"
	       company="Varian Medical System"
	       alignment={LEFT}
	       description="TBD"
	       year="2014 - Present"
	/>
      </Grid>
    )
  }
}

Skilss.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skilss);