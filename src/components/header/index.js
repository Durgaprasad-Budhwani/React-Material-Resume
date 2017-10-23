/**
 * Created by durgaprasad on 8/17/17.
 */
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Scroll from 'react-scroll';
const {Link} = Scroll;

const styles = theme => ({
  header: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '35px',
    },
  },
  headerBar: {
    backgroundColor: 'transparent'
  },
  headerBackground: {
    height: '515px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'gray'
  },
  flex: {
    flex: 1,
  },
  scrollChor: {
    color: '#fff',
    fontSize: '14',
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1,
    display: 'inline-block',
    textDecoration: 'none'
  },
  scrollChorActive: {
    color: 'red',
  }
});

class Header extends Component {
  render () {
    const classes = this.props.classes;
    return (
      <div className={classes.header}>
	<div className={classes.headerBackground}></div>
	<AppBar position="fixed"
		className={classes.headerBar}>
	  <Toolbar>
	    <IconButton color="contrast"
			aria-label="Menu">
	      <MenuIcon />
	    </IconButton>
	    <div
	      className={classes.flex}>
	    </div>
	    <Link to="profile"
		  spy={true}
		  smooth={true}
		  duration={500}
		  offset={-50}
		  activeClass={classes.scrollChorActive}
		  className={classes.scrollChor}>Profile </Link>
	    <Link to="contact"
		  spy={true}
		  smooth={true}
		  duration={500}
		  offset={-300}
		  activeClass={classes.scrollChorActive}
		  className={classes.scrollChor}>Contact </Link>
	  </Toolbar>
	</AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);