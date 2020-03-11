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
   
   
    <div className="contentContainer">
      <Scene
      
        duration="50%"
        triggerHook="onEnter"
        indicators={true}
      
      >
          <Timeline wrapper={<div className="infoContainer col" />}>
          <Tween
            from={{ opacity: .5 }}
            to={{ opacity: 1 }}
          >
              <h3>{props.title}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt mollitia magnam ea magni itaque maxime. Cupiditate odio possimus laboriosam eaque, eum voluptas dolorem sunt quaerat ratione voluptatibus ut doloribus voluptatem.</p>
              <button>{props.buttonText}</button>
          </Tween>
        </Timeline>
      </Scene>

      <Scene
        duration="50%"
        triggerHook="onEnter"
        indicators={true}
      >
          <Timeline wrapper={<div className="imgContainer col" />}>
          <Tween
          from={{opacity:.5}}
          to={{opacity:1}}
          >
              <img src={props.image} alt="showcase image" />
          </Tween>
        </Timeline>
      </Scene>
    </div>
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
