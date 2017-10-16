/**
 * Created by durgaprasad on 10/16/17.
 */
/* global expect,it */
import React from 'react';
import MapContainer from '../../../../src/components/content/map';
import renderer from 'react-test-renderer';

it('renders map', () => {
  const tree = renderer.create(
    <MapContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});