import React from 'react';
import PropTypes from 'prop-types';
import { StyledShowcaseSection } from './ShowcaseSection.styles';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ShowcaseSection = (props) => (
  <StyledShowcaseSection className="ShowcaseSectionWrapper">
    <Controller>
      <Scene
        duration="50%"
        triggerElement=".contentContainer"
        indicators={true}
      >
        <Timeline>
          <Tween
          from={{y:1000, opacity:0}}
          to={{y:0, opacity:0.025}}
          >
            <h2>{props.title}</h2>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <Controller>
        <Scene
          duration="50%"
          triggerElement=".infoContainer"
          indicators={true}
        >
        <Timeline wrapper={<div className="contentContainer" />}>
            <Tween
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              <div className="infoContainer col">
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia magnam ea magni itaque maxime. Cupiditate odio possimus laboriosam eaque, eum voluptas dolorem sunt quaerat ratione voluptatibus ut doloribus voluptatem.</p>
                <button>{props.buttonText}</button>
              </div>
            </Tween>

            <Tween
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              <div className="imgContainer col">
                <img src={props.image} alt="showcase image" />
              </div>
            </Tween>

          </Timeline>
        </Scene>
      </Controller>
  </StyledShowcaseSection>
);

ShowcaseSection.propTypes = {
  // bla: PropTypes.string,
};

ShowcaseSection.defaultProps = {
  // bla: 'test',
};

export default ShowcaseSection;
