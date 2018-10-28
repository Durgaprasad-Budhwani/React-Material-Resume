/**
 * Created by durgaprasad on 10/5/17.
 * @flow
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.1,
        display: 'inline-block',
        padding: '7px 12px',
        textTransform: 'uppercase',
        position: 'relative',
        backgroundColor: theme.palette.primary[ 500 ],
        borderLeftColor: theme.palette.primary[ 500 ],
        
        '&:before': {
            content: '""',
            width: 0,
            height: 0,
            top: '100%',
            left: 5,
            display: 'block',
            position: 'absolute',
            borderStyle: 'solid',
            borderWidth: '0 0 8px 8px',
            borderColor: 'transparent',
            borderLeftColor: theme.palette.primary[ 500 ],
        }
        
    },
});

type Props = {
    content: string,
    classes: any
}

/**
 * ##Bubble example - Ref - Education Component for more details
 *```
 *   <Bubble content={year}/>
 *```
 */
class Bubble extends PureComponent<void, Props, void> {
    static propTypes = {
        content: PropTypes.string.isRequired,
        classes: PropTypes.object.isRequired,
    };
    
    render () {
        const {classes, content} = this.props;
        return (
            <span className={classes.container}>{content}</span>
        )
    }
}

export default withStyles(styles)(Bubble);
