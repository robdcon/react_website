import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Test, TestWrapper, StyledHeadingClone } from './TestComponent.styles';

const TestComponent = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(50);
  const wrapper = useRef(null);
  const maskStyle = {
    '--maskX':x,
    '--maskY':y
  }

  const onMouseMove = (e) => {

    const width = wrapper.current.clientWidth;
    const height = wrapper.current.clientHeight;
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const xPercent = Math.floor((offsetX/width) * 100);
    const yPercent =Math.floor((offsetY/height) * 100);
    setX(xPercent);
    setY(yPercent);
    console.log(x, y)
    
  }
  

  return (<TestWrapper className="TestComponentWrapper" onMouseMove={(e) => { onMouseMove(e) }} ref={wrapper}>
    <h1 className="header">Test content</h1>
    <StyledHeadingClone style={maskStyle} className="heading-clone">Test content</StyledHeadingClone>
  </TestWrapper>);
};

TestComponent.propTypes = {
  // bla: PropTypes.string,
};

TestComponent.defaultProps = {
  // bla: 'test',
};

export default TestComponent;
