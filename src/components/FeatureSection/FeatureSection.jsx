import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { 
  FeatureSectionWrapper, 
  FeatureDetailsWrapper, 
  FeatureHeading, 
  FeatureDescription, 
  FeatureImageWrapper, 
  FeatureImage, 
  FeatureTagline 
} from './FeatureSection.styles';

const FeatureSection = (props) => {
  const section = useRef(null);
  const heading = useRef(null);
  const tagline = useRef(null);
  const description = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    const anim = gsap.timeline({defaults:{ ease: 'Power2.back'}});
    anim.fromTo(heading.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0});
    anim.fromTo(tagline.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.25);
    anim.fromTo(description.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.5);
    anim.fromTo(image.current, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0}, 0.35);
    ScrollTrigger.create({
      animation: anim,
      trigger: section.current,
      start: 'top 300px',
      end: 'top top',
      markers: true,
      scrub: 1
    });
  }, [])
  
  return (
    <FeatureSectionWrapper ref={section} className="FeatureSectionWrapper">

      <FeatureDetailsWrapper>
        <FeatureHeading ref={heading} className="FeatureHeading">{props.heading}</FeatureHeading>
        <FeatureTagline ref={tagline} className="FeatureTagliner"><p>{props.tagline}</p></FeatureTagline>
        <FeatureDescription ref={description} className="FeatureDescription"><p>{props.description}</p></FeatureDescription>
      </FeatureDetailsWrapper>

      <FeatureImageWrapper ref={image}>
        <FeatureImage className="FeatureImage"><img src={props.image} alt={props.imageAlt} /></FeatureImage>
      </FeatureImageWrapper>

    </FeatureSectionWrapper>
  )
};

FeatureSection.propTypes = {
  // bla: PropTypes.string,
};

FeatureSection.defaultProps = {
  // bla: 'test',
};

export default FeatureSection;
