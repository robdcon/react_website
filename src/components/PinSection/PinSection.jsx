import React, { useState, useRef, useEffect } from 'react';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {gsap, TweenMax, TimelineLite} from 'gsap';
gsap.registerPlugin(ScrollTrigger);
import PropTypes from 'prop-types';
import { PinSectionWrapper } from './PinSection.styles';

const PinSection = (props) => {
  const title = useRef(null);
  const description = useRef([]);
  const pinSection = useRef(null);

  // const fadeIn = el => {
  //   return TweenMax.fromTo(el, 0.35, {opacity:0}, {opacity:1});
  // }

  useEffect(() => {
    const fadeIn = new TimelineLite();
    fadeIn.fromTo(description.current.children[0], 0.35, {opacity:0}, {opacity:1});
    fadeIn.fromTo(description.current.children[1], 0.35, {opacity:0}, {opacity:1});
    fadeIn.fromTo(description.current.children[2], 0.35, {opacity:0}, {opacity:1});

    ScrollTrigger.create({
      animation: fadeIn,
      startTrigger: description.current.children[0],
      endTrigger: description.current.children[2],
      start: "center center",
      end: "bottom center",
      pin: title.current,
      markers: {startColor: "green", endColor: "red", fontSize: "18px", fontWeight: "normal", indent: 5}
    })
  });
  return(
    <PinSectionWrapper ref={pinSection} className="PinSectionWrapper">
      <div className="title" ref={title}><h1>Pin Me</h1></div>
      <div className="description" ref={description}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis quam error nemo praesentium adipisci enim eligendi, maiores accusamus quasi ad reiciendis quidem culpa nihil odit eveniet, in iusto est.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis quam error nemo praesentium adipisci enim eligendi, maiores accusamus quasi ad reiciendis quidem culpa nihil odit eveniet, in iusto est.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis quam error nemo praesentium adipisci enim eligendi, maiores accusamus quasi ad reiciendis quidem culpa nihil odit eveniet, in iusto est.</p>
      </div>
    </PinSectionWrapper>
  )
};

PinSection.propTypes = {
  // bla: PropTypes.string,
};

PinSection.defaultProps = {
  // bla: 'test',
};

export default PinSection;
