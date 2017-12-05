/**
 * Created by durgaprasad on 9/6/17.
 */
// @flow
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import {LinearProgress} from 'material-ui/Progress';

const styles = theme => ({
    label: {
        fontSize: 14,
        fontFamily: 'Open Sans'
    },
    labelContainer: {marginBottom: 3, paddingLeft: 10, paddingRight: 10, marginTop: 10},
    button: {
        marginTop: 15,
        marginBottom: 15
    },
    container: {
        padding: 10
    }
    
});

type color = "primary" | "accent";

type Props = {
    classes: any,
    name: string,
    completed: number,
    size: number,
    color: color
}

class SkillBar extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        completed: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
        color: PropTypes.oneOf([ 'primary', 'accent' ]),
    };
    
    static defaultProps: Props = {
        size: 6,
        color: "primary"
    };
    
    render () {
        const {
            classes,
            name,
            completed,
            color
        } = this.props;
        return (
            <Grid item
                  xs={12}
            lg={6}>
                <Grid item
                      container
                      justify="space-between"
                      className={classes.labelContainer}>
                    <span className={classes.label}>{name}</span>
                    <span className={classes.label}>{`${completed}%`}</span>
                </Grid>
                <LinearProgress mode="determinate"
                                color={color}
                                value={completed}/>
            </Grid>
        )
    }
}

export default withStyles(styles)(SkillBar);