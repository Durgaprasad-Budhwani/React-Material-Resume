import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import cyan from 'material-ui/colors/cyan';
import Content from './components/content';
import Footer from './components/footer';
import pink from 'material-ui/colors/blue';
import './App.css';
import Header from './components/header';
import 'animate.css/animate.min.css';

import * as Scroll from 'react-scroll';

const {scrollSpy} = Scroll;

export default class App extends Component {
    state = {
        loading: true
    };
    
    componentDidMount () {
        setTimeout(() => {
            this.setState({loading: false});
            scrollSpy.update();
        }, 0);
    }
    
    render () {
        const {loading} = this.state;
        
        if (loading) { // if your component doesn't have to wait for async data, remove this block
            return null; // render null when app is not ready
        }
        
        const theme = createMuiTheme({
            palette: {
                primary: cyan,
                accent: pink,
                type: 'light',
            },
        });
        
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}



