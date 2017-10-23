/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 * @flow
 */

import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import ContactForm from './contact-form';
import Map from './map';
import SectionTitle from './../common/section-title';

const styles = theme => ({
    container: {
        marginTop: 50,
        marginBottom: 0
    },
});

class About extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid
                className={classes.container}
                container
                align="stretch"
                direction="column"
                justify="center"
            >
                <SectionTitle title='Contact Me'/>
                <Grid item
                      container
                      direction="row"
                      align="stretch"
                      justify="space-around"
                      spacing={16}
                >
                    <Grid item
                          xs={6}
                          container
                          justify="center"
                          align="stretch"
                    >
                        <ContactForm/>
                    </Grid>
                    <Grid item
                          container
                          xs={6}
                          align="stretch"
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