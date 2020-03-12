import React from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { StyledServicesSection, StyledFlexBox } from './ServicesSection.styles';
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

const ServicesSection = (props) => (
  <Controller>
    <Scene
    duration="50%"
    triggerHook="onCenter"
    indicators={true}
    >
      <Timeline wrapper={<StyledServicesSection className="ServicesSectionWrapper" />}>
          <Tween 
            from={{opacity:0, y:100}}
            wrapper={<StyledServiceSectionHeading/>}
          >
            <h2>Services</h2>
          </Tween>
          <Tween
            staggerFrom={{
              opacity: 0,
              y: 100
            }}
            staggerTo={{
              opacity: 1,
              y: 0
            }}
            stagger={0.15}
            wrapper={<StyledFlexBox className="ServicesSectionWrapper" />}
          >
        {
          services.map((service, i) => {
            return (

              <StyledFlexBox key={i} className="ServiceContainer">
                <ServiceItem
                  className="ServiceItem"
                  column
                  title={service.title}
                  icon={service.icon}
                  caption={service.caption}
                />
              </StyledFlexBox>
            )
          })
        }
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

ServicesSection.propTypes = {
  // bla: PropTypes.string,
};

ServicesSection.defaultProps = {
  // bla: 'test',
};

export default ServicesSection;
