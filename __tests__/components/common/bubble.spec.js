/**
 * Created by Durgaprasad Budhwani on 10/6/2017.
 */
/* global expect,it */
import React from 'react';
import Bubble from '../../../src/components/common/bubble';
import renderer from 'react-test-renderer';

it('renders bubble without crashing', () => {
    const tree = renderer.create(<Bubble content="Hello" />).toJSON();
    expect(tree).toMatchSnapshot();
});
