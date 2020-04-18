import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { StyledServicesSection, StyledFlexBox } from './ServicesSection.styles';
import ServiceItem from './ServiceItem';
import { StyledServiceSectionHeading } from './ServicesSection.styles';

// import 'ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
// import 'ScrollMagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'ScrollMagic';





const services =
  [
    {
      title: "Web Design",
      caption: "This is the first description",
      icon: "fa-shopping-cart"
    },
    {
      title: "Graphic Design",
      caption: "This is the first description",
      icon: "fa-laptop"
    },
    {
      title: "Web Development",
      caption: "This is the first description",
      icon: "fa-lock"
    }
  ]

const ServicesSection = (props) => {

  const [controller, setController] = useState(null);
  const tween = TweenMax.fromTo('.ServiceItem', 3, {opacity:0}, {opacity:1});

  const setAnimation = () => {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerHook: "onCenter",
      triggerElement: ".SectionHeading",
      duration: 0
    })
    .setTween(tween)
    .setClassToggle('.SectionHeading', 'show')
    .addIndicators({
      name: 'triggerDown', // custom name for your scene   
      indent: 100, // indent from the browser edge   
      colorStart: 'purple', // custom color - colorEnd   
      colorTrigger: 'orange'
    })
    .addTo(controller)
    
    setController(controller);
  }

  useEffect(setAnimation,[])
  
  return (
    
      <StyledServicesSection className="ServicesSectionWrapper">

        <StyledServiceSectionHeading className="SectionHeading">
            <h2>Services</h2>
        </StyledServiceSectionHeading>

        <StyledFlexBox column>
        {
          services.map((service, i) => {
            return (
              <div key={i}  >
              <ServiceItem 
                className="ServiceItem"
                column
                title={service.title}
                icon={service.icon}
                caption={service.caption}
              />
              </div>
            )
          })
        }
      </StyledFlexBox>

      </StyledServicesSection>     
  )
};

ServicesSection.propTypes = {
  // bla: PropTypes.string,
};

ServicesSection.defaultProps = {
  // bla: 'test',
};

export default ServicesSection;
