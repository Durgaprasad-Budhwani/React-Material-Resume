/**
 * Created by durgaprasad on 10/13/17.
 */
import React from 'react';
import About from '../../../src/components/content/about';
import renderer from 'react-test-renderer';

it('renders about', () => {
  const tree = renderer.create(
    <About
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
