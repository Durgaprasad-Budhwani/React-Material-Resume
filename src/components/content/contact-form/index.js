/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
    container: {
        marginTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15
    },
    button: {
        color: 'white',
        marginTop: 20,
        marginBottom: 20
    },
});

class ContactForm extends PureComponent<void, Props, void> {
    render () {
        const {classes} = this.props;
        return (
            <Paper className={classes.container}>
                <form method="post" action="http://formspree.io/durgaprasad.budhwani@gmail.com">
                    <Grid container
                          direction="column"
                          spacing={0}
                          justify="center"
                    >
                        <h2 style={{ marginBottom: 0 }}>Feel free to contact me</h2>
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
                            <Button raised
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

