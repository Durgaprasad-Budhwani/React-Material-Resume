/**
 * Created by Durgaprasad Budhwani on 12/15/2017.
 */
/* global expect,it,describe */
import React from 'react';
import SocialIconsContainer, {SocialIcons} from '../../../src/components/common/social-icons';
import renderer from 'react-test-renderer';
import '../../../setupTests';
import {mount} from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('<SocialIcons />', ()=> {
    const classes = {
        button: {
        },
        container: {
        }
    }
    it('renders <SocialIconsContainer />', () => {
        const tree = renderer.create(<SocialIconsContainer color="white" classes={classes} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('renders <SocialIcons />', () => {
        const tree = renderer.create(<SocialIcons color="white" classes={classes}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('<SocialIcons /> handle _openTab', () => {
        const wrapper = mount(<SocialIcons color="white" classes={classes} />);
        const instance = wrapper.instance();
        instance._openTab('http://google.com');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
