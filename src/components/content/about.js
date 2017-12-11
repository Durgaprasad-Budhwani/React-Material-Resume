/**
 * Created by durgaprasad on 8/29/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import * as Scroll from 'react-scroll';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import Profile from './profile';
import Info from './info';
import Skills from './skills';
import WorkExperience from './timeline';
import Blog from './blog';
import Education from './education';

const {Element} = Scroll;


const styles = theme => ({
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
});

class About extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid
                container
                spacing={0}
                className={classes.about}
            >
                <Grid item
                      xs={12}>
                    <Element name="profile">
                        <Profile/>
                    </Element>
                </Grid>
                <Grid item
                      xs={12}>
                    <Element name="info">
                        <Info/>
                    </Element>
                </Grid>
                <Grid item
                      xs={12}>
                    <Element name="experience">
                        <WorkExperience/>
                    </Element>
                </Grid>
                <Grid item
                      xs={12}>
                    <Element name="skills">
                        <Skills/>
                    </Element>
                </Grid>
                <Grid item
                      xs={12}>
                    <Element name="education">
                        <Education/>
                    </Element>
                </Grid>
                <Grid item
                      xs={12}>
                    <Element name="blog">
                        <Blog/>
                    </Element>
                </Grid>
            </Grid>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);