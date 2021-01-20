import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledHeroBanner, StyledBackgroundImage, StyledHeading, StyledSubheading, StyledDescription, StyledButton } from './HeroSection.styles';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {gsap, TweenMax, TimelineMax} from "gsap";

const HeroSection = (props) => {
  const sectionContainer = useRef(null);
  const sectionHeading = useRef(null);
  const sectionSubheading = useRef(null);
  const sectionDescription = useRef(null);
  const sectionButton = useRef(null);
  useEffect(() => {
    const anim = gsap.timeline({defaults:{ duration: 1, ease: 'Power2.ease'}});
    anim.fromTo(sectionHeading.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0});
    anim.fromTo(sectionSubheading.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.35);
    anim.fromTo(sectionDescription.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.65);
    anim.fromTo(sectionButton.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, .5);

    ScrollTrigger.create({
      animation: anim,
      trigger: sectionContainer.current,
      markers: true
    });
  }, []);
  return (
  <StyledHeroBanner ref={sectionContainer} className="HeroSectionWrapper">
    <StyledBackgroundImage bgImage={props.bgImage} className="bgImage" />
    <StyledHeading ref={sectionHeading}>{props.heading}</StyledHeading>
    {props.subheading && <StyledSubheading ref={sectionSubheading}>{props.subheading}</StyledSubheading>}
    <StyledDescription ref={sectionDescription}>{props.description}</StyledDescription>
    {props.buttonText && <StyledButton ref={sectionButton}>{props.buttonText}</StyledButton>}
  </StyledHeroBanner>
)}

HeroSection.propTypes = {
  // bla: PropTypes.string,
};

HeroSection.defaultProps = {
  // bla: 'test',
};

export default HeroSection;
