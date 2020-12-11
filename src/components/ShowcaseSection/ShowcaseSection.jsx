import React, { useRef, useEffect, useState } from 'react';
import {gsap, TweenMax, TimelineMax} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import PropTypes from 'prop-types';
import { StyledShowcaseSection } from './ShowcaseSection.styles';


const ShowcaseSection = (props) => {
  const imageRef = useRef(null);
  const showcaseSectionRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    let anim = new TimelineMax();
    anim.fromTo(imageRef.current, .5, {opacity:0}, {opacity:1})
    anim.fromTo(infoRef.current, .5, {opacity:0, x:-500}, {opacity:1, x:0})

    ScrollTrigger.create({
      trigger: showcaseSectionRef.current,
      animation: anim,
      start: "top top",
      // end: "bottom bottom",
      pin:showcaseSectionRef.current,
      duration:0,
      markers: true,
      scrub: true
    })
  }, []);

 return( <div>
    <StyledShowcaseSection ref={showcaseSectionRef} {...props} className="ShowcaseSectionWrapper">
      <div className="contentContainer" >
        <div className="h2-wrapper">
          <h2>{props.title}</h2>
        </div>
        <div ref={infoRef} className="infoContainer col" >
          <h3>{props.title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia magnam ea magni itaque maxime. Cupiditate odio possimus laboriosam eaque, eum voluptas dolorem sunt quaerat ratione voluptatibus ut doloribus voluptatem.</p>
          <button>{props.buttonText}</button>
        </div>
        <div ref={imageRef} className="imgContainer col" >
          <img src={props.image} alt="showcase image" />
        </div>
      </div>
    </StyledShowcaseSection>
  </div>)
};

ShowcaseSection.propTypes = {
  // bla: PropTypes.string,
};

ShowcaseSection.defaultProps = {
  // bla: 'test',
};

export default ShowcaseSection;
