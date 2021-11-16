import React, { Fragment, useState } from 'react';
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import {StyledForm, Input, Option, Select, StyledCheckbox, SubmitButton} from './ContactForm.styles';
import Axios from 'axios';
import { useEffect } from 'react';

const options = [
  {
    name: "Please select a service",
    value: ''
  },
  {
    name: "Web Design",
    value: 'Web Design'
  },
  {
    name: "Web Development",
    value: 'Web Development'
  },
  {
    name: "SEO",
    value: 'SEO'
  }
]

async function sendFormData(data, callback) {
  Axios.post('https://robdcon.co.uk/mailer/sendmail.php', data).then(res => {
    console.log(res);
    callback(res.data);
  });
}

const CustomSelect = ({...props}) => {
  const [field] = useField(props);
  return (
    <Fragment>
      <Select {...field} {...props} className={props.value.length > 0 ? '' : 'untouched'}>
      {
          options.map((option, i) => {
          return(
            <Option key={i} value={option.value}>{option.name}</Option>
          )
        })
      }
      </Select>
    </Fragment>
  )
}

const Checkbox = ({...props}) => {
  const [field] = useField(props);
  return (
    <StyledCheckbox className="label--custom">{props.label}
        <input className="checkbox--native" type="checkbox" {...field} {...props} />
        <div className="checkbox--custom"></div>
    </StyledCheckbox>
  )
}

const fields =
{
  sections:
  [
    [ // col 1
      {
        name:"name",
        label:"So, what should we call you?",
        placeholder:"Name",
        // required:"required",
        // errorMessage:"This field is required",
        value:"",
        type:"text"
      },
      {
        name:"email",
        label:"Whats your email address?",
        placeholder:"Email",
        // required:"required",
        // errorMessage:"This field is required",
        value:"",
        type:"text"
      },
      {
        name:"message",
        label:"How can we help?",
        placeholder:"Message",
        // required:"required",
        // errorMessage:"This field is required",
        value:"",
        type:"textarea"
      }
    ]
  ]
}

const ConfirmationMessage = ({children}) => {
  return (
    <div>{children}</div>
  )
}

const ContactForm = ({children, ...props}) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    confirmed === false ? 
    <Formik
      initialValues={{ 
        name: '',
        email: '',
        message: '',
        dropdown: ''
      }}
      isSubmitting
      validationSchema={Yup.object({
        name: Yup.string()
        .min(2, 'Please enter a valid first name')
        .max(15, "Name must be less than 15 characters in length")
        .required("This field is required"),
        email: Yup.string()
        .email("Please enter a valid email")
        .required("This field is required"),
        message: Yup.string()
        .required("Please let me know how I can assist"),
        dropdown: Yup.string().required("This fields is required")

      })}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          const data = JSON.stringify(values, null, 2);
          sendFormData(data, setConfirmed);
          console.log('Submitting Data:', data);
          // setSubmitting(false);
        }, 3000);
      }}
    >
    {formik => (
      !formik.isSubmitting ? (
      <StyledForm className="form-wrapper">
        <Form className="contact-form">
          {
            fields.sections[0].map((field, i) => {
                return (
                  <Fragment key={i}>
                      <label htmlFor={field.name}></label>
                      <Field as={Input} name={field.name} type={field.type} placeholder={field.placeholder} />
                      <ErrorMessage name={field.name}>{msg => <p className="error">{msg}</p>}</ErrorMessage>
                  </Fragment>
                )          
            })
          }

          <Field as={CustomSelect} name="dropdown" />
          <ErrorMessage name='dropdown'>{msg => <p className="error">{msg}</p>}</ErrorMessage>
          
          {/* <fieldset>
            <legend>What services do you need?</legend>
            <Field as={Checkbox} name="option-1" label="Option 1" />
            <Field as={Checkbox} name="option-2" label="Option 2" />
            <Field as={Checkbox} name="option-3" label="Option 3" />
          </fieldset> */}
          
          <Field as={SubmitButton} type="submit" value="Submit" touched={formik.touched['dropdown']} submitting={formik.isSubmitting} />
        </Form>
      </StyledForm>
      ) : (
        <ConfirmationMessage>Sending message...</ConfirmationMessage>
      )
    )}
    </Formik> :
    <ConfirmationMessage>{confirmed}</ConfirmationMessage>
  )
}
  
export default ContactForm;

