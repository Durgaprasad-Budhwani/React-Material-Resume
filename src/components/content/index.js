/**
 * Created by durgaprasad on 8/17/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import About from './about';
import Contact from './contact';
import Scroll from 'react-scroll';

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

const {Element} = Scroll;

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
                      style={{position:'relative'}}
                      lg={8}>
                    <Element name="profile">
                        <About/>
                    </Element>
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