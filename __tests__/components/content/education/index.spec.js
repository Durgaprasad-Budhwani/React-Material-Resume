/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import Education from '../../../../src/components/content/education';
import renderer from 'react-test-renderer';

it('renders education', () => {
  const tree = renderer.create(
    <Education
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});