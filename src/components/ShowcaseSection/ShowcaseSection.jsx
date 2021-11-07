import React, { useRef, useEffect } from 'react';
import {gsap, TimelineMax} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { StyledShowcaseSection, StyledButton } from './ShowcaseSection.styles';


const ShowcaseSection = (props) => {
  const imageRef = useRef(null);
  const showcaseSectionRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    let anim = new TimelineMax();
    anim.fromTo(imageRef.current, 1, {opacity:0}, {opacity:1}, {ease: "power1.inOut"})
    anim.fromTo(infoRef.current, 1, {opacity:0, y:100}, {opacity:1, y:0}, {ease: "power1.inOut"} )

    // gsap.utils.snap(5, 50);

    ScrollTrigger.create({
      trigger: showcaseSectionRef.current,
      animation: anim,
      start: "top 100px",
      end: "bottom bottom"
    })
  }, []);

 return( 
    <StyledShowcaseSection ref={showcaseSectionRef} {...props} className="ShowcaseSectionWrapper">
      <div className="contentContainer" >
        <div className="h2-wrapper">
          <h2>{props.title}</h2>
        </div>
        <div ref={infoRef} className="infoContainer col" >
          <h3>{props.title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia magnam ea magni itaque maxime. Cupiditate odio possimus laboriosam eaque, eum voluptas dolorem sunt quaerat ratione voluptatibus ut doloribus voluptatem.</p>
          <StyledButton>{props.buttonText}</StyledButton>
        </div>
        <div ref={imageRef} className="imgContainer col" >
          <img src={props.image} alt="showcase" />
        </div>
      </div>
    </StyledShowcaseSection>
  )
};

ShowcaseSection.propTypes = {
  // bla: PropTypes.string,
};

ShowcaseSection.defaultProps = {
  // bla: 'test',
};

export default ShowcaseSection;
