/**
 * Created by durgaprasad on 10/9/17.
 */
/* global expect,it */
import React from 'react';
import SectionTitle from '../../../src/components/common/section-title';
import renderer from 'react-test-renderer';

it('renders section title', () => {
  const tree = renderer.create(<SectionTitle title="Hello" />).toJSON();
  expect(tree).toMatchSnapshot();
});