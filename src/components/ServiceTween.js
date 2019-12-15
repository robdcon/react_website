import React, { Component } from 'react';
import styled from 'styled-components'
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import SingleService from './SingleService'

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

  const serviceList = 
  [
    {
      title:"Web Design",
      description: "This is the first description",
      icon: "fa-shopping-cart"
    },
    {
      title:"Graphic Design",
      description: "This is the first description",
      icon: "fa-laptop"
    },
    {
      title:"Web Development",
      description: "This is the first description",
      icon: "fa-lock"
    }
  ]

const StyledServiceTween = styled.div`

  width:100%;
  height:100vh;

`
const StyledServiceContainer = styled.div`

  display:flex;
  justify-content:center;
  width:100%;

`
class ServiceTween extends Component 
{
    render() 
    {
      return (
        <div className="ServiceTween">
          <StyledServiceTween>
            <Controller>
              <Scene
             
              duration='150%'
              pin={true}
              reverse={true}
              triggerHook="onLeave"
              indicators={{
                name:"service",
                colorStart: "purple",
                colorEnd: "orange",
                colorTrigger: "black"
              }}
              >
                <Timeline
                  wrapper={ <StyledServiceContainer className="StyledServiceContainer"/>}
                > 
                  <Tween
                    to={{
                      opacity:0
                    }}
                    stagger={0.15}
                  >
                   { 
                    serviceList.map((service, key) =>
                    {
                      return <SingleService 
                        title={service.title}
                        icon={service.icon}
                        description={service.description}
                        key={key}
                      />
                    })
                  }
                  </Tween>
                
                </Timeline>
      
              </Scene>
            </Controller> 
          </StyledServiceTween>
        </div>
      )
    }
  }
  
  export default ServiceTween;

