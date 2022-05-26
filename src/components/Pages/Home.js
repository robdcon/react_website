import React, { Fragment } from 'react';
import largeEarthImage from '../../assets/earth-from-space-desktop.jpg';
import smallEarthImage from '../../assets/earth-from-space-mobile.jpg';
import waterColourBg from '../../assets/water-colour-bg-blue.jpg';
import shayAndCallum from '../../assets/shay_and_callum.png';
import foregroundImg from '../../assets/mountains/header-foreground.png';
import mountains from '../../assets/mountains/mountains.jpg';
import CtaSection from '../CtaSection/CtaSection';
import { ThemeProvider } from "styled-components";
import Theme, {invertTheme} from '../../themes/Theme';
import HeroSection from '../HeroSection/HeroSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DevicesIcon from '@material-ui/icons/Devices';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FaqSection from '../FaqSection/FaqSection';
import ParallaxSection from '../ParallaxSection/ParallaxSection';

const services =
[
  {
    title: "Web Design",
    caption: "A good web design is not about something that just looks nice. It must be designed to work for your business and achieve your business goals.",
    icon: DevicesIcon
  },
  {
    title: "Seo",
    caption: "Search Engine Optimisation is vital if you want people to find your website online. There is no quick fix however, it takes time and know how. That's where we can help.",
    icon: FindInPageIcon
  },
  {
    title: "Web Development",
    caption: "If your website requires custom functionality or need's to be blazing fast, a custom development solution is available, built with the latest technologies",
    icon: DeveloperModeIcon
  }
]

const Home = () =>  {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <HeroSection 
            largeImage={waterColourBg}
            smallImage={waterColourBg}
            featureImageMobile={shayAndCallum}
            preheading="You cordially invited to"
            heading="Callum & Shay's Naming Ceremony"
            subheading="Oranmore Castle, Castle Rd, Innplot, Oranmore, Co. Galway, Ireland"
            description="June 18th - 1pm to 4.30pm"
            buttonText="RSVP" 
        />
      </ThemeProvider>
      {/* <ParallaxSection 
        // overlay={true}
        foreground={foregroundImg}
        background={mountains}
      /> */}
      {/* <CtaSection 
        heading="Welcome to Innerspace Digital"
        subheading="A one-stop-shop for all things web."
        description="Web Design | Web Development | SEO"
        buttonText="GET A FREE QUOTE"
      /> */}
      {/* <ThemeProvider theme={invertTheme}>
        <CtaSection
          heading="Web Design & Development"
          description={`Web design is not just about making something that looks nice. 
                    A good website is one that achieves it's purpose.
                    Boosting your business.`}
          darkTheme={true}
        />
      </ThemeProvider> */}
      {/* <ServicesSection heading="What do we do?" items={services} /> */}
    </Fragment>
  );
}
  
export default Home;