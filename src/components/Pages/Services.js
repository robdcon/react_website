import React, { Component } from 'react';
import SingleService from '../SingleService'
import Header from '../Header'
import image from '../../assets/web-background-dark-med-compression-1200.jpg'
import TweenComponent from '../TweenComponent'
import SectionReveal from '../SectionReveal'
import ServiceTween from '../ServiceTween'
import PrismaScreen from '../PrismaScreen'


const serviceList = 
[
  {
    title:"E-Commerce",
    description: "This is the first description",
    icon: "fa-shopping-cart"
  },
  {
    title:"Responsive Design",
    description: "This is the first description",
    icon: "fa-laptop"
  },
  {
    title:"Web Security",
    description: "This is the first description",
    icon: "fa-lock"
  }
]

class Services extends Component 
{
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
          <PrismaScreen />
          <section className="page-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">So what can I do for you?</h3>
                </div>
              </div>
              <ServiceTween>
             
              </ServiceTween>
            </div>
          </section>
          <SectionReveal></SectionReveal>
         
        </div>
      );
    }
  }
  
  export default Services;