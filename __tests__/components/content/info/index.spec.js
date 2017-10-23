/**
 * Created by durgaprasad on 10/23/17.
 */
/* global expect,it */
import React from 'react';
import Info from '../../../../src/components/content/info';
import renderer from 'react-test-renderer';

it('renders info', () => {
  const tree = renderer.create(
    <Info />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});