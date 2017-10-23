/**
 * Created by Durgaprasad Budhwani on 10/23/2017.
 * @flow
 */

import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import SocialIcons from '../common/social-icons';

const styles = theme => ({
    container: {
    },
    
});

class Footer extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
    };
    
    render () {
        const {
            classes,
        } = this.props;
        return (
            <Grid item
                  className={classes.container}
            >
                <SocialIcons color="grey"/>
            </Grid>
        )
    }
}

export default withStyles(styles)(Footer);