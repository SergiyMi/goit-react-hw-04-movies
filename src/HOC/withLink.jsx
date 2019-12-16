import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const withLink = WrappedComponent => {
  return class WithLink extends Component {
    render() {
      return (
        <>
          {/* <li> */}
          <Link to="/">
            <WrappedComponent />
          </Link>
          {/* </li> */}
        </>
      );
    }
  };
};

export default withLink;
