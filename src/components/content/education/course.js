/**
 * Created by durgaprasad on 10/5/17.
 */
import React, {PureComponent} from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import Bubble from '../../common/bubble';

const styles = theme => ({
    date: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'left',
        marginBottom: 0,
        color: theme.palette.primary[ 500 ],
        marginTop: 10
    },
    header3: {
        color: '#414141',
        fontSize: 22,
        fontWeight: 400,
        lineHeight: 1.1,
        textAlign: 'left',
        marginBottom: 0,
        marginToo: 0
    },
    header4: {
        color: '#878787',
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 1.1,
        textTransform: 'uppercase',
        textAlign: 'left',
        marginBottom: 30,
    },
});

type Props = {
    classes: any,
    title: string
}

class Course extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        year: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        university: PropTypes.string.isRequired,
    };
    
    render () {
        const {
            classes,
            year,
            name,
            university,
        } = this.props;
        return (
            <Grid container
                  style={{paddingLeft: 20}}
                  direction="column"
                  align="stretch">
                <div><Bubble content={year}/></div>
                <h3 className={classes.header3}>{name}</h3>
                <p className={classes.header4}>{university}</p>
            </Grid>
        )
    }
}

export default withStyles(styles)(Course);