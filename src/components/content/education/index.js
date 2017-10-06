/**
 * Created by durgaprasad on 10/5/17.
 */
import React, {PureComponent} from 'react';
import Grid from 'material-ui/Grid';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import PropTypes from 'prop-types';
import EventContainer from '../../common/event-container';
import Course from './course';
import SectionTitle from './../../common/section-title';
import {LEFT, RIGHT} from '../../utils/Constants';
import TimelineBar from './../../common/timeline-bar';

const styles = theme => ({
    relative: {
        position: 'relative',
    },
    clear: {
        position: 'relative',
        '*zoom': 1,
        
        '&:before': {
            content: " ",
            display: 'table',
        },
        
        '&:after': {
            content: " ",
            display: 'table',
            clear: 'both'
        }
    }
});

class Timeline extends PureComponent {
    render () {
        const classes = this.props.classes;
        return (
            <Grid container
                  style={{marginBottom: 30}}
                  align="stretch"
                  direction="column"
                  justify="center">
                <SectionTitle title='Education'/>
                <div style={{ position: 'relative' }}>
                    <div className={classes.clear}>
                        <TimelineBar height={40}
                                     top={80}/>
                        <EventContainer
                            alignment={RIGHT}
                        >
                            <Course name="Varian Medical System"
                                    university="Varian Medical System "
                                    year="2014 - Present"
                            />
                        </EventContainer>
                        <EventContainer
                            alignment={LEFT}
                        >
                            <Course name="Varian Medical System"
                                    title="Full Stack Developer"
                                    company="Varian Medical System"
                                    description="TBD"
                                    year="2014 - Present"
                            />
                        </EventContainer>
                    </div>
                </div>
            
            </Grid>
        )
    }
}

Timeline.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timeline);