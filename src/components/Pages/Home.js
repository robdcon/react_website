import React, { Component } from 'react';
import Header from '../Header'
// import image from '../../assets/web-background-dark-med-compression-1200.jpg'
import image from '../../assets/space-background.jpg';
import Stage from '../Stage';
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import StyledPanel from '../../styled/StyledPanel';
import image1 from '../../assets/sites/site-01/desktop.jpg';
import image2 from '../../assets/sites/site-02/desktop.jpg';
import image3 from '../../assets/sites/site-03/desktop.jpg';
import TestComponent from '../TestComponent/TestComponent';

const showcases = [
 {
   title:"Showcase One",
   buttonText: "See Live View",
   image: image1
 },
 {
   title: "Showcase Two",
   buttonText: "See Live View",
   image: image2
 },
 {
   title: "Showcase Three",
   buttonText: "See Live View",
   image: image3
 }
];

class Home extends Component {
    render() {
      return (
        <div>
          <ParallaxSection image={image} >
               <Header
                title="LAUNCH YOUR ONLINE PRESENCE!"
                subtitle="PREPARE FOR TAKE OFF HERE"
                btnText="CONTACT HQ" 
                showBtn={true}
              />
          </ParallaxSection>
    
          <ServicesSection />
          
          {
            showcases.map((showcase, i) => {
              return  <ShowcaseSection 
                        key={i} 
                        title={showcase.title} 
                        buttonText={showcase.buttonText} 
                        image={showcase.image} />
            })
          } 
        </div>
      );
    }
  }
  
  export default Home;