/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import Timeline from '../../../../src/components/content/timeline';
import renderer from 'react-test-renderer';

it('renders timeline', () => {
  const tree = renderer.create(
    <Timeline
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});