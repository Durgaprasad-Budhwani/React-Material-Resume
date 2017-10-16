/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import ContactInfo from '../../common/contact-info';

const styles = theme => ({
  container: {
    margin: 20,
    paddingTop: 45,
    flexGrow: 1
  },
  contactContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  mapContainer: {
    backgroundColor: 'red',
    flexGrow: 1
  
  }
 
});

class MapContainer extends PureComponent<void, Props, void> {
  render () {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
	<Grid container
	      direction="column"
	      spacing={0}
	>
	  <div className={classes.contactContainer} xs={4}>
	    <ContactInfo/>
	  </div>
	  <div className={classes.mapContainer} xs={8}>
	  
	  </div>
	</Grid>
      </Paper>
    
    )
  }
}

export default withStyles(styles)(MapContainer);

