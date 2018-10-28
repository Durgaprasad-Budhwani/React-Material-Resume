/**
 * Created by durgaprasad on 9/15/17.
 */
import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EventContainer from '../../common/event-container';
import Event from './event';
import SectionTitle from './../../common/section-title';
import {LEFT, RIGHT} from '../../../utils/Constants';
import TimelineBar from '../../common/timeline-bar';
import {GetExperience} from '../../../services/index';

const styles = theme => ({
    container: {
        alignItems: 'stretch',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            alignItems: 'stretch',
            justifyItems: 'space-evenly',
        },
    },
    barClass: {
        height: 360,
        top: 80,
        [theme.breakpoints.down('md')]: {
            height: 1040,
            top: 20,
            zIndex: -1
        },
    },
    relative: {
        position: 'relative',
    },
    clear: {
        position: 'relative',
        '*zoom': 1,
        
        '&:before': {
            content: '""',
            display: 'table',
        },
        
        '&:after': {
            content: '""',
            display: 'table',
            clear: 'both'
        }
    }
});

type Experience = {
    year: string,
    company: string,
    title: string,
    description: string,
}

type State = {
    experiences: Array<Experience>
}

export class Experiences extends PureComponent<void, void, State> {
    state: State = {
        experiences: []
    };
    
    async componentDidMount () {
        let experiences = await GetExperience();
        this.setState({experiences});
    }
    
    _renderExperience (experience: Experience, index) {
        return (
            <EventContainer
                key={index}
                alignment={index % 2 === 0 ? LEFT :RIGHT}
            >
                <Event title={experience.title}
                       company={experience.company}
                       description={experience.description}
                       year={experience.year}
                />
            </EventContainer>
        );
    }
    
    render () {
        const {classes} = this.props;
        const {experiences} = this.state;
        console.log(experiences);
        return (
            <Grid
                container
                item
                xs={12}
                spacing={0}
                className={classes.container}
                direction="column"
                justify="center">
                <SectionTitle title='Work Experience'/>
                <div style={{position: 'relative'}}>
                    <div className={classes.clear}>
                        <TimelineBar barClass={classes.barClass}/>
                        {
                            experiences && experiences.map(this._renderExperience.bind(this))
                        }
                    </div>
                </div>
            
            </Grid>
        )
    }
}

Experiences.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experiences);