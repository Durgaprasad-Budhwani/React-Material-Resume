/**
 * Created by durgaprasad on 10/10/17.
 */
/* global expect,it */
import React from 'react';
import Course from '../../../../src/components/content/education/course';
import renderer from 'react-test-renderer';

it('renders course', () => {
  const tree = renderer.create(
    <Course
      year="name1"
      name="abc"
      university="'abc"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});