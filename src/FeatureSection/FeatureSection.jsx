import React from 'react';
import PropTypes from 'prop-types';
import { FeatureSectionWrapper, FeatureHeading, FeatureDescription, FeatureImage, FeatureTagline } from './FeatureSection.styles';

const FeatureSection = (props) => {
  const heading = useRef(null);
  const tagline = useRef(null);
  const description = useRef(null);
  const image = useRef(null);
  
  <FeatureSectionWrapper className="FeatureSectionWrapper">
    <FeatureDetailsWrapper>
      <FeatureHeading ref={heading}>{props.heading}</FeatureHeading>
      <FeatureTagline ref={tagline}>{props.tagline}</FeatureTagline>
      <FeatureDescription ref={description}>{props.description}</FeatureDescription>
    </FeatureDetailsWrapper>
    <FeatureImageWrapper ref={image}>
      <FeatureImage>{[props.image]}</FeatureImage>
    </FeatureImageWrapper>
  </FeatureSectionWrapper>
};

FeatureSection.propTypes = {
  // bla: PropTypes.string,
};

FeatureSection.defaultProps = {
  // bla: 'test',
};

export default FeatureSection;
