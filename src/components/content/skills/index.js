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
import {GetSkills} from '../../../services';

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

export class Skills extends PureComponent {
    state = {
        skills: []
    };
    
    async componentDidMount () {
        let skills = await GetSkills();
        this.setState({skills});
    }
    
    _renderSkill (skill, index) {
        return (
            <SkillBar
                key={index}
                name={skill.name}
                completed={skill.completed}
            />
        );
    }
    
    render () {
        const classes = this.props.classes;
        const {skills} = this.state;
        return (
            <Grid
                id="skills"
                container
                align="stretch"
                direction="column"
                justify="center"
                spacing={0}
            >
                <SectionTitle title='Professional Skills'/>
                <Paper className={classes.root}>
                    <Grid item
                          container
                          direction="row"
                          justify="space-between"
                          xs={12}
                    >
                        {
                            skills && skills.map(this._renderSkill.bind(this))
                        }
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);