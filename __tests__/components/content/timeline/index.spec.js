/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it,describe,afterEach */
import React from 'react';
import ExperienceContainer, {Experiences} from '../../../../src/components/content/timeline';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import {mount, shallow} from 'enzyme'
import toJson from 'enzyme-to-json';
import '../../../../setupTests';

describe('<Experiences />', () => {
    const classes = {
        container: {},
        barClass: {},
        relative: {},
        clear: {}
    };
    const experience = {
        year: "year",
        company: 'company',
        title: 'title',
        description: 'description',
    };
    afterEach(() => {
        fetchMock.restore();
    });
    
    it('renders <ExperienceContainer />', () => {
        let experiences = [ experience ];
        fetchMock.mock('experience.json', experiences);
        const tree = renderer.create(
            <ExperienceContainer
                classes={classes}
            />
        );
        let instance = tree.getInstance();
        expect(tree.toJSON()).toMatchSnapshot();
        expect.arrayContaining(instance.state.experiences);
    });
    
    it('renders <Experiences />', () => {
        let experiences = [ experience ];
        fetchMock.mock('experience.json', experiences);
        const wrapper = mount(
            <Experiences
                classes={classes}
            />
        );
        let instance = wrapper.instance();
        let experienceWrapper = shallow(instance._renderExperience(experience, 1));
        expect(toJson(experienceWrapper)).toMatchSnapshot();
    });
});

