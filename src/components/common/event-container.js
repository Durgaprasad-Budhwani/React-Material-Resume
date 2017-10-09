/**
 * Created by durgaprasad on 10/5/17.
 */
/* globals window */
import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {LEFT, RIGHT} from '../utils/Constants';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
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
    box: {
        width: '50%',
        color: '#757575',
        fontSize: 16,
        lineHeight: 1.5,
        marginBottom: 25,
        position: 'relative',
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
    },
    arrowLeft: {
        left: 35,
        top: 60,
        transform: 'rotate(45deg)',
    },
    dotRight: {
        right: 0,
        marginRight: -4
    },
    dotLeft: {
        left: 0,
        marginLeft: -4
    }
});

type Props = {
    classes: any,
    alignment: string
}

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
            
            <div className={classNames({
	  [classes.box]: true,
	  [classes.boxLeft]: alignment === LEFT,
	  [classes.boxRight]: alignment === RIGHT
	})}>
                <ScrollAnimation animateIn={alignment === LEFT ? 'fadeInLeft' :'fadeInRight'}
                                 animateOut={alignment === LEFT ? 'fadeInLeft' :'fadeInRight'}
                                 animateOnce
                                 duration={2}
                                 offset={0}
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
        
        )
    }
}

export default withStyles(styles)(EventContainer);