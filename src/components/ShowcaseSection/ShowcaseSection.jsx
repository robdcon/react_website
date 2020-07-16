import React from 'react';
import PropTypes from 'prop-types';
import { StyledShowcaseSection, SpacerSection } from './ShowcaseSection.styles';

const ShowcaseSection = (props) => (
  <div>
    <StyledShowcaseSection {...props} className="ShowcaseSectionWrapper">
      <div className="contentContainer" >
        <div className="h2-wrapper">
          <h2>{props.title}</h2>
        </div>
        <div className="infoContainer col" >
          <h3>{props.title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia magnam ea magni itaque maxime. Cupiditate odio possimus laboriosam eaque, eum voluptas dolorem sunt quaerat ratione voluptatibus ut doloribus voluptatem.</p>
          <button>{props.buttonText}</button>
        </div>
        <div className="imgContainer col" >
          <img src={props.image} alt="showcase image" />
        </div>
      </div>
    </StyledShowcaseSection>
  </div>
);

ShowcaseSection.propTypes = {
  // bla: PropTypes.string,
};

ShowcaseSection.defaultProps = {
  // bla: 'test',
};

export default ShowcaseSection;
