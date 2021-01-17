import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledHeading, StyledSubheading, StyledDescription, StyledButton } from './CtaSection.styles';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {gsap, TweenMax, TimelineMax} from "gsap";

const CtaSection = (props) => {
const container = useRef(null);

  useEffect(() => {

    const anim = TweenMax.staggerFromTo(container.current.children, .35, {y: 20, autoAlpha: 0}, {y: 0, autoAlpha: 1}, .125);

    ScrollTrigger.create({
      animation: anim,
      trigger: container.current,
      start: 'top 100px'
    });
  }, []);
  return (
  <StyledSection ref={container} className="CtaSectionWrapper">
    <StyledHeading>{props.heading}</StyledHeading>
    {props.subheading && <StyledSubheading>{props.subheading}</StyledSubheading>}
    <StyledDescription>{props.description}</StyledDescription>
    {props.buttonText && <StyledButton>{props.buttonText}</StyledButton>}
  </StyledSection>
)};

CtaSection.propTypes = {
  // bla: PropTypes.string,
};

CtaSection.defaultProps = {
  // bla: 'test',
};

export default CtaSection;
