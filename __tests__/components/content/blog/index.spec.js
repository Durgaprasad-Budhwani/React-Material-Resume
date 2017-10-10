/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it */
import React from 'react';
import BlogContainer from '../../../../src/components/content/blog';
import renderer from 'react-test-renderer';

it('renders blog container', () => {
    const tree = renderer.create(
        <BlogContainer
            top={10}
            height={120}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
