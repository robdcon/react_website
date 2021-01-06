import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledHeading, StyledSubheading, StyledDescription, StyledButton } from './CtaSection.styles';

const CtaSection = (props) => (
  <StyledSection className="CtaSectionWrapper">
    <StyledHeading>{props.heading}</StyledHeading>
    <StyledSubheading>{props.subheading}</StyledSubheading>
    <StyledDescription>{props.description}</StyledDescription>
    <StyledButton>{props.buttonText}</StyledButton>
  </StyledSection>
);

CtaSection.propTypes = {
  // bla: PropTypes.string,
};

CtaSection.defaultProps = {
  // bla: 'test',
};

export default CtaSection;
