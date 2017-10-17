/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import ContactInfo from '../../common/contact-info';
import GoogleMapReact from 'google-map-react';

const styles = theme => ({
  container: {
    margin: 20,
    padding: 0,
    paddingTop: 25,
    backgroundColor: '#FFF',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)'
  },
  contactContainer: {
    margin: 10,

  },
  mapContainer: {
    margin: 0,
    padding: 0
    
  },
  
});

class MapContainer extends PureComponent<void, Props, void> {
  static defaultProps = {
    center: { lat: 18.5204, lng: 73.8567 },
    zoom: 11
  };
  
  render () {
    const { classes } = this.props;
    return (
      <Grid container
	    direction="column"
	    className={classes.container}
      >
	  <Grid className={classes.contactContainer}
		item>
	    <ContactInfo/>
	  </Grid>
	  <Grid className={classes.mapContainer}
		item
		xs>
	    <GoogleMapReact
	    defaultCenter={this.props.center}
	    defaultZoom={this.props.zoom}
	    >
	    </GoogleMapReact>
	  </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(MapContainer);

