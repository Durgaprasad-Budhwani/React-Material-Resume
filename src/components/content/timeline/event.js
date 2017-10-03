/**
 * Created by durgaprasad on 9/15/17.
 */
// @flow
import React, { PureComponent } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LEFT, RIGHT } from '../../utils/Constants';

const styles = createStyleSheet(theme => ({
  sectionTitle: {
    color: '#3d4451',
    fontSize: 34,
    lineHeight: 1.2,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30
  },
  paper: {
    borderColor: theme.palette.primary[ 500 ],
    padding: 20,
    borderTopWidth: 5,
    borderTopStyle: 'solid'
  },
  paperLeft: {
    marginRight: 35
  },
  paperRight: {
    marginLeft: 35
  },
  date: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: 'center',
    marginBottom: 0,
    color: theme.palette.primary[ 500 ],
    marginTop: 10
  },
  box: {
    width: '50%',
    color: '#757575',
    fontSize: 16,
    lineHeight: 1.5,
    marginBottom: 25,
    position: 'relative',
  },
  boxLeft: {
    float: 'left',
    clear: 'left'
  },
  boxRight: {
    float: 'right',
    clear: 'right'
  },
  dot: {
    top: 80,
    width: 8,
    height: 8,
    display: 'block',
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary[ 500 ],
    
  },
  header3: {
    color: '#414141',
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 1.1,
    textAlign: 'center',
    marginBottom: 0,
    marginToo: 0
  },
  header4: {
    color: '#878787',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.1,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
  arrow: {
    top: 60,
    display: 'block',
    content: "''",
    position: 'absolute',
    width: 0,
    height: 0,
    boxSizing: 'border-box',
    border: '1em solid black',
    borderColor: 'transparent transparent white white',
    transformOrigin: '0 0',
    boxShadow: '-1px 1px 1px 0 rgba(0, 0, 0, 0.2)'
  },
  arrowRight: {
    right: 4,
    top: 105,
    transform: 'rotate(-135deg)',
  },
  arrowLeft: {
    left:35,
    top: 60,
    transform: 'rotate(45deg)',
  },
  dotRight: {
    right: 0,
    marginRight: -4
  },
  dotLeft: {
    left: 0,
    marginLeft: -4
  }
}));

type Props = {
  classes: any,
  title: string
}

class Event extends PureComponent<void, Props, void> {
  static propTypes: Props = {
    classes: PropTypes.object.isRequired,
    year: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    alignment: PropTypes.oneOf([ LEFT, RIGHT ]).isRequired
  };
  
  render () {
    const {
      classes,
      alignment,
      year,
      title,
      company,
      description
    } = this.props;
    return (
      <div className={classNames({
	[classes.box]: true,
	[classes.boxLeft]: alignment === LEFT,
	[classes.boxRight]: alignment === RIGHT
      })}>
	<Paper className={(
	  {
	    [classes.paper]: true,
	    [classes.paperLeft]: alignment === LEFT,
	    [classes.paperRight]: alignment === RIGHT
	  }
	)}>
	  <span className={classNames({
	    [classes.arrow]: true,
	    [classes.arrowRight]: alignment === LEFT,
	    [classes.arrowLeft]: alignment === RIGHT
	  })}/>
	  <Grid container
		direction="column"
		align="center">
	    <div className={classes.date}>{year}</div>
	    <h3 className={classes.header3}>{company}</h3>
	    <h4 className={classes.header4}>{title}</h4>
	    
	    <p>{description}</p>
	  </Grid>
	</Paper>
	<span className={classNames({
	  [classes.dot]: true,
	  [classes.dotRight]: alignment === LEFT,
	  [classes.dotLeft]: alignment === RIGHT,
	})}/>
      </div>
    )
  }
}


export default withStyles(styles)(Event);