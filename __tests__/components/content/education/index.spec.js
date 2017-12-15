/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it,describe,afterEach */
import React from 'react';
import EducationContainer, {Educations} from '../../../../src/components/content/education';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import {mount, shallow} from 'enzyme'
import toJson from 'enzyme-to-json';
import '../../../../setupTests';

describe('<Educations />', () => {
    const classes = {
        container: {},
        relative: {},
        clear: {},
        barClass: {},
    };
    const education = {
        year: "year",
        college: 'college',
        description: 'description',
    };
    afterEach(() => {
        fetchMock.restore();
    });
    it('renders <EducationContainer />', () => {
        let educations = [ education ];
        fetchMock.mock('education.json', educations);
        const tree = renderer.create(
            <EducationContainer
            />
        );
        let instance = tree.getInstance();
        expect(tree.toJSON()).toMatchSnapshot();
        expect.arrayContaining(instance.state.educations);
    });
    
    it('renders <Educations />', () => {
        let educations = [ education ];
        fetchMock.mock('education.json', educations);
        const wrapper = mount(
            <Educations
                classes={classes}
            />
        );
        let instance = wrapper.instance();
        let educationWrapper = shallow(instance._renderEducation(education, 1));
        expect(toJson(educationWrapper)).toMatchSnapshot();
    });
});
