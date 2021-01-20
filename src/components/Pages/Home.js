import React, { Fragment, Component } from 'react';
import Header from '../Header'
import image from '../../assets/space-background.jpg';
import earthImage from '../../assets/earth-from-space-desktop.jpg';
import earthImageMobile from '../../assets/earth-from-space-mobile.jpg';
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection';
import image1 from '../../assets/sites/site-01/desktop.jpg';
import image2 from '../../assets/sites/site-02/desktop.jpg';
import image3 from '../../assets/sites/site-03/desktop.jpg';
import CtaSection from '../CtaSection/CtaSection';
import { ThemeProvider } from "styled-components";
import Theme, {invertTheme} from '../../themes/Theme';
import HeroSection from '../HeroSection/HeroSection';
import FeatureSection from '../FeatureSection/FeatureSection';

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
        <Fragment>
        <ThemeProvider theme={invertTheme}>
          <HeroSection 
              bgImage={earthImage}
              heading="Launch your online presence"
              subheading="Watch your business take off!"
              description="Web Design | Web Development | SEO & Marketing"
              buttonText="Let's Get Started" 
          />
        </ThemeProvider>

        <FeatureSection 
          heading={`Heading`}
          tagline={`Lorem Ipsum is simply dummy text of the printing and typesetting industry`}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          image={image1}
        />

          {/* <ParallaxSection image={image} >
               <Header
                title="LAUNCH YOUR ONLINE PRESENCE!"
                subtitle="PREPARE FOR TAKE OFF HERE"
                btnText="CONTACT HQ" 
                showBtn={true}
              />
          </ParallaxSection> */}

          <CtaSection 
            heading="Welcome to Innerspace Digital"
            subheading="A one-stop-shop for all things web."
            description="Web Design | Web Development | SEO & Marketing"
            buttonText="GET A FREE QUOTE"
          />

          <ThemeProvider theme={invertTheme}>
            <CtaSection
              heading="Web Design & Development"
              description={`Web design is not just about making something that looks nice. 
                        A good website is one that achieves it's purpose.
                        Boosting your business.`}
              darkTheme={true}
            />
          </ThemeProvider>
          
         
          <div id="sectionWrapper">
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
        </Fragment>
      );
    }
  }
  
  export default Home;