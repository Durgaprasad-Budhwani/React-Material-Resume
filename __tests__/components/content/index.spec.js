/**
 * Created by durgaprasad on 10/13/17.
 */
import React from 'react';
import Content from '../../../src/components/content';
import renderer from 'react-test-renderer';

it('renders content', () => {
  const tree = renderer.create(
    <Content
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});