/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import SocialIcons from '../../../../src/components/content/profile/social-icons';
import renderer from 'react-test-renderer';

it('renders social icons', () => {
  const tree = renderer.create(
    <SocialIcons
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});