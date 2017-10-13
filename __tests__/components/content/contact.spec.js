/**
 * Created by durgaprasad on 10/13/17.
 */
import React from 'react';
import Contact from '../../../src/components/content/contact';
import renderer from 'react-test-renderer';

it('renders contact', () => {
  const tree = renderer.create(
    <Contact
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});