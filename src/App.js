import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import cyan from 'material-ui/colors/cyan';
import Content from './components/content';
import Footer from './components/footer';
import pink from 'material-ui/colors/blue';
import Grid from 'material-ui/Grid';
import './App.css';
import Header from './components/header';
import 'animate.css/animate.min.css';

import Scroll from 'react-scroll';
const {scrollSpy} = Scroll;


export default class App extends Component {
  componentDidMount () {
    scrollSpy.update();
  }
  
  render () {
    const theme = createMuiTheme({
      palette: {
	primary: cyan,
	accent: pink,
	type: 'light',
      },
    });
    
    return (
      <MuiThemeProvider theme={theme}>
	<Grid justify="center"
	      container>
	  <Header />
	  <Content />
	  <Footer />
	</Grid>
      </MuiThemeProvider>
    );
  }
}



