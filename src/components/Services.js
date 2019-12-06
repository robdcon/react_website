import React, { Component } from 'react';
import styled from 'styled-components'
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';

const TweenComponent = () => (
    <Tween from={{ x: '100px', rotation: -360 }}>
      <div>This element gets tweened</div>
    </Tween>
  );

  const TimelineComponent = () => (
    <Timeline
      target={
        <div>Target element which will be visible and gets tweened</div>
      }
    >
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
      <Tween to={{ x: '50px' }} />
    </Timeline>
  );

const StyledServices = styled.section`

    width:100%;
    height:100vh;
    min-height:600px;
    background-color: #eee;


`

class Services extends Component 
{
    render() 
    {
      return (
            <StyledServices>
                <div className="Services">
                    <TweenComponent></TweenComponent>
                     {this.props.children}
                
                </div>      
            </StyledServices> 
      )
    }
  }
  
  export default Services;

