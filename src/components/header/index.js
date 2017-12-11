/**
 * Created by durgaprasad on 8/17/17.
 */
import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import LinkTo from '../common/link-to';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    header: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            minHeight: 0,
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '30px',
        },
    },
    headerBar: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        boxShadow: 'none',
    },
    headerBarFixed: {
        backgroundColor: 'white',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);'
    },
    headerBackground: {
        height: '515px',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: 'url(cover.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat'
    },
    flex: {
        flex: 1,
    },
    
});

class Header extends Component {
    state = {
        position: 'static',
        navigationItemClass: true
    };
    
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.handleScroll();
    }
    
    handleScroll () {
        if (ReactDOM.findDOMNode(this).getBoundingClientRect) {
            let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
            let position = 'static';
            let navigationItemClass = false;
            if (rect) {
                if ((rect.y || rect.top) < -45) {
                    position = 'fixed';
                    navigationItemClass = true
                }
                this.setState({
                    position,
                    navigationItemClass
                })
            }
        }
    }
    
    render () {
        const classes = this.props.classes;
        const {position, navigationItemClass} = this.state;
        const headerClass = classNames({
            [classes.headerBar]: true,
            [classes.headerBarFixed]: position === 'fixed',
        });
        return (
            <div className={classes.header}>
                <div className={classes.headerBackground}/>
                <AppBar position="fixed"
                        className={headerClass}>
                    <Toolbar>
                        <IconButton color="contrast"
                                    aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <div
                            className={classes.flex}>
                        </div>
                        <Grid
                            className={classes.flex}
                            container
                            spacing={0}
                            direction="row"
                        >
                            <LinkTo to="profile"
                                    title="About"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="experience"
                                    title="Experience"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="skills"
                                    title="Skills"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="education"
                                    title="Education"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="blog"
                                    title="Blog"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="contact"
                                    title="Contact"
                                    offset={-400}
                                    enableNavigationItemClass={navigationItemClass}/>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);