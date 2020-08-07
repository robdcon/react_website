import React from 'react';
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

const ServicesSection = (props) => (
  <StyledSection className="StyledSection">

    <StyledServiceSectionHeading className="SectionHeading" >
      <h2>Services</h2>
    </StyledServiceSectionHeading>
    
    {/* <ServiceItemWrapper className="ServiceItemWrapper" > */}
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
    {/* </ServiceItemWrapper> */}
  </StyledSection>
);

ServicesSection.propTypes = {
  // bla: PropTypes.string,
};

ServicesSection.defaultProps = {
  // bla: 'test',
};

export default ServicesSection;
