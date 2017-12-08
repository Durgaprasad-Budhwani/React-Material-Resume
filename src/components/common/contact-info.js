/**
 * Created by durgaprasad on 10/16/17.
 */

import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        margin: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        flexGrow: 1
    },
    profileListItem: {
        color: '#333333',
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'uppercase',
        textAlign: 'left',
        margin: 0,
        padding: 0
    },
    profileListItemValue: {
        color: '#9da0a7',
        fontSize: 15,
        textAlign: 'left',
        marginTop: -3,
        padding: 0
    },
    profileValueAItemValue: {
        color: 'inherit',
    },
});

class ContactInfo extends PureComponent<void, Props, void> {
    render () {
        const {classes} = this.props;
        return (
            <Grid container
                  item
                  spacing={24}
                  direction="column">
                <Grid container
                      item
                      direction="row"
                      align="stretch"
                      justify="stretch"
                      spacing={24}>
                    <Grid
                        className={classes.profileListItem}
                        item
                        xs={12}
                        md={3}
                    >
                        Address:
                    </Grid>
                    <Grid
                        className={classes.profileListItemValue}
                        item
                        xs={12}
                        md={9}
                    >
                        Pune, India
                    </Grid>
                </Grid>
                <Grid container
                      item
                      direction="row"
                      align="center"
                      justify="center"
                      spacing={24}>
                    <Grid
                        className={classes.profileListItem}
                        item
                        xs={12}
                        md={3}
                    >
                        Email:
                    </Grid>
                    <Grid
                        className={classes.profileListItemValue}
                        item
                        xs={12}
                        md={9}
                    >
                        <a className={classes.profileValueAItemValue}
                           href="mailto:durgaprasad.budhwani@gmail.com">durgaprasad.budhwani@gmail.com</a>
                    </Grid>
                </Grid>
                <Grid container
                      item
                      align="center"
                      justify="center"
                      direction="row"
                      spacing={24}>
                    <Grid
                        className={classes.profileListItem}
                        item
                        xs={12}
                        md={3}
                    >
                        Phone:
                    </Grid>
                    <Grid
                        className={classes.profileListItemValue}
                        item
                        xs={12}
                        md={9}
                    >
                        <a className={classes.profileValueAItemValue}
                           href="tel:+91-9545251359">+91-9545251359</a>
                    </Grid>
                </Grid>
            </Grid>
        
        )
    }
}

export default withStyles(styles)(ContactInfo);

