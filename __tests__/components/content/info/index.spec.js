/**
 * Created by durgaprasad on 10/23/17.
 */
/* global expect,it */
import React from 'react';
import InfoContainer, {Info} from '../../../../src/components/content/info';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json';
import '../../../../setupTests';

describe('<Info />', () => {
    it('renders <InfoContainer />', () => {
        const tree = renderer.create(
            <InfoContainer/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('renders <Info /> handle openTab event', () => {
        const classes = {
            container: {},
            info: {},
            button: {},
        };
        const wrapper = mount(
            <Info classes={classes}/>
        );
        const instance = wrapper.instance();
        instance._openTab("google");
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})