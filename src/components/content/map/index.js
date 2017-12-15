/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import ContactInfo from '../../common/contact-info';
import GoogleMapReact from 'google-map-react';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    container: {
        margin: 0,
        flexGrow: 1,
        height: '100%',
        // marginLeft: 10,
        [theme.breakpoints.down('md')]: {
            marginTop: 20,
            // marginLeft: 0
        },
    },
    contactContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        // padding: 10,
    },
    gridContainer: {
        height: '100%'
    },
    mapContainer: {
        margin: 0,
        padding: 0,
        flex: 1,
        width: '100%',
        height: '100%',
        minHeight: 300
    },
    
});

class MapContainer extends PureComponent<void, Props, void> {
    static defaultProps = {
        center: {lat: 18.5204, lng: 73.8567},
        zoom: 11
    };
    
    render () {
        const {classes} = this.props;
        return (
            <Paper className={classes.container}>
                <Grid container
                      direction="column"
                      spacing={0}
                      alignItems="stretch"
                      className={classes.gridContainer}
                >
                    <Grid className={classes.contactContainer}
                          item
                    >
                        <ContactInfo/>
                    </Grid>
                    <Grid className={classes.mapContainer}
                          item
                          xs={12}>
                        <GoogleMapReact
                            bootstrapURLKeys={{key: "AIzaSyAhuQ4MpuptjEH34y0DMqN3NX-mJgWQlIs"}}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                        </GoogleMapReact>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(MapContainer);

