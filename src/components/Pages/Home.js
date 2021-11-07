import React, { Fragment, Component } from 'react';
import Header from '../Header'
import image from '../../assets/space-background.jpg';
import earthImage from '../../assets/earth-from-space-desktop.jpg';
import earthImageMobile from '../../assets/earth-from-space-mobile.jpg';
import CtaSection from '../CtaSection/CtaSection';
import { ThemeProvider } from "styled-components";
import Theme, {invertTheme} from '../../themes/Theme';
import HeroSection from '../HeroSection/HeroSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DevicesIcon from '@material-ui/icons/Devices';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';

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
  // {
  //   title: "Customisation",
  //   caption: "Do you have an  existing site that you want to customise or re-vamp? Contact me to find out what's possible.",
  //   icon: BuildIcon
  // }
]

class Home extends Component {
    render() {
      return (
        <Fragment>

          <ThemeProvider theme={invertTheme}>
            <HeroSection 
                bgImage={earthImage}
                heading="Launch your online presence"
                subheading="Watch your business take off!"
                description="Web Design | Web Development | SEO"
                buttonText="Let's Get Started" 
            />
          </ThemeProvider>

          <CtaSection 
            heading="Welcome to Innerspace Digital"
            subheading="A one-stop-shop for all things web."
            description="Web Design | Web Development | SEO"
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
         
          <ServicesSection heading="What do we do?" items={services} />
          
        </Fragment>
      );
    }
  }
  
  export default Home;