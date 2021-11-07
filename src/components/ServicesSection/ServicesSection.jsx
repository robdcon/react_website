import React, { useRef, useEffect } from 'react';
import {gsap, TimelineMax} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { ServiceItemWrapper, StyledServiceSectionHeading, StyledSection, Column } from './ServicesSection.styles';
import ServiceItem from './ServiceItem';

 const ServicesSection = (props) => {
   const sectionRef = useRef(null);
  const serviceContainer = useRef(null);
  
  useEffect(() => {
   let anim = new TimelineMax();
   anim.staggerFromTo(
      serviceContainer.current.children, 
      .5,
      { 
        opacity: 0, 
        y:-100
      }, 
      { 
        opacity: 1 , 
        y: 0
      }, 
      .125
      
    )

    ScrollTrigger.create({
      trigger: sectionRef.current,
      animation: anim,
      start: "top center",
      end: "top top"
    })
    
  }, []);

  return(
    <StyledSection ref={sectionRef} className="StyledSection">

      <StyledServiceSectionHeading id="servicesHeading" className="SectionHeading" >
        <h2>{props.heading}</h2>
      </StyledServiceSectionHeading>
      
      <ServiceItemWrapper  ref={serviceContainer} className="ServiceItemWrapper" >
        {
          props.items.map(({title,caption,icon}, i) => {
           
            return (
              <Column key={i}>
                  <ServiceItem
                    title={title}
                    icon={icon}
                    caption={caption}
                  />
              </Column>
            )
          })
        }
      </ServiceItemWrapper>

  </StyledSection>
  )
};

export default ServicesSection;
