/**
 * Created by durgaprasad on 10/13/17.
 */
import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

it('renders app', () => {
  const tree = renderer.create(
    <App
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});