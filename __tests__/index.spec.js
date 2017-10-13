/**
 * Created by durgaprasad on 10/13/17.
 */
import React from 'react';
import Index from '../src';

it('renders without crashing', () => {
  jest.mock('./../src/AppContainer', () => {
    return (<div />)
  });
  
  expect(JSON.stringify(
    Object.assign({}, Index, { _reactInternalInstance: 'censored' })
  )).toMatchSnapshot();
});