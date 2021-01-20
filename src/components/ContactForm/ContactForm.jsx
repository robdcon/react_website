import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import FormGroup from '../../components/FormGroup'
import {withFormik, Field} from 'formik'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import {StyledFlexBox} from '../../styled/StyledFlexBox';
import {StyledForm, ConfirmationStyles} from './ContactForm.styles';

const fields =
{
  sections:
  [
    [ // col 1
      {
       
        name:"name",
        label:"What should we call you?",
        placeholder:"Name",
        required:"required",
        errorMessage:"This field is required",
        value:"",
        type:"text"
      },
      {
       
        name:"email",
        label:"Whats your email address?",
        placeholder:"Email",
        required:"required",
        errorMessage:"This field is required",
        value:"",
        type:"text"
      },
      {
       
        name:"message",
        label:"How can we help?",
        placeholder:"Message",
        required:"required",
        errorMessage:"This field is required",
        value:"",
        type:"textarea"
      }
    ]
  ]
}

const ContactForm = (props) =>
{
    
  const [formFields, setFormFields] = useState(fields.sections[0]);
  const [fieldIndex, setFieldIndex] = useState(0);
  const [userInput, setUserInput] = useState({});

  const handleChange = (e) =>
  {
      console.log(e)
      let fieldName = e.target.name
      let value = e.target.value
      setUserInput({...userInput, [fieldName]:value});
  }

  const resetForm = () => {
    this.setState({
      fieldIndex:0

    })
    this.props.toggle()
  }

   
    return (
      
      <StyledForm className="StyledForm dynamic-contact-form">

          {
              (fieldIndex < formFields.length) ? (
                formFields.map((field, i) => {
                    return  <FormGroup
                    key={i}
                    data-animate
                    {...field}
                    name={field.name}
                    onChange={(e) => handleChange(e)}
                    id={field.name}
                    placeholder={field.placeholder}
                    value={field.value}
                />            
              })
            ) : (
              <StyledFlexBox direction="column" message={"Thanks for the information!"} >
                  <h2>Thanks for getting in touch!</h2>
                  <p>I'll get back to you as soon as possible.</p>
                  <CancelPresentationIcon style={{color: `${props => props.theme.colors.primaryColor}`}}/>
              </StyledFlexBox>
            )
          }   
      </StyledForm>       
    )
  }
  
  export default ContactForm;

