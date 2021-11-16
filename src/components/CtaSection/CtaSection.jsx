import React, { useEffect, useRef } from 'react';
import { StyledSection, StyledHeading, StyledSubheading, StyledDescription, StyledButton } from './CtaSection.styles';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {gsap, TimelineMax} from "gsap";

const CtaSection = (props) => {
  const sectionContainer = useRef(null);
  const sectionHeading = useRef(null);
  const sectionSubheading = useRef(null);
  const sectionDescription = useRef(null);
  const sectionButton = useRef(null);
  const items = useRef([]);

  useEffect(() => {
    const anim = new TimelineMax();
    anim.staggerFromTo(
      items.current, 
      .5,
      { 
        opacity: 0, 
        y: 100
      }, 
      { 
        opacity: 1 , 
        y: 0
      }, 
      .125
    )

    ScrollTrigger.create({
      animation: anim,
      trigger: sectionContainer.current,
      start: 'top center',
      end: 'top top',
      markers: false
    });
  }, []);
  
  return (
  <StyledSection ref={sectionContainer} className="cta-section-wrapper">
    <StyledHeading ref={sectionHeading => items.current.push(sectionHeading)}>{props.heading}</StyledHeading>
    {props.subheading && <StyledSubheading ref={sectionSubheading  => items.current.push(sectionSubheading)}>{props.subheading}</StyledSubheading>}
    <StyledDescription ref={sectionDescription => items.current.push(sectionDescription)}>{props.description}</StyledDescription>
    {props.buttonText && <StyledButton ref={sectionButton => items.current.push(sectionButton)}>{props.buttonText}</StyledButton>}
  </StyledSection>
)};

export default CtaSection;
