/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import SKillBar from '../../../../src/components/content/skills/skill-bar';
import renderer from 'react-test-renderer';

it('renders skill bar', () => {
  const tree = renderer.create(
    <SKillBar
      name="name1"
      completed={60}
      size={10}
      color="primary"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});