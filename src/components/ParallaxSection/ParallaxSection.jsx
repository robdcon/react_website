import React from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StyledParallaxSection, StyledParallaxImage, StyledParallaxContent, Overlay } from './ParallaxSection.styles';
import { StyledFlexBox } from '../ServicesSection/ServicesSection.styles';

const ParallaxSection = (props) => (
  <Controller>
    <Scene
    duration={"200%"}
    triggerHook="onLeave"
    // triggerElement="ParallaxSection"
    indicators={false}
    >
      <Timeline wrapper={<StyledParallaxSection className="ParallaxSection"></StyledParallaxSection>}>
        <Tween
          to={{y:"-20%", opacity:0}} 
        >
          <StyledParallaxImage image={props.image} className="ParallaxImage">
            { props.overlay && <Overlay color={`#000`} /> }
          </StyledParallaxImage>
       
        </Tween>
        <Tween wrapper={<StyledParallaxContent className="ParallaxContent" />}>
          {props.children}
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

ParallaxSection.propTypes = {
  // bla: PropTypes.string,
};

ParallaxSection.defaultProps = {
  // bla: 'test',
};

export default ParallaxSection;
