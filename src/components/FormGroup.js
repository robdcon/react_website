

import React, { Component } from 'react';
import styled from 'styled-components';
import {media} from '../utils/media'



const StyledLabel = styled.label`

    font-size: 1em;
    color: #ffffff70;

`

const StyledInput = styled.input`

    width: 90%;
    padding: 0.5em;
    font-size: 0.8rem;

    ${media.desktop`

        width: 100%;
        padding: 1.5em;
        font-size: 1.5rem;
    
    `}


`

const StyledTextArea = styled.textarea`

    width: 90%;
    padding: 0.5em;
    font-size: 0.8rem;

    ${media.desktop`
    
    width: 100%;
    padding: 1.5em;
    font-size: 1.5rem;

`}


`

const StyledField = styled.div`

    width: 100%;
    margin: 0 auto;

`
class FormGroup extends Component 
{
    render() 
    {
      return (
       
            <StyledField className="StyledField form-group">
                <StyledLabel htmlFor={this.props.name}>{this.props.label}</StyledLabel>
                {  
                ( this.props.type ) ? 
                ( 
                    <StyledInput 
                            className="form-control" 
                            id={this.props.name} 
                            type={this.props.type}
                            placeholder={this.props.placeholder}
                            required={this.props.required} 
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onKeyPress={this.props.onKeyPress}
                            onBlur={this.props.onBlur}
                            
                            
                        />
                    )
                    :
                    (
                        <StyledTextArea 
                            className="form-control" 
                            id={this.props.name} 
                            type="textarea"
                            placeholder={this.props.placeholder}
                            required={this.props.required} 
                            name={this.props.name}
                            onChange={this.props.onChange}
                            onKeyPress={this.props.onKeyPress}
                            onBlur={this.props.onBlur}
                           
                        />
                    )
                    
                }
                <p className="help-block text-danger">

                    {(this.props.touched && this.props.errors) &&

                        <span>This field is required</span>
                    
                    }
                </p>
            </StyledField>       
      )
    }
  }
  
  export default FormGroup;

