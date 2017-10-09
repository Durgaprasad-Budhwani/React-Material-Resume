/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it */
import React from 'react';
import TimelineBar from '../../../src/components/common/timeline-bar';
import renderer from 'react-test-renderer';

it('renders bubble', () => {
    const tree = renderer.create(<TimelineBar top={10} height={10} />).toJSON();
    expect(tree).toMatchSnapshot();
});
