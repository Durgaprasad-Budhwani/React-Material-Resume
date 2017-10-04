/**
 * Created by durgaprasad on 8/29/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import PropTypes from 'prop-types';
import Profile from './profile/profile';
import Skills from './skills';
import Timeline from './timeline';
import Blog from './blog';

const styles = createStyleSheet(theme => ({
    about: {
        marginTop: 50,
        [theme.breakpoints.up('sm')]: {
            marginTop: 70,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
        },
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

class About extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid item
                  container
                  className={classes.about}
                  direction="column"
                  spacing={24}
            >
                <Grid item
                      xs={12}>
                    <Profile />
                </Grid>
                <Grid item
                      xs={12}>
                    <Timeline />
                </Grid>
                <Grid item
                      xs={12}>
                    <Blog />
                </Grid>
               
                <Grid item
                      xs={12}>
                    <Skills />
                </Grid>
            
            </Grid>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

console.log(styles);

export default withStyles(styles)(About);