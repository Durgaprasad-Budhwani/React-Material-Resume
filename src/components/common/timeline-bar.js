/**
 * Created by durgaprasad on 10/3/17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
    bar: {
        content: '""',
        width: 4,
        opacity: 0.2,
        marginLeft: -2,
        position: 'absolute',
        left: '50%',
        backgroundColor: theme.palette.primary[ 500 ],
    },
});

type Props = {
    barClass: string
}

class TimelineBar extends PureComponent<void, Props, void>{
    static propTypes = {
        classes: PropTypes.object.isRequired,
        barClass: PropTypes.string.isRequired,
    };
    
    render () {
        const {classes, barClass} = this.props;
        return (
            <div className={classNames(
                {
                    [classes.bar]: true,
                    [barClass]: true,
                }
            )}/>
        )
    }
}

export default withStyles(styles)(TimelineBar);