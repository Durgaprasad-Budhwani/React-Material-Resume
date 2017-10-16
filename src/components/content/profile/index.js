/**
 * Created by durgaprasad on 8/30/17.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import SocialIcons from './social-icons';
import Bubble from '../../common/bubble';
import ContactInfo from '../../common/contact-info';

const styles = theme => ({
  profile: {
    padding: '57px 50px 15px 50px',
    [theme.breakpoints.down('lg')]: {
      padding: '50px 40px 15px 40px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '30px 20px 15px 20px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 20px 15px 20px'
    },
    marginBottom: 10
  },
  profilePhoto: {
    maxWidth: '100%'
  },
  profileInfo: {
    color: '#3d4451',
    paddingBottom: 25,
    marginBottom: 25,
    borderBottom: '1px solid #dedede',
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.1,
    display: 'inline-block',
    padding: '7px 12px',
    textTransform: 'uppercase',
    position: 'relative',
    backgroundColor: theme.palette.primary[ 500 ],
    borderLeftColor: theme.palette.primary[ 500 ],
    
    '&:before': {
      content: '""',
      width: 0,
      height: 0,
      top: '100%',
      left: 5,
      display: 'block',
      position: 'absolute',
      borderStyle: 'solid',
      borderWidth: '0 0 8px 8px',
      borderColor: 'transparent',
      borderLeftColor: theme.palette.primary[ 500 ],
    }
    
  },
  
  profileTitle: {
    fontSize: 36,
    lineHeight: 1.1,
    fontWeight: 700,
    marginBottom: 5,
  },
  profileTitleStart: {
    fontWeight: 300
  },
  profilePosition: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: 0,
  },
  profileSocial: {
    backgroundColor: theme.palette.primary[ 500 ],
  }
  
});

class Profile extends PureComponent {
  render () {
    const classes = this.props.classes;
    return (
      <Paper>
	<Grid item
	      container
	      direction="column"
	
	      spacing={0}>
	  <Grid item
		className={classes.profile}
		container
	  >
	    <Grid item
		  xs={5}>
	      <img src="profile.jpeg"
		   alt="Durgaprasad Budhwani"
		   className={classes.profilePhoto}/>
	    </Grid>
	    <Grid item
		  xs={1}/>
	    <Grid item
		  xs={6}
		  container
		  align="center"
		  direction="column">
	      <Grid item
		    className={classes.profileInfo}>
		<div ><Bubble content="Hello"/></div>
		<h1 className={classes.profileTitle}>
		  <span className={classes.profileTitleStart}>I'm</span> Durgaprasad Budhwani
		</h1>
		<h2 className={classes.profilePosition}>Full Stack Developer</h2>
	      </Grid>
	      <ContactInfo />
	    </Grid>
	  </Grid>
	  <Grid
	    className={classes.profileSocial}>
	    <SocialIcons />
	  </Grid>
	</Grid>
      </Paper>
    )
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);

