/**
 * Created by durgaprasad on 9/15/17.
 */
// @flow
import React, {PureComponent} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = theme => ({
    date: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        marginBottom: 0,
        color: theme.palette.primary[ 500 ],
        marginTop: 10
    },
    header3: {
        color: '#414141',
        fontSize: 22,
        fontWeight: 400,
        lineHeight: 1.1,
        textAlign: 'center',
        marginBottom: 0,
        marginToo: 0
    },
    header4: {
        color: '#878787',
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 1.1,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 30,
    },
    description: {
        wordWrap: 'break-word',
        width: '100%'
    }
});

type Props = {
    classes: any,
    year: string,
    company: string,
    title: string,
    description: string,
}

/**
 * ##Event example - Ref - Skills for more details
 *```
 *   <Event title={experience.title}
 *          company={experience.company}
 *          description={experience.description}
 *          year={experience.year}
 *   />
 *```
 */
class Event extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        year: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    };
    
    render () {
        const {
            classes,
            year,
            title,
            company,
            description
        } = this.props;
        return (
            <Grid container
                  direction="column"
                  spacing={0}
                  align="center">
                <div className={classes.date}>{year}</div>
                <h3 className={classes.header3}>{company}</h3>
                <h4 className={classes.header4}>{title}</h4>
                <p className={classes.description}>{description}</p>
            </Grid>
        )
    }
}


export default withStyles(styles)(Event);