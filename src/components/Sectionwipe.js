import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Panel from './Panel'

const SectionWipesStyled = styled.div`
  overflow: hidden;
  
`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
       <div><Panel bgColor={'blue'} heading="Web Design" /></div>
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