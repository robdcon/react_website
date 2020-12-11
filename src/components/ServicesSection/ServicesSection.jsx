import React, { useRef, useEffect, useState } from 'react';
import {gsap, TweenMax, TimelineMax} from "gsap";

import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


import PropTypes from 'prop-types';
import { ServiceItemWrapper, StyledServicesSection, StyledFlexBox, StyledSection } from './ServicesSection.styles';
import ServiceItem from './ServiceItem';
import { StyledServiceSectionHeading } from './ServicesSection.styles';

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
  const serviceContainer = useRef(null);
  // const [anim, setAnim] = useState(null);
  
  useEffect(() => {
   
  // import { ScrollTrigger } from 'gsap/ScrollTrigger';
  // gsap.registerPlugin(ScrollTrigger);
    const anim = TweenMax.staggerFromTo(serviceContainer.current.children, .5, 
    { opacity: 0, y:-100 }, 
    { opacity: 1 , y: 0}, .125)

    ScrollTrigger.create({
      trigger: "#servicesHeading",
      animation: anim,
      start: "top 80%",
      end: "bottom bottom",
      duration: "1000px",
      pin:true,
      // reverse:true,
      // markers: true,
      onToggle: self => console.log("toggled, isActive:", self.isActive),
  onUpdate: self => {
    console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  }
    })
    
  }, []);

  return(
    <StyledSection className="StyledSection">

      <StyledServiceSectionHeading id="servicesHeading" className="SectionHeading" >
        <h2>Services</h2>
      </StyledServiceSectionHeading>
      
      <ServiceItemWrapper  ref={serviceContainer} className="ServiceItemWrapper" >
        {
          services.map((service, i) => {
            return (
            
                <ServiceItem
                  key={i}
                  title={service.title}
                  icon={service.icon}
                  caption={service.caption}
                />
            )
          })
        }
      </ServiceItemWrapper>

  </StyledSection>
  )
};

ServicesSection.propTypes = {
  // bla: PropTypes.string,
};

ServicesSection.defaultProps = {
  // bla: 'test',
};

export default ServicesSection;
