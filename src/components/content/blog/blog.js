/**
 * Created by durgaprasad on 10/3/17.
 */
import React, {PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

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
        margin: 10,
        marginBottom: 50, // TODO
        [theme.breakpoints.down('xl')]: {
            marginBottom: 30,
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: 250
        },
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            marginBottom: 30
        },
        [theme.breakpoints.down('xs')]: {
            margin: 0,
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

/**
 * ##Blog example - Ref - About for more details
 *```
 *   <Blog md={6}
 *       key={index}
 *       xs={12}
 *       image={blog.image}
 *       title={blog.title}
 *       day={blog.day}
 *       month={blog.month}
 *       url={blog.url}
 *       />
 *```
 */
export class Blog extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        md: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    };
    
    _openTab (url) {
        window.open(url, '_blank');
    }
    
    render () {
        const {
            classes, md, title, image, day, month,url
        } = this.props;
        return (
            
            <Grid justify="center"
                  direction="column"
                  item
                  container
                  spacing={0}
                  md={md}
                  style={{margin: 0, padding: 0}}
            >
                <Button
                    onClick={this._openTab.bind(this, url)}
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
                                <div className={classes.blogItemTimeDay}>{day}</div>
                                <div className={classes.blogItemTimeMonth}>{month}</div>
                            </time>
                            <h3 className={classes.blogItemTitle}>{title}</h3>
                        </div>
                    </Paper>
                </Button>
            </Grid>
        
        )
    }
}

export default withStyles(styles)(Blog);