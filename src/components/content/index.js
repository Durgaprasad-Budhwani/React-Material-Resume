/**
 * Created by durgaprasad on 8/17/17.
 */
import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import About from './about';
import Contact from './contact';
import {Element} from 'react-scroll';

const styles = theme => ({
    container: {
        marginLeft: '20px',
        marginRight: '20px',
    },
    content: {
        zIndex: 2,
        position: 'relative',
        paddingRight: 10,
        paddingLeft: 20
    },
    padding0: {
        padding: '0 !important'
    }
});

class Content extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid
                container
                justify={'center'}
                className={classes.content}>
                <Grid xs={12}
                      sm={12}
                      md={8}
                      item
                      container
                      direction={"column"}
                      className={classes.padding0}
                      lg={8}>
                    <About/>
                    <Element name="contact">
                        <Contact/>
                    </Element>
                </Grid>
            </Grid>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);