import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from '../Header'
import image from '../../assets/web-background-dark-med-compression-1200.jpg'
// import TimelineLite from "gsap/all";
import { gsap} from 'gsap/dist/gsap';
import {CSSRulePlugin} from 'gsap/dist/CSSRulePlugin'
import {TimelineLite} from 'gsap/dist/gsap'
gsap.registerPlugin(CSSRulePlugin); 
import ServiceList from '../ServiceList'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import {StyledFlexBox, StyledFlexSection} from '../../styled/FlexContainers'
import Stage from '../Stage'

class Services extends Component 
{
  constructor(props)
  {
    super(props)
    this.serviceList = React.createRef()
    this.serviceTween = new TimelineLite({paused:true}) 
  }

  animateServices()
  {
    const tweenedServices = this.serviceList.current.getServices();
    this.serviceTween.staggerFrom(tweenedServices, 1, {opacity:'0', y:'100', onComplete:function(){console.log('Animation Complete: ', tweenedServices)} } , 0.25 )
  }

  componentDidMount()
  {
   //this.animateServices()
  }
    render() 
    {
      return (
        <div>
         
          <Header
            title="What can I do for you?"
            subtitle="Take a look at the services I offer..."
            btnText="HIRE ME" 
            showBtn={true}
            image={image}
          />
          <StyledFlexSection direction="column" className="StyledFlexSection">

            <StyledFlexBox className="StyledFlexBox" direction="column">
              <h2>SERVICES</h2>
              <p>How can I be of service...</p>
            </StyledFlexBox>
            
            
              
           
          </StyledFlexSection>
          <Stage className="Stage" />
         
        </div>
      );
    }
  }
  
  export default Services;