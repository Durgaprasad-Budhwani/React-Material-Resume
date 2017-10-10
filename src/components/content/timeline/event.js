/**
 * Created by durgaprasad on 9/15/17.
 */
// @flow
import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { LEFT, RIGHT } from '../../utils/Constants';

const styles = theme => ({
  date: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: 'center',
    marginBottom: 0,
    color: theme.palette.primary[ 500 ],
    marginTop: 10
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
});

type Props = {
  classes: any,
  year: string,
  company: string,
  title: string,
  description: string,
}

class Event extends PureComponent<void, Props, void> {
  static propTypes: Props = {
    classes: PropTypes.object.isRequired,
    year: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  render () {
    const {
      classes,
      year,
      title,
      company,
      description
    } = this.props;
    return (
      <Grid container
	    direction="column"
	    align="center">
	<div className={classes.date}>{year}</div>
	<h3 className={classes.header3}>{company}</h3>
	<h4 className={classes.header4}>{title}</h4>
	<p style={{ wordWrap: 'normal' }}>{description}</p>
      </Grid>
    )
  }
}


export default withStyles(styles)(Event);