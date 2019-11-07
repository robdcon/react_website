import React, { Component } from 'react';
import Header from '../Header'
import image from '../../assets/header-bg.jpg'
import FormGroup from '../FormGroup'

const fields =
{
  sections:
  [
    [ // col 1
      {
       
        name:"name",
        placeholder:"Name",
        required:"true" ,
        errorMessage:"This field is required",
        value:"name",
        type:"text"
      },
      {
       
        name:"email",
        placeholder:"Email",
        required:"true" ,
        errorMessage:"This field is required",
        value:"email",
        type:"text"
      },
      {
       
        name:"phone",
        placeholder:"Phone",
        required:"true" ,
        errorMessage:"This field is required",
        value:"phone",
        type:"text"
      }
    ],
    [ // col 2
      {
       
        name:"message",
        placeholder:"Message",
        required:"true" ,
        errorMessage:"This field is required",
        value:"message",
        type:"textarea"
      }
    ]
  ]
}



class Contact extends Component
{
    constructor(props)
    {
      super(props)
      this.state =
      {
        name:"name",
        email:"email",
        phone:"phone",
        message: "message"
      }
    }
    render() 
    {
      return (
        <div>
           <Header
            title="Get in touch"
            subtitle="Book a free 15min consultation"
            btnText="BOOK NOW" 
            showBtn={true}
            image={image}
           />

          <section className="page-section" id="contact">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                      <div className="row">
                          {
                            fields.sections.map((section, sectionIndex) =>
                            {
                              return(

                                <div className="col-md-6" key={sectionIndex}>

                                  {
                                    section.map((item) =>                            
                                    {
                                     return <FormGroup
                                      id={item.name} 
                                      placeholder={item.placeholder}
                                      required={item.required} 
                                      errorMessage={item.error}
                                      value={item.name}
                                      type={item.type}
                                      onChange={(e) => {item.handleChange(e)}}
                                      />
                                    })
                                  }

                                </div>
                              )
                              
                             
                            })
                           
                          }
                        </div>
                    
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                          <div id="success"></div>
                          <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                        </div>
                     
                    </form>
                  </div>
                </div>
              </div>
            </section>
        </div>
      );
    }
  }
  
  export default Contact;