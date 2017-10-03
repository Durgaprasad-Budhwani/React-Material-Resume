/**
 * Created by durgaprasad on 10/3/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Thumbnail from './thumbnail';
import PropTypes from 'prop-types';
const styles = createStyleSheet(theme => ({
    blogItemImage: {
        transition: 'opacity 1s, transform 1s',
        
        '&:hover': {
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
        }
    },
    root: {
        flexGrow: 1
    }
}));

type Props = {
    height: number,
    top: number
}

class Blog extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        top: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    };
    
    render () {
        const {classes, height, top} = this.props;
        return (
            <Grid
                  direction="row"
                  align="stretch"
                  justify="space-between"
                  xs={12}
                  spacing={8}
                  container
            >
                <Thumbnail md={6} sm={12} />
                <Thumbnail md={6} sm={12} />
                <Thumbnail md={6} sm={12} />
                <Thumbnail md={6} sm={12} />
                <Thumbnail md={6} sm={12} />
                {/*<Thumbnail md={6} sm={12} />*/}
                {/*<Thumbnail md={6} sm={12} />*/}
            </Grid>
        
        )
    }
}

export default withStyles(styles)(Blog);