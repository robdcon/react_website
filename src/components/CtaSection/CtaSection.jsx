import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledHeading, StyledSubheading, StyledDescription, StyledButton } from './CtaSection.styles';

const CtaSection = (props) => (
  <StyledSection tone={props.tone} className="CtaSectionWrapper">
    <StyledHeading darkTheme={props.darkTheme}>{props.heading}</StyledHeading>
    {props.subheading && <StyledSubheading darkTheme={props.darkTheme}>{props.subheading}</StyledSubheading>}
    <StyledDescription darkTheme={props.darkTheme}>{props.description}</StyledDescription>
    {props.buttonText && <StyledButton>{props.buttonText}</StyledButton>}
  </StyledSection>
);

CtaSection.propTypes = {
  // bla: PropTypes.string,
};

CtaSection.defaultProps = {
  // bla: 'test',
};

export default CtaSection;
