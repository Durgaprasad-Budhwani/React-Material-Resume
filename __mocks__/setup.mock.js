/**
 * Created by Durgaprasad Budhwani on 10/6/2017.
 */
jest.mock('react-animate-on-scroll', () => {
  const React = require('react');
    class ScrollAnimation extends React.Component {
        render() {
            return (<div>{this.props.children}</div>);
        }
    }
    return ScrollAnimation;
});

jest.mock('google-map-react', () => {
  const React = require('react');
  class GoogleMap extends React.Component {
    render() {
      return (<div>{this.props.children}</div>);
    }
  }
  return GoogleMap;
});
