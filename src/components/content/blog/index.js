/**
 * Created by durgaprasad on 10/3/17.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Thumbnail from './thumbnail';
import PropTypes from 'prop-types';
import { GetBlogs } from '../../services';
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
  
  state = {
    blogs: []
  };
  
  async componentDidMount () {
    let blogs = await GetBlogs();
    console.log('blogs', blogs);
    this.setState({blogs});
  }
  
  _rednerThumbnail (blog) {
    return (
      <Thumbnail md={6}
		 sm={12}
		 image={blog.image}
		 title={blog.image}
      />
    );
  }
  
  render () {
    const { classes} = this.props;
    const {blogs} = this.state;
    return (
      <Grid
	direction="row"
	align="stretch"
	justify="space-between"
	xs={12}
	spacing={8}
	container
      >
	{
	  blogs && blogs.map(this._rednerThumbnail.bind(this))
	}
      </Grid>
    
    )
  }
}

export default withStyles(styles)(Blog);