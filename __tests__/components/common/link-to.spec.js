/**
 * Created by Durgaprasad Budhwani on 12/13/2017.
 */
/* global expect,it, describe */
import React from 'react';
import LinkToContainer, {LinkTo} from '../../../src/components/common/link-to';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../../../setupTests';

describe('<LinkTo />', () => {
    const classes = {
        scrollChor: {},
        navigationItem: {},
        spanClass: {},
        activeSpanClass: {},
        activeTitle: {}
    };
    
    it('<LinkToContainer />', () => {
        const tree = renderer.create(<LinkToContainer
            to="to"
            title="title"
            enableNavigationItemClass={true}
            offset={100}
            classes={{}}
        />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('<LinkTo> handlerSetInactive', () => {
        const wrapper = mount(<LinkTo
            to="to"
            title="title"
            enableNavigationItemClass={true}
            offset={100}
            classes={classes}
        />);
        const instance = wrapper.instance();
        instance._handleSetInactive();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    
    it('<LinkTo> handlerSetInactive', () => {
        const wrapper = mount(<LinkTo
            to="to"
            title="title"
            enableNavigationItemClass={true}
            offset={100}
            classes={classes}
        />);
        const instance = wrapper.instance();
        instance._handleSetActive();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});


