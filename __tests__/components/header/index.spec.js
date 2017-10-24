/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it */
import React from 'react';
import Header from '../../../src/components/header';
import renderer from 'react-test-renderer';

Element.prototype.getBoundingClientRect = function () {  };

it('renders header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});
