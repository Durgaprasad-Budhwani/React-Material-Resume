/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it */
import React from 'react';
import Blog from '../../../../src/components/content/blog/blog';
import renderer from 'react-test-renderer';
import Grid from 'material-ui/Grid';

it('renders bubble', () => {
    const tree = renderer.create(
        <Blog
            md={6}
            sm={12}
            image={'image1'}
            title={'title1'}
            day={'day1'}
            month={'month1'}            
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
