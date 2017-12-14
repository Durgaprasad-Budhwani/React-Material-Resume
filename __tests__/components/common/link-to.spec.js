/**
 * Created by Durgaprasad Budhwani on 12/13/2017.
 */
/* global expect,it */
import React from 'react';
import LinkTo from '../../../src/components/common/link-to';
import renderer from 'react-test-renderer';

it('render link to', () => {
    const tree = renderer.create(<LinkTo
        to="to"
        title="title"
        enableNavigationItemClass={true}
        offset={100}
        classes={{}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});
//
// it('render link to - handle set active', () => {
//     const tree = renderer.create(<LinkTo
//         to="to"
//         title="title"
//         enableNavigationItemClass={true}
//         offset={100}
//         classes={{}}
//     />);
//     const instance = tree._instance;
//     console.log(instance);
//     instance._handleSetActive();
//     expect(tree).toMatchSnapshot();
// });
//
// it('render link to - handle set inactive', () => {
//     const tree = renderer.create(<LinkTo
//         to="to"
//         title="title"
//         enableNavigationItemClass={true}
//         offset={100}
//         classes={{}}
//     />);
//     const instance = tree._instance;
//     console.log(instance);
//     instance._handleSetInactive();
//     expect(tree).toMatchSnapshot();
// });