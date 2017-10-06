/**
 * Created by Durgaprasad Budhwani on 10/6/2017.
 */
jest.mock('react-animate-on-scroll', () => {
    // const RealComponent = require.requireActual('react-animate-on-scroll');
    const React = require('React');
    class ScrollAnimation extends React.Component {
        render() {
            return (<div>{this.props.children}</div>);
        }
    }
    // ScrollAnimation.default = RealComponent.default;
    return ScrollAnimation;
});