/**
 * Created by Durgaprasad Budhwani on 10/9/2017.
 */
/* global expect,it */
import React from 'react';
import BlogContainer, {Blog} from '../../../../src/components/content/blog/blog';
import renderer from 'react-test-renderer';

it('renders <BlogContainer />', () => {
    const tree = renderer.create(
        <BlogContainer
            md={6}
            sm={12}
            image={'image1'}
            title={'title1'}
            day={'day1'}
            month={'month1'}
            url={'url'}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders <Blog />', () => {
    const classes = {
        blogItemImage: {},
        blogItemBox: {},
        imageContainer: {},
        blogItemContent: {},
        blogItemTimeContainer: {},
        blogItemTimeDay: {},
        blogItemTimeMonth: {},
        blogItemTitle: {}
    };
    const tree = renderer.create(
        <Blog
            md={6}
            sm={12}
            image={'image1'}
            title={'title1'}
            day={'day1'}
            month={'month1'}
            url={'url'}
            classes={classes}
        />
    );
    const instance = tree.getInstance();
    instance._openTab('url');
    expect(tree.toJSON()).toMatchSnapshot();
});

