import React, { Fragment } from 'react';
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import FormInput from '../../components/FormInput';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import {StyledForm, Input, Option, Select, StyledCheckbox} from './ContactForm.styles';
import Axios from 'axios';

const options = [
  {
    name: "Please select",
    value: ''
  },
  {
    name: "Option 1",
    value: 'option-1'
  },
  {
    name: "Option 2",
    value: 'option-2'
  },
  {
    name: "Option 3",
    value: 'option-3'
  }
]

const sendFormData = (data) => {
  Axios.post('https://robdcon.co.uk/mailer/sendmail.php', data);
}

const CustomSelect = ({...props}) => {
  const [field] = useField(props);
  return (
    <Fragment>
      <Select {...field} {...props} className={props.value.length > 0 ? '' : 'untouched'}>
      {
          options.map( (option, i) => {
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

const ContactForm = ({children, ...props}) => {
  return(
  <Formik
    initialValues={{ 
      name: '',
      email: '',
      message: '',
      dropdown: ''
    }}
    validationSchema={Yup.object({
      name: Yup.string()
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
        sendFormData(data);
        console.log('Submitting Data:', data);
      }, 400);
    }}
  >
  {formik => (
    <StyledForm className="StyledForm dynamic-contact-form">
      <Form>
        {
          fields.sections[0].map((field, i) => {
              return (
                <Fragment key={i}>
                    <label htmlFor={field.name}></label>
                    <Field as={Input} name={field.name} type={field.type} placeholder={field.placeholder} />
                    <ErrorMessage name={field.name} />
                </Fragment>
              )          
          })
        }

        <Field as={CustomSelect} name="dropdown" />
        <ErrorMessage name="dropdown" />

        <Field as={Checkbox} name="option-1" label="Option 1" />
        <Field as={Checkbox} name="option-2" label="Option 2" />
        <Field as={Checkbox} name="option-3" label="Option 3" />
        
        <FormInput type="submit" value="Submit" touched={formik.touched['dropdown']} />
        </Form>
    </StyledForm>
  )}
  </Formik>
  )
}
  
export default ContactForm;

