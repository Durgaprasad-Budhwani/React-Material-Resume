/**
 * Created by durgaprasad on 9/5/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Ionicon from 'react-ionicons';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        marginTop: 15,
        marginBottom: 15
    },
    container: {
        padding: 10
    }
});

class SocialIcons extends PureComponent {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        color: PropTypes.string.isRequired
    };
    
    static defaultProps: Props = {
        color: 'white'
    };
    
    _openTab (url) {
        window.open(url,'_blank');
    }
    
    render () {
        const {
            classes,
            color
        } = this.props;
        return (
            <Grid item
                  container
                  align="center"
                  justify="center"
                  spacing={0}
                  className={classes.container}>
                <IconButton className={classes.button}
                            onClick={() => this._openTab("https://www.facebook.com/durgaprasad.budhwani")}
                            aria-label="Add an alarm">
                    <Ionicon icon="ion-social-facebook"
                             fontSize="24px"
                             color={color}>
                    </Ionicon>
                </IconButton>
                <IconButton className={classes.button}
                            onClick={() => this._openTab("https://twitter.com/DurgaprasadDP")}
                            aria-label="Add an alarm">
                    <Ionicon icon="ion-social-twitter"
                             fontSize="24px"
                             color={color}/>
                </IconButton>
                <IconButton className={classes.button}
                            onClick={() => this._openTab("https://www.linkedin.com/in/durgaprasad-budhwani")}
                            aria-label="Add an alarm">
                    <Ionicon icon="ion-social-linkedin"
                             fontSize="30px"
                             color={color}/>
                </IconButton>
                <IconButton className={classes.button}
                            onClick={() => this._openTab("https://plus.google.com/+DurgaprasadBudhwani")}
                            aria-label="Add an alarm">
                    <Ionicon icon="ion-social-googleplus"
                             fontSize="24px"
                             color={color}/>
                </IconButton>
                <IconButton className={classes.button}
                            onClick={() => this._openTab("https://github.com/Durgaprasad-Budhwani")}
                            aria-label="Add an alarm">
                    <Ionicon icon="ion-social-github"
                             fontSize="24px"
                             color={color}/>
                </IconButton>
            </Grid>
        )
    }
}

export default withStyles(styles)(SocialIcons);