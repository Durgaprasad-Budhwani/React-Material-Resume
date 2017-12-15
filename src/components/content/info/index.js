/**
 * Created by Durgaprasad Budhwani on 10/23/2017.
 */

import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        textAlign: 'center',
    },
    info: {
        color: '#878787',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.8,
        textAlign: 'center',
        marginBottom: 30
    },
    button: {
        margin: theme.spacing.unit,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        color: '#525252',
        textTransform: 'uppercase'
    },
});

const content = "Hello! I am Durgaprasad Budhwani. Full Stack Developer specializing in web, desktop, mobile design and development, I maintain a healthy balance between functionality and visual impact in all my work. I believe every piece of design can be a work of art. ";

export class Info extends PureComponent {
    _openTab(url) {
        window.open(url, '_blank');
    }
    
    render () {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <Button raised
                        className={classes.button}
                        onClick={this._openTab.bind(this)}
                        color="contrast">
                    Download Resume
                </Button>
                <p className={classes.info}>
                    {content}
                </p>
            </div>
        )
    }
}

Info.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);




