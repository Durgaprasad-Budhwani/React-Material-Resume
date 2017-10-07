/**
 * Created by durgaprasad on 8/17/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import About from './about';
import Contact from './contact';

const styles = theme => ({
    container: {
        marginLeft: '20px',
        marginRight: '20px',
    },
    content: {
        zIndex: 2,
        position: 'relative',
    },
});

class Content extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid justify="center"
                  align='center'
                  container
                  spacing={0}>
                <Grid item
                      xs={12}
                      sm={10}
                      md={8}
                      lg={6}
                      className={classes.content}>
                    <Contact />
                    <About />
                </Grid>
            </Grid>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);