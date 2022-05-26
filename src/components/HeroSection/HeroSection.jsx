import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledImageContainer, StyledHeroBanner, StyledBackgroundImage, StyledHeading, StyledSubheading, StyledDescription, StyledButton, StyledOverlay } from './HeroSection.styles';
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
  <StyledHeroBanner ref={sectionContainer} className="hero">
    <StyledOverlay bgImage={props.bgImage} className="bgImage" />
    <StyledBackgroundImage smallBgImage={props.smallImage} largeBgImage={props.largeImage} className="bgImage" />
    <StyledDescription>You cordially invited to</StyledDescription>
    <StyledHeading className="hero__heading" ref={sectionHeading => items.current.push(sectionHeading)}>{props.heading}</StyledHeading>
    {props.subheading && <StyledSubheading className="hero__subheading" ref={sectionSubheading => items.current.push(sectionSubheading)}>{props.subheading}</StyledSubheading>}
    <StyledDescription className="hero__desccription" ref={sectionDescription => items.current.push(sectionDescription)}>{props.description}</StyledDescription>
    {props.buttonText && <StyledButton ref={sectionButton => items.current.push(sectionButton)}>{props.buttonText}</StyledButton>}
    {/* <StyledImageContainer right/>
    <StyledImageContainer left /> */}
    <StyledImageContainer image={props.featureImageMobile}/>
  </StyledHeroBanner>
)}

export default HeroSection;
