/**
 * Created by durgaprasad on 9/5/17.
 */
import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import {SocialIcon} from 'react-social-icons';
import Ionicon from 'react-ionicons'

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

export class SocialIcons extends PureComponent {
    static propTypes: Props = {
        classes: PropTypes.object.isRequired,
        color: PropTypes.string.isRequired
    };

    static defaultProps: Props = {
        color: 'white'
    };

    _openTab(url) {
        window.open(url, '_blank');
    }

    render() {
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
                <SocialIcon
                    className={classes.button}
                    url="https://www.facebook.com/durgaprasad.budhwani" fontSize="24px"
                    color={color}/>
                <SocialIcon
                    className={classes.button}
                    url="https://twitter.com/DurgaprasadDP" fontSize="24px"
                    color={color}/>
                <SocialIcon
                    className={classes.button}
                    url="https://www.linkedin.com/in/durgaprasad-budhwani" fontSize="24px"
                    color={color}/>
                <SocialIcon
                    className={classes.button}
                    url="https://plus.google.com/+DurgaprasadBudhwani" fontSize="24px"
                    color={color}/>
                <SocialIcon
                    className={classes.button}
                    url="https://github.com/Durgaprasad-Budhwani" fontSize="24px"
                    color={color}/>
            </Grid>
        )
    }
}

export default withStyles(styles)(SocialIcons);