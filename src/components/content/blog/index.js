/**
 * Created by durgaprasad on 10/3/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import Blog from './blog';
import PropTypes from 'prop-types';
import {GetBlogs} from '../../services';
import SectionTitle from './../../common/section-title';

const styles = theme => ({
    blogItemImage: {
        transition: 'opacity 1s, transform 1s',
        
        '&:hover': {
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
        }
    },
    root: {
        flexGrow: 1
    }
});

type Props = {
    classes: any,
}

class Blogs extends PureComponent<void, Props, void> {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
    };
    
    state = {
        blogs: []
    };
    
    async componentDidMount () {
        let blogs = await GetBlogs();
        this.setState({blogs});
    }
    
    _renderBlog (blog, index) {
        return (
            <Blog md={6}
                  key={index}
                  sm={12}
                  image={blog.image}
                  title={blog.title}
                  day={blog.day}
                  month={blog.month}
            />
        );
    }
    
    render () {
        const {blogs} = this.state;
        return (
            <Grid
                align="stretch"
                direction="column"
                justify="center"
            >
                <SectionTitle title='Articles'/>
                <Grid
                    direction="row"
                    align="stretch"
                    justify="space-between"
                    xs={12}
                    spacing={8}
                    container
                >
                    {
                        blogs && blogs.map(this._renderBlog.bind(this))
                    }
                </Grid>
            </Grid>
        
        
        )
    }
}

export default withStyles(styles)(Blogs);