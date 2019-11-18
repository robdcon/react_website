import React, { Component } from 'react';
import Header from '../Header'
import image from '../../assets/header-bg.jpg'
import FormGroup from '../FormGroup'
import {withFormik, Field} from 'formik'

const fields =
{
  sections:
  [
    [ // col 1
      {
       
        name:"name",
        placeholder:"Name",
        required:"required",
        errorMessage:"This field is required",
        value:"name",
        type:"text"
      },
      {
       
        name:"email",
        placeholder:"Email",
        required:"required",
        errorMessage:"This field is required",
        value:"email",
        type:"text"
      },
      {
       
        name:"phone",
        placeholder:"Phone",
        required:"required",
        errorMessage:"This field is required",
        value:"phone",
        type:"text"
      }
    ],
    [ // col 2
      {
       
        name:"message",
        placeholder:"Message",
        required:"trequired" ,
        errorMessage:"This field is required",
        value:"message",
        type:"textarea"
      }
    ]
  ]
}



class Contact extends Component
{

    

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
                    <form id="contactForm" name="sentMessage" onSubmit={this.props.handleSubmit}>
                      <div className="row">
                          {
                            fields.sections.map((section, sectionIndex) =>
                            {
                              return(

                                <div className="col-md-6" key={sectionIndex}>

                                  {
                                    section.map((field, i) =>                            
                                    {
                                     return <FormGroup

                                     {...field}
                                      key={i}
                                      value={this.props.values[field.name]}
                                      name={field.name}
                                      onChange={this.props.handleChange}
                                      onBlur={this.props.handleBlur}
                                      touched={this.props.touched[field.name]}
                                      errors={this.props.errors[field.name]}
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
                          <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit" onClick={this.sendForm}>Send Message</button>
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
  
  export default withFormik({

    mapPropsToValues: () =>
   ({
      name:'',
      email:'',
      phone:'',
      message:''
    }),
    validate: values => 
    {
      const errors = {}
      Object.keys(values).map((v) => 
      {
        if(!values[v])
        {
          errors[v] = "Required Field"
        }
      })

      return errors
    },

    handleSubmit: (values, {setSubmitting}) =>
    {
      const formValues = JSON.stringify(values)
      console.log('Form Submitted: ', formValues )
    }
    

  })(Contact);