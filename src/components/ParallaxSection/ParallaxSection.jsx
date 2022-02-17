import React, {useRef, useEffect, useState} from 'react';
import { StyledParallaxSection, StyledParallaxImage, StyledParallaxContent, Overlay, StyledCanvas } from './ParallaxSection.styles';
import { parallaxContainer } from '../../utils/animations';


const ParallaxSection = (props) => {
  const container = useRef(null);
  const fgImg = useRef(null);
  const canvas = useRef(null);

  useEffect(() => {
    parallaxContainer(container.current);
  }, []);

  return (
    <StyledParallaxSection ref={container} background={props.background} className="parallax-section">
      <StyledParallaxImage ref={fgImg} foreground={props.foreground} className="ParallaxImage">
        { props.overlay && <Overlay color={`#000`} /> }
        <StyledCanvas id="canvas" ref={canvas}></StyledCanvas>
      </StyledParallaxImage>
    </StyledParallaxSection>
  )
  
};

export default ParallaxSection;
