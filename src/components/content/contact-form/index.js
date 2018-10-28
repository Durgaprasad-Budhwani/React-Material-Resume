/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 */
import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        margin: 0,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        flexGrow: 1,
        // marginRight: 10,
        // [theme.breakpoints.down('md')]: {
        //     marginRight: 0
        // },
    },
    button: {
        color: 'white',
        marginTop: 20,
        marginBottom: 20
    },
});

/**
 * ##ContactForm example - Ref - About for more details
 *```
 *    <ContactForm />
 *```
 */

class ContactForm extends PureComponent<void, Props, void> {
    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.container}>
                <form method="post"
                      action="http://formspree.io/durgaprasad.budhwani@gmail.com">
                    <Grid container
                          direction="column"
                          spacing={0}
                          justify="center"
                    >
                        <h2 style={{marginBottom: 0}}>Feel free to contact me</h2>
                        <TextField
                            id="name"
                            label="NAME"
                            margin="normal"
                            name="name"
                            required
                        />
                        <TextField
                            id="email"
                            label="EMAIL"
                            margin="normal"
                            name="email"
                            type="email"
                            required
                        />
                        <TextField
                            id="subject"
                            label="SUBJECT"
                            margin="normal"
                            name="subject"
                            required
                        />
                        <TextField
                            id="message"
                            label="MESSAGE"
                            margin="normal"
                            name="message"
                            multiline
                            rowsMax="4"
                            required
                        />
                        <div>
                            <Button variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.button}>
                                SEND
                            </Button>
                        </div>
                    </Grid>
                </form>
            </Paper>

        )
    }
}

export default withStyles(styles)(ContactForm);

