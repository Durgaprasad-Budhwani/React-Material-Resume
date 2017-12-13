/**
 * Created by durgaprasad on 10/13/17.
 */
/* global expect,it */
import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

it('renders app with loading', () => {
  const tree = renderer.create(
    <App
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders app without loading', () => {
    const tree = renderer.create(
        <App
        />
    );
    const instance = tree.getInstance();
    instance.setState({loading: false});
    console.log(instance.state.loading);
    expect(tree.toJSON()).toMatchSnapshot();
});