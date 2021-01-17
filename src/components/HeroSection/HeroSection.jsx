import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeroBanner, StyledBackgroundImage } from './HeroSection.styles';

const HeroSection = (props) => {
  return (
  <StyledHeroBanner className="HeroSectionWrapper">
    <StyledBackgroundImage bgImage={props.bgImage} className="bgImage" />
    {props.children}
  </StyledHeroBanner>
)}

HeroSection.propTypes = {
  // bla: PropTypes.string,
};

HeroSection.defaultProps = {
  // bla: 'test',
};

export default HeroSection;
