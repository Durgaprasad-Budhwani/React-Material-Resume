/**
 * Created by Durgaprasad Budhwani on 10/5/2017.
 */
import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = createStyleSheet(theme => ({
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
}));

class ContactForm extends PureComponent<void, Props, void> {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    error: {
      nameError: '',
      emailError: '',
      subjectError: '',
      messageError: ''
    }
  };
  
  _handleSubmit (event) {
    const { name, email, subject, message, nameError, emailError, subjectError, messageError } = this.props;
    if (name && email && subject && message) {
    
    } else {
      event.preventDefault();
      if(!name){
	nameError : "Please enter name";
      }
      
    }
  }
  
  _handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value,
      
    });
  }
  
  render () {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
	<form
	  ref="form"
	  onSubmit={this._handleSubmit.bind(this)}>
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
	      value={this.state.name}
	      onChange={this._handleChange.bind(this)}
	      required
	    />
	    <TextField
	      id="email"
	      label="EMAIL"
	      margin="normal"
	      name="email"
	      value={this.state.email}
	      onChange={this._handleChange.bind(this)}
	      type="email"
	      required
	    />
	    <TextField
	      id="subject"
	      label="SUBJECT"
	      margin="normal"
	      name="subject"
	      value={this.state.subject}
	      onChange={this._handleChange.bind(this)}
	      required
	    />
	    <TextField
	      id="message"
	      label="MESSAGE"
	      margin="normal"
	      name="message"
	      multiline
	      rowsMax="4"
	      value={this.state.message}
	      onChange={this._handleChange.bind(this)}
	      required={true}
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

