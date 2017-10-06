/**
 * Created by durgaprasad on 10/5/17.
 */
import React, { PureComponent } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styles = theme => ({
  container: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.1,
    display: 'inline-block',
    padding: '7px 12px',
    textTransform: 'uppercase',
    position: 'relative',
    backgroundColor: theme.palette.primary[500],
    borderLeftColor: theme.palette.primary[500],
    
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
      borderLeftColor: theme.palette.primary[500],
    }
    
  },
});

class Bubble extends PureComponent {
  render() {
    const {classes, content} = this.props;
    return (
      <span className={classes.container}>{content}</span>
    )
  }
}

export default withStyles(styles)(Bubble);
