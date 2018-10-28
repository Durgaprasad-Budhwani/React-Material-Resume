/**
 * Created by durgaprasad on 10/5/17.
 */
/* globals window */
import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {LEFT, RIGHT} from '../../utils/Constants';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
    smallScreenBox: {
        display: 'none',
        borderColor: theme.palette.primary[ 500 ],
        padding: 20,
        borderTopWidth: 5,
        borderTopStyle: 'solid',
        marginBottom: 35,
        zIndex: 10,
        [theme.breakpoints.down('md')]: {
            display: 'block'
        },
    },
    paper: {
        borderColor: theme.palette.primary[ 500 ],
        padding: 20,
        borderTopWidth: 5,
        borderTopStyle: 'solid'
    },
    paperLeft: {
        marginRight: 35
    },
    paperRight: {
        marginLeft: 35
    },
    date: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        marginBottom: 0,
        color: theme.palette.primary[ 500 ],
        marginTop: 10
    },
    bigScreenBox: {
        width: '50%',
        maxWidth: '50%',
        minWidth: '50%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        color: '#757575',
        fontSize: 16,
        lineHeight: 1.5,
        marginBottom: 25,
        position: 'relative',
        zIndex: 10
    },
    boxLeft: {
        float: 'left',
        clear: 'left'
    },
    boxRight: {
        float: 'right',
        clear: 'right',
        top: 30,
    },
    dot: {
        top: 80,
        width: 8,
        height: 8,
        display: 'block',
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary[ 500 ],
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        
    },
    arrow: {
        top: 60,
        display: 'block',
        content: "''",
        position: 'absolute',
        width: 0,
        height: 0,
        boxSizing: 'border-box',
        border: '1em solid black',
        borderColor: 'transparent transparent white white',
        transformOrigin: '0 0',
        boxShadow: '-1px 1px 1px 0 rgba(0, 0, 0, 0.2)'
    },
    arrowRight: {
        right: 4,
        top: 105,
        transform: 'rotate(-135deg)',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    arrowLeft: {
        left: 35,
        top: 60,
        transform: 'rotate(45deg)',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    dotRight: {
        right: 0,
        marginRight: -4,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    dotLeft: {
        left: 0,
        marginLeft: -4,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    }
});

type Props = {
    classes: any,
    alignment: string
}


/**
 * ##EventContainerInfo example - Ref - Education Component for more details
 *```
 *   <EventContainer
 *        key={index}
 *       alignment={index % 2 === 0 ? LEFT :RIGHT}
 *    >
 *        <Course name={education.description}
 *            university={education.college}
 *            year={education.year}
 *        />
 *    </EventContainer>
 *```
 */
class EventContainer extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        alignment: PropTypes.oneOf([ LEFT, RIGHT ]).isRequired
    };
    
    render () {
        const {
            classes,
            alignment,
        } = this.props;
        return (
            <div>
                <div className={classNames({
                    [classes.bigScreenBox]: true,
                    [classes.boxLeft]: alignment === LEFT,
                    [classes.boxRight]: alignment === RIGHT
                })}>
                    <ScrollAnimation animateIn={alignment === LEFT ? 'fadeInLeft' :'fadeInRight'}
                                     animateOut={alignment === LEFT ? 'fadeInLeft' :'fadeInRight'}
                                     animateOnce
                                     initiallyVyarnisible={true}
                                     duration={1}
                                     offset={-100}
                    
                    >
                        <Paper className={classNames(
                            {
                                [classes.paper]: true,
                                [classes.paperLeft]: alignment === LEFT,
                                [classes.paperRight]: alignment === RIGHT
                            }
                        )}>
                              <span className={classNames({
                                  [classes.arrow]: true,
                                  [classes.arrowRight]: alignment === LEFT,
                                  [classes.arrowLeft]: alignment === RIGHT
                              })}/>
                            {this.props.children}
                        </Paper>
                    </ScrollAnimation>
                    <span className={classNames({
                        [classes.dot]: true,
                        [classes.dotRight]: alignment === LEFT,
                        [classes.dotLeft]: alignment === RIGHT,
                    })}/>
                </div>
                <Paper className={classes.smallScreenBox}>
                    {this.props.children}
                </Paper>
            </div>
        
        )
    }
}

export default withStyles(styles)(EventContainer);