/**
 * Created by durgaprasad on 9/5/17.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Ionicon from 'react-ionicons';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 15,
    marginBottom: 15
  },
  container: {
    padding: 10
  }
});

class SocialIcons extends PureComponent {
  render() {
    const classes = this.props.classes;
    return (
      <Grid item container align="center" justify="center" spacing={24} className={classes.container}>
	<IconButton className={classes.button} aria-label="Add an alarm">
	  <Ionicon icon="ion-social-facebook" fontSize="24px" color="white"/>
	</IconButton>
	<IconButton className={classes.button} aria-label="Add an alarm">
	  <Ionicon icon="ion-social-twitter" fontSize="24px" color="white"/>
	</IconButton>
	<IconButton className={classes.button} aria-label="Add an alarm">
	  <Ionicon icon="ion-social-linkedin" fontSize="30px" color="white"/>
	</IconButton>
	<IconButton className={classes.button} aria-label="Add an alarm">
	  <Ionicon icon="ion-social-googleplus" fontSize="24px" color="white"/>
	</IconButton>
	<IconButton className={classes.button} aria-label="Add an alarm">
	  <Ionicon icon="ion-social-github" fontSize="24px" color="white"/>
	</IconButton>
      </Grid>
    )
  }
}

SocialIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialIcons);