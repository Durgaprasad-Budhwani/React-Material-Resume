/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it, describe */
import React, {Component} from 'react';
import HeaderContainer, {Header}  from '../../../src/components/header';
import renderer from 'react-test-renderer';
import {createMount} from 'material-ui/test-utils';
import toJson from 'enzyme-to-json';
import '../../../setupTests';

describe('<Header />', ()=> {
    const classes = {
        header: {
        
        },
        headerBar: {
        
        },
        headerBarFixed: {
        
        },
        headerBackground: {
        
        },
        flex: {
        },
        horizontalNavigation: {
        
        },
        verticalNavigation: {
        
        },
        hamburger: {
        
        }
    };
    
    let mount;
    beforeEach(() => {
        mount = createMount()
    });
    
    afterEach(() => {
        mount.cleanUp();
    });
    
    it('renders header container', () => {
        const tree = renderer.create(<HeaderContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('renders header ', () => {
        const tree = renderer.create(<Header classes={classes}/>);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    
    it('renders header with drawer is hidden', () => {
        const wrapper = mount(<Header classes={classes}/>);
        const instance = wrapper.instance();
        instance._hideDrawer();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('renders header with handle scroll event', () => {
        const wrapper = mount(<Header classes={classes}/>);
        const instance = wrapper.instance();
       
        instance.handleScroll();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

