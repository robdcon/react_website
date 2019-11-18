

import React, { Component } from 'react';
import FormGroup from '../components/FormGroup'
import {withFormik, Field} from 'formik'
import TweenLite from 'gsap'
import styled from 'styled-components'

const StyledForm = styled.div` 

    width:100%;
    &h2{text-align:center;}
    

`

const Confirmation = styled.div`

    width:100%;
    height:100%;
    disply:flex;
    align-items:center;
    justify-content:center;
    h2, p
    {
        text-align:center;
        color:#fff;
    }


`

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

class DynamicContactForm extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            formFields:fields.sections[0],
            fieldIndex:0,
            name:"",
            email:"",
            message:""
        }
    }

    handleChange = (e) =>
    {
        console.log(e)
        let fieldName = e.target.name
        let value = e.target.value
        this.setState((prevState, props) => {

           return {

            userInput:
            {
                 ...prevState.userInput,
                [fieldName]:value
            }


           } 
        })  
    }

    handleKeypress = (e) =>
    {
        console.log(e)
        const key = e.which || e.keyCode
        if (key === 13) 
        {
            this.incrementIndex()
        }
    }

    incrementIndex = () =>
    {
        this.setState((prevState, props)=>
        {
            return {fieldIndex: prevState.fieldIndex + 1}
        })
    }

    animateFields()
	{
		
		console.log(this.myElements)
		TweenLite.staggerFrom('[data-animate]', .5, {y:'100px', opacity:0}, .05)
		// this.setState({

		// 	animateOptions:false
		// })

		
	}

    render() 
    {
      return (
       
            <StyledForm className="dynamic-contact-form">

               {
                   (this.state.fieldIndex < this.state.formFields.length) ?
                   (
                    
                    (this.state.formFields).map((field) =>
                    {
                        return  <FormGroup
                        data-animate
                        {...field}
                        name={field.name}
                        onChange={(e) => this.handleChange(e)}
                        onKeyPress= { this.handleKeypress }
                        id={field.name}
                        placeholder={field.placeholder}
                        value={field.value}
                    />
                        
                    })
                   
                      
                

                   ) : 

                   (
                     <Confirmation message={"Thanks for the information!"} >
                         <h2>Thanks for getting in touch!</h2>
                         <p>Ill get back to you as soon as possible.</p>
                    </Confirmation>
                   )
               } 
               
             

              
              
            </StyledForm>       
      )
    }
  }
  
  export default DynamicContactForm;

