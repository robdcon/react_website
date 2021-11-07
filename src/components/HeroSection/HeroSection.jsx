import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledHeroBanner, StyledBackgroundImage, StyledHeading, StyledSubheading, StyledDescription, StyledButton, StyledOverlay } from './HeroSection.styles';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {gsap, TweenMax, TimelineMax} from "gsap";


const HeroSection = (props) => {
  const sectionContainer = useRef(null);
  const sectionHeading = useRef(null);
  const sectionSubheading = useRef(null);
  const sectionDescription = useRef(null);
  const sectionButton = useRef(null);
  const items = useRef([]);

  useEffect(() => {
    const anim = new TimelineMax();
    anim.staggerFromTo(items.current, .5, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, .125)
    
    ScrollTrigger.create({
      animation: anim,
      trigger: sectionContainer.current,
      markers: false
    });
  }, []);

  return (
  <StyledHeroBanner ref={sectionContainer} className="HeroSectionWrapper">
    <StyledOverlay bgImage={props.bgImage} className="bgImage" />
    <StyledBackgroundImage bgImage={props.bgImage} className="bgImage" />
    <StyledHeading ref={sectionHeading => items.current.push(sectionHeading)}>{props.heading}</StyledHeading>
    {props.subheading && <StyledSubheading ref={sectionSubheading => items.current.push(sectionSubheading)}>{props.subheading}</StyledSubheading>}
    <StyledDescription ref={sectionDescription => items.current.push(sectionDescription)}>{props.description}</StyledDescription>
    {props.buttonText && <StyledButton ref={sectionButton => items.current.push(sectionButton)}>{props.buttonText}</StyledButton>}
  </StyledHeroBanner>
)}

HeroSection.propTypes = {
  // bla: PropTypes.string,
};

HeroSection.defaultProps = {
  // bla: 'test',
};

export default HeroSection;
