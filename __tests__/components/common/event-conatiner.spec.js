/**
 * Created by Durgaprasad Budhwani on 10/6/2017.
 */
/* global expect,it */
import React from 'react';
import EventContainer from '../../../src/components/common/event-container';
import renderer from 'react-test-renderer';

it('renders event container for left', () => {
    const tree = renderer.create(<EventContainer alignment="LEFT" />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders event container for right', () => {
    const tree = renderer.create(<EventContainer alignment="RIGHT" />).toJSON();
    expect(tree).toMatchSnapshot();
});
