import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';

const StyledLabel = styled.label`
    font-size: 1.5em;
    color: #ffffff70;
`;

const StyledInput = styled.input`
    width: 90%;
    padding: 0.5em;
    font-size: 0.8rem;
    height: 50px;

    ${media.desktop`
        width: 100%;
        font-size: 1.15rem;
    `}
`;

const StyledTextArea = styled.textarea`
    width: 90%;
    padding: 0.5em;
    font-size: 0.8rem;
    min-height:100px;

    ${media.desktop`
        width: 100%;
        font-size: 1.15rem;
    `}
`;

const StyledField = styled.div`

    width: 100%;
    margin: 0 auto;
`;

const FormGroup = ({name, label, type, placeholder, onChange, onBlur, touched, errors}) =>
{

    console.log(`Name: ${name} , Errors ${errors}`)
    return (
    
        <StyledField className="StyledField form-group">
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
            {  
                ( type === 'textarea' ) ? ( 
                    
                    <StyledTextArea 
                            className="form-control" 
                            id={name} 
                            type="textarea"
                            placeholder={placeholder}
                            name={name}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    
                    ) : (
                        <StyledInput 
                            className="form-control" 
                            id={name} 
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            onChange={onChange}
                            onBlur={onBlur}  
                        />
                    )
                }
            <p className="help-block text-danger">

                {(errors && touched) &&
                    <span>{errors}</span>
                }
            </p>
        </StyledField>       
    );
  }
  
  export default FormGroup;

