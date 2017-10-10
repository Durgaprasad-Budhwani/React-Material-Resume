/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import Skills from '../../../../src/components/content/skills';
import renderer from 'react-test-renderer';

it('renders skill bar', () => {
  const tree = renderer.create(
    <Skills
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});