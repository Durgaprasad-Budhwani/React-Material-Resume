/**
 * Created by durgaprasad on 9/6/17.
 */
// @flow
import React, { PureComponent } from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  sectionTitle: {
    color: '#3d4451',
    fontSize: 34,
    lineHeight: 1.2,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
});

type Props = {
  classes: any,
  title: string
}

/**
 * ##SectionTitle example - Ref - Header Component for more details
 *```
 *   <SectionTitle to="profile"
 *      title="About"
 *      enableNavigationItemClass={navigationItemClass}/>
 *```
 */
class SectionTitle extends PureComponent<void, Props, void> {
  static propTypes: Props = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  };
  
  render () {
    const { classes, title } = this.props;
    return (
      <span className={classes.sectionTitle}>{title}</span>
    )
  }
}


export default withStyles(styles)(SectionTitle);