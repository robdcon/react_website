import React, { Component } from 'react';
import Header from '../Header'
// import image from '../../assets/web-background-dark-med-compression-1200.jpg'
import image from '../../assets/space-background.jpg';
import Stage from '../Stage';
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import StyledPanel from '../../styled/StyledPanel';

class Home extends Component {
    render() {
      return (
        <div>
  
          <ParallaxSection image={image}>
               <Header
                title="LAUNCH YOUR ONLINE PRESENCE!"
                subtitle="PREPARE FOR TAKE OFF HERE"
                btnText="CONTACT HQ" 
                showBtn={true}
              />
          </ParallaxSection>      
          <ServicesSection />
         
        </div>
      );
    }
  }
  
  export default Home;