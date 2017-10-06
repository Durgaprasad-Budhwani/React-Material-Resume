/**
 * Created by Durgaprasad Budhwani on 10/6/2017.
 */
import React from 'react';

jest.mock('react-animate-on-scroll', () => {
    class ScrollAnimation extends React.Component {
        render() {
            return (<div>{this.props.children}</div>);
        }
    }
    return ScrollAnimation;
});