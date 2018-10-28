import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/blue';
import 'animate.css/animate.min.css';
import Content from './components/content';
import Footer from './components/footer';
import './App.css';
import Header from './components/header';

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
            typography: {
                useNextVariants: true,
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



