import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledHeading, StyledSubheading, StyledDescription, StyledButton } from './CtaSection.styles';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {gsap, TweenMax, TimelineMax} from "gsap";

const CtaSection = (props) => {
  const sectionContainer = useRef(null);
  const sectionHeading = useRef(null);
  const sectionSubheading = useRef(null);
  const sectionDescription = useRef(null);
  const sectionButton = useRef(null);

  useEffect(() => {

    const anim = gsap.timeline({defaults:{ ease: 'Power2.back'}});
    anim.fromTo(sectionHeading.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0});
    anim.fromTo(sectionSubheading.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.25);
    anim.fromTo(sectionDescription.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.5);
    anim.fromTo(sectionButton.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.35);

    ScrollTrigger.create({
      animation: anim,
      trigger: sectionContainer.current,
      start: 'top 300px',
      end: 'top top',
      markers: true,
      scrub: 1
    });
  }, []);
  return (
  <StyledSection ref={sectionContainer} className="CtaSectionWrapper">
    <StyledHeading ref={sectionHeading}>{props.heading}</StyledHeading>
    {props.subheading && <StyledSubheading ref={sectionSubheading}>{props.subheading}</StyledSubheading>}
    <StyledDescription ref={sectionDescription}>{props.description}</StyledDescription>
    {props.buttonText && <StyledButton ref={sectionButton}>{props.buttonText}</StyledButton>}
  </StyledSection>
)};

CtaSection.propTypes = {
  // bla: PropTypes.string,
};

CtaSection.defaultProps = {
  // bla: 'test',
};

export default CtaSection;
