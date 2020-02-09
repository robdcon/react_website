import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './TestComponent.styles';

const TestComponent = (props) => {
  <div className="TestComponentWrapper">
    Test content
  </div>
};

TestComponent.propTypes = {
  // bla: PropTypes.string,
};

TestComponent.defaultProps = {
  // bla: 'test',
};

export default TestComponent;
