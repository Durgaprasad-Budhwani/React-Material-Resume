/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 * @flow
 */

import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ContactForm from './contact-form';
import Map from './map';
import SectionTitle from './../common/section-title';

const styles = theme => ({
    container: {
        margin: 0,
        padding: 0
    },
    itemContainer: {
        padding: 10,
        [theme.breakpoints.down('md')]: {
            padding: 0,
        },
    }
});

class About extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid
                alignItems="center"
                direction="column"
                container
                className={classes.container}
                spacing={0}
            >
                <SectionTitle title='Contact Me'/>
                <Grid container
                      direction="row"
                      alignItems="stretch"
                      justify="space-between"
                      spacing={0}
                >
                    <Grid
                        item
                        lg={6}
                        xs={12}
                        className={classes.itemContainer}
                    >
                        <ContactForm/>
                    </Grid>
                    <Grid
                        item
                        lg={6}
                        xs={12}
                        className={classes.itemContainer}
                    >
                        <Map/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);