/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it, describe, afterEach */
import React from 'react';
import BlogContainer from '../../../../src/components/content/blog';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme'
import fetchMock from 'fetch-mock'

describe("Blog Render", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    
    it('renders blog container', () => {
        let blogs = [{image: 'image', title: "title", day: "day", month: "month"}];
        fetchMock.mock('blogs.json', blogs);
        const tree = renderer.create(
            <BlogContainer
                top={10}
                height={120}
            />
        );
        let instance = tree.getInstance();
        expect(tree.toJSON()).toMatchSnapshot();
        expect.arrayContaining(instance.state);
    });
});
