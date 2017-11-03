/**
 * Created by durgaprasad on 9/6/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import SkillBar from './skill-bar';
import SectionTitle from './../../common/section-title';

// #56c8d2

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        height: '100%',
    },
    button: {
        marginTop: 15,
        marginBottom: 15
    },
    container: {
        padding: 10
    }
});

class Skilss extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid
                  id="skills"
                 >
                <SectionTitle title='Professional Skills'/>
                <Paper className={classes.root}>
                    <Grid item
                          container
                          direction="row"
                          justify="space-between"
                          xs={12}
                    >
                        <SkillBar name="JavaScript"
                                  completed={90}/>
                        <SkillBar name="CSS"
                                  completed={70}/>
                        <SkillBar name="JavaScript"
                                  completed={90}/>
                        <SkillBar name="CSS"
                                  completed={70}/>
                        <SkillBar name="JavaScript"
                                  completed={90}/>
                        <SkillBar name="CSS"
                                  completed={70}/>
                        <SkillBar name="JavaScript"
                                  completed={90}/>
                        <SkillBar name="CSS"
                                  completed={70}/>
                        <SkillBar name="JavaScript"
                                  completed={90}/>
                        <SkillBar name="CSS"
                                  completed={70}/>
                        <SkillBar name="JavaScript"
                                  completed={90}/>
                        <SkillBar name="CSS"
                                  completed={70}/>
                        <SkillBar name="JavaScript"
                                  completed={90}/>
                        <SkillBar name="CSS"
                                  completed={70}/>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

Skilss.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skilss);