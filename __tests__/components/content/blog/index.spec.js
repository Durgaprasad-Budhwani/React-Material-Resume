/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it, describe, afterEach */
import React from 'react';
import BlogContainer, {Blogs} from '../../../../src/components/content/blog';
import renderer from 'react-test-renderer';
import fetchMock from 'fetch-mock';
import {mount, shallow} from 'enzyme'
import toJson from 'enzyme-to-json';
import '../../../../setupTests';

describe("<Blogs />", () => {
    const classes = {
        blogItemImage: {},
        root: {}
    };
    
    const blog = {image: 'image', title: "title", day: "day", month: "month"};
    
    afterEach(() => {
        fetchMock.restore();
    });
    
    it('renders <BlogContainer />', () => {
        let blogs = [ blog ];
        fetchMock.mock('blogs.json', blogs);
        const tree = renderer.create(
            <BlogContainer
                top={10}
                height={120}
            />
        );
        let instance = tree.getInstance();
        expect(tree.toJSON()).toMatchSnapshot();
        expect.arrayContaining(instance.state.blogs);
    });
    
    it('renders <Blogs />', () => {
        let blogs = [  ];
        fetchMock.mock('blogs.json', blogs);
        const wrapper = mount(
            <Blogs
                top={10}
                height={120}
                classes={classes}
            />
        );
        let instance = wrapper.instance();
        let blogWrapper = shallow(instance._renderBlog(blog, 1));
        expect(toJson(blogWrapper)).toMatchSnapshot();
    });
});
