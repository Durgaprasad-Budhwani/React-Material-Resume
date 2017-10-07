/**
 * Created by durgaprasad on 10/3/17.
 */
import React, {PureComponent} from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
const styles = theme => ({
    blogItemImage: {
        transition: 'opacity 1s, transform 1s',
        width: '100%',
        height: 'auto',
        opacity: 0.8,
        display: 'block',
        position: 'relative',
        backfaceVisibility: 'hidden',
    },
    blogItemBox: {
        position: 'relative',
        backgroundColor: '#fff',
        transition: 'box-shadow 0.15s linear 0s',
        backfaceVisibility: 'hidden',
        marginBottom: 50, // TODO
        [theme.breakpoints.down('xl')]: {
            marginBottom: 30,
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: 250
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: 110
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 30
        },
        '&:hover': {
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
            cursor: 'pointer',
        },
    },
    imageContainer: {
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#2c3340',
        '&:hover img': {
            opacity: 1,
            transform: 'scale3d(1.1, 1.1, 1)',
        }
    },
    blogItemContent: {
        padding: '25px 25px 35px 25px',
    },
    blogItemTimeContainer: {
        color: '#fff',
        lineHeight: 1,
        fontWeight: 700,
        textAlign: 'center',
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        display: 'block',
        backgroundColor: theme.palette.primary[ 500 ],
    },
    blogItemTimeDay: {
        fontSize: 20,
        marginBottom: 2
    },
    blogItemTimeMonth: {
        fontSize: 13,
    },
    blogItemTitle: {
        color: '#373b42',
        fontSize: 14,
        lineHeight: 1.3,
        fontWeight: 600,
        textTransform: 'uppercase',
        textAlign: 'center',
        wordWrap: 'normal'
    }
    
});

type Props = {
    height: number,
    top: number
}

class Blog extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        md: PropTypes.number.isRequired,
        sm: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired
    };
    
    render () {
        const {
            classes, md, sm, title, image, day, month
        } = this.props;
        return (
            
            <Grid justify="center"
                  direction="column"
                  container
                  md={md}
                  sm={sm}
            >
                <Paper
                    className={classes.blogItemBox}
                >
                    <div className={classes.imageContainer}>
                        <img src={image}
                             className={classes.blogItemImage}
                             alt={title}/>
                    </div>
                    <div className={classes.blogItemContent}>
                        <time className={classes.blogItemTimeContainer}>
                            <div class={classes.blogItemTimeDay}>{day}</div>
                            <div class={classes.blogItemTimeMonth}>{month}</div>
                        </time>
                        <h3 className={classes.blogItemTitle}>{title}</h3>
                    </div>
                </Paper>
            </Grid>
        
        )
    }
}

export default withStyles(styles)(Blog);