import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Panel from './Panel'
import TypeForm from './TypeForm'

const SectionWipesStyled = styled.div`
  overflow: hidden;
  
`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
       <div>
         <Panel bgColor={'blue'} heading="Web Design">
         </Panel>
       </div>
      </Scene>
      <Scene pin>
        <div><Panel bgColor={'green'} heading="Graphic Design" /></div>
      </Scene>
      <Scene pin>
        <div><Panel bgColor={'red'} heading="SEO" /></div>
      </Scene>
      <Scene pin>
       <div><Panel bgColor={'orange'} heading="Web Development" /></div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;