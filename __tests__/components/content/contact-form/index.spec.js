/**
 * Created by Durgaprasad Budhwani on 10/10/2017.
 */
/* global expect,it */
import React from 'react';
import ContactForm from '../../../../src/components/content/contact-form';
import renderer from 'react-test-renderer';

it('renders contact form', () => {
    const tree = renderer.create(
        <ContactForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
