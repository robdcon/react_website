import React, { Component } from 'react';
import Header from '../Header'
// import image from '../../assets/web-background-dark-med-compression-1200.jpg'
import image from '../../assets/space-background.jpg';
import Sectionwipe from '../Sectionwipe'
import ParallaxSection from '../ParallaxSection'
import foreground from '../../assets/mountains/header-foreground.png'
import midground from '../../assets/mountains/header-midground.png'
import background from '../../assets/mountains/header-background.png'
import Stage from '../Stage';
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection';

class Home extends Component {
    render() {
      return (
        <div>
           <Header
            title="LAUNCH YOUR ONLINE PRESENCE!"
            subtitle="PREPARE FOR TAKE OFF HERE"
            btnText="CONTACT HQ" 
            showBtn={true}
            image={image}
           />
         
            <Stage />

            <ShowcaseSection title="innerspace" buttonText="Click Here" image={image}/>
         
        </div>
      );
    }
  }
  
  export default Home;