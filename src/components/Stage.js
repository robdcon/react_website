import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import {StyledFlexBox, StyledFlexWrapper} from '../styled/FlexContainers'
import {StyledDividerSection} from '../styled/StyledDividers'
import SingleService from './SingleService'

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
class Stage extends Component
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
        className="Stage"
          indicators={false} 
          duration={100}
          pin={false}
          offset={100}
        >
          <Timeline wrapper={<StyledFlexBox id="trigger" justify="space-around"  />}>
              
            <Tween
            
            staggerFrom={{
              opacity:0, 
              y:100
            }}
            staggerTo={{
              opacity:1,
              y:0
            }}
            stagger={0.15}
            
            >
            {
                services.map((service, i) =>
                {
                    return (

                      <StyledFlexWrapper key={i}>
                        <StyledFlexBox    className="service-item">
                            <div className="StyledSeviceContainer">
                                <SingleService 
                                title={service.title}
                                icon={service.icon}
                                description={service.description}
                                />
                            </div>
                        </StyledFlexBox>
                        <StyledDividerSection />
                      </StyledFlexWrapper> 
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

export default Stage