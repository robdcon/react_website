import React, { Component } from 'react';
import Header from '../Header'
import image from '../../assets/web-background-dark-med-compression-1200.jpg'
import Sectionwipe from '../Sectionwipe'
import ParallaxSection from '../ParallaxSection'
import foreground from '../../assets/mountains/header-foreground.png'
import midground from '../../assets/mountains/header-midground.png'
import background from '../../assets/mountains/header-background.png'

class Home extends Component {
    render() {
      return (
        <div>
           <Header
            title="Welcome To Our Studio!"
            subtitle="It's Nice To Meet You"
            btnText="Tell Me More" 
            showBtn={true}
            image={image}
           />

            <ParallaxSection
              foreground={foreground}
              midground={midground}
              background={background}
            >
           
            </ParallaxSection>
            
           <Sectionwipe>
            
           </Sectionwipe>
        </div>
      );
    }
  }
  
  export default Home;