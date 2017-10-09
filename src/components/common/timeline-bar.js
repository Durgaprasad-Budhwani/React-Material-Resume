/**
 * Created by durgaprasad on 10/3/17.
 */
import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  bar: {
    content: '',
    width: 4,
    opacity: 0.2,
    marginLeft: -2,
    position: 'absolute',
    left: '50%',
    height: '100%',
    top: 0,
    backgroundColor: theme.palette.primary[ 500 ],
  },
});

type Props = {
  height: number,
  top: number
}

class TimelineBar extends PureComponent<void, Props, void> {
  static propTypes: Props = {
    classes: PropTypes.object.isRequired,
    top: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };
  
  render () {
    const { classes, height, top } = this.props;
    return (
      <div className={classes.bar}
	   style={{ height, top }}/>
    )
  }
}

export default withStyles(styles)(TimelineBar);