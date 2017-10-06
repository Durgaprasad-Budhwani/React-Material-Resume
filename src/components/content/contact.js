/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 */

import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import PropTypes from 'prop-types';
import ContactForm from './contact-form';

const styles = theme => ({
    container: {
        marginTop: 50,
    },
});

class About extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid item
                  container
                  className={classes.container}
                  direction="row"
                  spacing={16}
            >
                <Grid item
                      xs={6}>
                    <ContactForm />
                </Grid>
                <Grid item
                      xs={6}>
                </Grid>
            </Grid>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);