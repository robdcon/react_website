import React from 'react';
import PropTypes from 'prop-types';
import { StyledShowcaseSection, SpacerSection } from './ShowcaseSection.styles';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ShowcaseSection = (props) => (
  <div>
  <StyledShowcaseSection {...props} className="ShowcaseSectionWrapper">
    <Controller>
      <Scene
        duration="200%"
        // triggerElement=".contentContainer"
        indicators={true}
        pin={true}
        triggerHook={0}
      >
        <Timeline wrapper={<div className="contentContainer" />}>
          <Tween
          from={{x:1000, opacity:0}}
          to={{x:0, opacity:0.025}}
          wrapper={<div className="h2-wrapper"></div>}
          duration={3}
          >
            <h2>{props.title}</h2>
          </Tween>
          <Tween
            from={{ x: -1000, opacity: 0 }}
            to={{ x: 0, opacity: 1 }}
            ease="Power2.easeInOut"
            duration={5}
            wrapper={<div className="infoContainer col" />}
          >

            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia magnam ea magni itaque maxime. Cupiditate odio possimus laboriosam eaque, eum voluptas dolorem sunt quaerat ratione voluptatibus ut doloribus voluptatem.</p>
            <button>{props.buttonText}</button>

          </Tween>
          <Tween
            from={{ y: 1000, opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            ease="Power2.easeInOut"
            duration={5}
            wrapper={<div className="imgContainer col" />}
          >

            <img src={props.image} alt="showcase image" />

          </Tween>
        </Timeline>
      </Scene>
    </Controller>
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
