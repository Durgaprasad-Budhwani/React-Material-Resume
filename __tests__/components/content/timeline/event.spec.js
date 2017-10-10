/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import Event from '../../../../src/components/content/timeline/event';
import renderer from 'react-test-renderer';

it('renders event', () => {
  const tree = renderer.create(
    <Event
      year="name1"
      company="abc"
      title="abc"
      description="red"
      alignment={'LEFT'}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});