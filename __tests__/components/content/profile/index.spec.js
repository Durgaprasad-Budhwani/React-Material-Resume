/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import Profile from '../../../../src/components/content/profile';
import renderer from 'react-test-renderer';

it('renders profile', () => {
  const tree = renderer.create(
    <Profile
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});