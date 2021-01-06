import React, { useState, useRef, useEffect } from 'react';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {gsap} from 'gsap';
gsap.registerPlugin(ScrollTrigger);
import PropTypes from 'prop-types';
import { Test, TestWrapper, StyledHeadingClone } from './TestComponent.styles';
// import {testTween} from './animations';

const TestComponent = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(50);
  const wrapper = useRef(null);
  const testTweenRef = useRef(null);
  const maskStyle = {
    '--maskX':x,
    '--maskY':y
  }

  const onMouseMove = (e) => {

    const width = wrapper.current.clientWidth;
    const height = wrapper.current.clientHeight;
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const xPercent = Math.floor((offsetX/width) * 200);
    const yPercent = Math.floor((offsetY/height) * 100);
    setX(xPercent);
    setY(yPercent);

  }

  // useEffect(() => {
   
  //   testTween(testTweenRef.current)
    
  // }, []);
  

  return (
  <div>
    <TestWrapper className="TestComponentWrapper" onMouseMove={(e) => { onMouseMove(e) }} ref={wrapper}>
      <h1 className="header" ref={testTweenRef} >Welcome</h1>
      <StyledHeadingClone style={maskStyle} className="heading-clone">Welcome</StyledHeadingClone>
    </TestWrapper>
  </div>
  );
   
};

TestComponent.propTypes = {
  // bla: PropTypes.string,
};

TestComponent.defaultProps = {
  // bla: 'test',
};

export default TestComponent;
