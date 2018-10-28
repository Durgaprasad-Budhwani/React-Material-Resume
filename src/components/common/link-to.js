/**
 * Created by Durgaprasad Budhwani on 12/11/2017.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-scroll';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

type Props = {
    to: string,
    title: string,
    enableNavigationItemClass: boolean,
    offset: number,
    classes: any
}

const styles = theme => ({
    scrollChor: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: '14',
        fontWeight: 700,
        fontFamily: '"Open Sans", sans-serif',
        lineHeight: 1,
        textDecoration: 'none',
        marginRight: 30,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            marginBottom: 30,
            color: 'white',
        }
    },
    navigationItem: {
        color: 'black',
        [theme.breakpoints.down('md')]: {
            color: 'white'
        }
    },
    spanClass: {
        height: 3,
        marginTop: 10,
        width: '100%',
        backgroundColor: 'transparent'
    },
    activeSpanClass: {
        backgroundColor: theme.palette.primary[ 500 ],
        [theme.breakpoints.down('md')]: {
            backgroundColor: 'transparent'
        }
    },
    activeTitle: {
        [theme.breakpoints.down('md')]: {
            fontStyle: 'italic',
            fontSize: '16',
            fontWeight: 'bold',
        }
    }
});

/**
 * ##LinkTo example - Ref - Contact Component for more details
 *```
 *   <SectionTitle title='Contact Me'/>
 *```
 */
export class LinkTo extends PureComponent<void, Props, void> {
    state = {
        isLinkActive: false
    };
    
    static propTypes: Props = {
        to: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        enableNavigationItemClass: PropTypes.bool.isRequired,
        offset: PropTypes.number.isRequired,
        classes: PropTypes.object.isRequired
    };
    
    static defaultProps: Props = {
        enableNavigationItemClass: false,
        offset: -120,
    };
    
    _handleSetActive () {
        this.setState({
            isLinkActive: true
        })
    }
    
    _handleSetInactive () {
        this.setState({
            isLinkActive: false
        })
    }
    
    render () {
        const {to, title, enableNavigationItemClass, classes, offset} = this.props;
        return (
            <Link to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offset}
                  onSetActive={this._handleSetActive.bind(this)}
                  onSetInactive={this._handleSetInactive.bind(this)}
                  className={classNames({
                      [classes.scrollChor]: true,
                      [classes.navigationItem]: enableNavigationItemClass,
                  })}>
                <span
                    className={classNames({
                        [classes.activeTitle]: this.state.isLinkActive,
                    })}
                >{title}</span>
                <span className={classNames({
                    [classes.spanClass]: true,
                    [classes.activeSpanClass]: this.state.isLinkActive,
                })}></span>
            </Link>
        )
    }
}

export default withStyles(styles)(LinkTo);