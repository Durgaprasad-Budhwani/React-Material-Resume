import React, {Component} from 'react';
import {JssProvider} from 'react-jss';
import {create} from 'jss';
import preset from 'jss-preset-default';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import {withStyles, MuiThemeProvider, createMuiTheme, createStyleSheet} from 'material-ui/styles';
import cyan from 'material-ui/colors/cyan';
import Content from './components/content';
import pink from 'material-ui/colors/blue';
import Grid from 'material-ui/Grid';
import './App.css';
import Header from './components/header';
import 'animate.css/animate.min.css';

const styles = theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        flex: 80,
        margin: 20,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

class App1 extends Component {
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
                </Grid>
            </MuiThemeProvider>
        );
    }
}

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;
jss.options.insertionPoint = 'insertion-point-jss';

function App (props) {
    return (
        <JssProvider jss={jss}>
            <App1 {...props}/>
        </JssProvider>
    );
}

export default withStyles(styles)(App);

