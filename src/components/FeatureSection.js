import React, {Component} from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import {StyledFlexBox} from '../styled/StyledFlexBox'
import SingleService from './SingleService'

const StyledSection = styled.section`

  width:100%;
  height:100vh;
  padding:3em;
  color:#f00;
  background-color:#00000050;

`
const StyledServiceContainer = styled.div`

  display:flex;
  justify-content:center;
  width:100%;

`
const services = 
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
class Feature extends Component
{
    constructor(props)
    {
        super(props)
        this.listItems = []
    }

    render()
    {
        return(

            <Controller className="Controller">
              <Scene
              className="Feature"
                triggerHook="onEnter"
               
                indicators={true} 
                offset={100} 
              >
                <Timeline wrapper={<StyledFlexBox id="trigger" direction="column" />}>
                   
                    <Tween
                    
                    staggerFrom={{
                        opacity:0, 
                        x:-1000
                    }}
                    staggerTo={{
                        opacity:1,
                        x:0
                    }}
                    stagger={0.15}
                    duration={1}
                    >
                    {
                        services.map((service, i) =>
                        {
                            return (
                                
                            <StyledServiceContainer  key={i} className="service-item" ref={div => this.serviceList[i] = div}>
                                <div className="StyledSeviceContainer">
                                    <FeatureText 
                                    title={service.title}
                                    icon={service.icon}
                                    description={service.description}
                                    />
                                </div>
                            </StyledServiceContainer>
                            )
                        })
                    }   
                    </Tween>
                </Timeline>
              </Scene>
            </Controller>
          )
        
    }
  
}

export default Feature