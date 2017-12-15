/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it,describe,afterEach */
import React from 'react';
import SkillsContainer, {Skills} from '../../../../src/components/content/skills';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import {mount, shallow} from 'enzyme'
import toJson from 'enzyme-to-json';
import '../../../../setupTests';

describe('<Skills />', () => {
    const classes = {
        root: {},
        button: {},
        container: {}
    };
    
    const skill = {name: 'abc', completed: "title"};
    
    afterEach(() => {
        fetchMock.restore();
    });
    
    it('renders <SkillsContainer />', () => {
        let skills = [ skill ];
        fetchMock.mock('skills.json', skills);
        
        const tree = renderer.create(
            <SkillsContainer
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('renders <Skills />', () => {
        let skills = [ skill ];
        fetchMock.mock('skills.json', skills);
        const wrapper = mount(
            <Skills
                classes={classes}
            />
        );
        let instance = wrapper.instance();
        let skillWrapper = shallow(instance._renderSkill(skill, 1));
        expect(toJson(skillWrapper)).toMatchSnapshot();
    });
});
