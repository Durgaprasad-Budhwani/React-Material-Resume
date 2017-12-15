/**
 * Created by durgaprasad on 10/5/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import EventContainer from '../../common/event-container';
import Course from './course';
import SectionTitle from './../../common/section-title';
import {LEFT, RIGHT} from '../../../utils/Constants';
import TimelineBar from './../../common/timeline-bar';
import {GetEducation} from '../../../services';

const styles = theme => ({
    container: {
        alignItems: 'stretch',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyItems: 'stretch',
        },
    },
    relative: {
        position: 'relative',
    },
    clear: {
        position: 'relative',
        '*zoom': 1,
        
        "&:before": {
            content: '""',
            display: 'table',
        },
        
        "&:after": {
            content: '""',
            display: 'table',
            clear: 'both'
        }
    },
    barClass: {
        height: 220,
        top: 80,
        [theme.breakpoints.down('md')]: {
            height: 500,
            top: 20,
            zIndex: -1
        },
    },
});

type Education = {
    year: string,
    college: string,
    description: string,
}

type State = {
    educations: Array<Education>
}

export class Educations extends PureComponent<void, void, State> {
    state: State = {
        educations: []
    };
    
    async componentDidMount () {
        let educations = await GetEducation();
        this.setState({educations});
    }
    
    _renderEducation (education: Education, index) {
        return (
            <EventContainer
                key={index}
                alignment={index % 2 === 0 ? LEFT :RIGHT}
            >
                <Course name={education.description}
                        university={education.college}
                        year={education.year}
                />
            </EventContainer>
        );
    }
    
    render () {
        const {classes} = this.props;
        const {educations} = this.state;
        return (
            <Grid container
                  className={classes.container}
                  spacing={0}
                  direction="column">
                <SectionTitle title='Education'/>
                <div style={{position: 'relative'}}>
                    <div className={classes.clear}>
                        <TimelineBar barClass={classes.barClass}/>
                        {
                            educations && educations.map(this._renderEducation.bind(this))
                        }
                    </div>
                </div>
            
            </Grid>
        )
    }
}

Educations.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Educations);