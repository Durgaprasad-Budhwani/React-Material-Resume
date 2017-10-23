/**
 * Created by Durgaprasad Budhwani on 10/23/2017.
 */
/* global expect,it */
import React from 'react';
import Footer from '../../../src/components/footer';
import renderer from 'react-test-renderer';

it('renders fooer', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
});