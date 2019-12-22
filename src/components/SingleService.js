import React, { Component } from 'react';
import styled from 'styled-components'
import {StyledFlexBox} from '../styled/StyledFlexBox'

const StyledSingleService = styled.div`

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  text-align: center;
  

`
const SingleServiceContainer = styled.div`

  flex: 33%;

`
class SingleService extends Component 
{
    render() 
    {
      return (

        <div style={{flex:'33%'}} className="SingleService">
          <StyledFlexBox direction="column">
              <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
              </span>
              <h4 className="service-heading">{this.props.title}</h4>
              <p className="text-muted">{this.props.caption}</p>
          </StyledFlexBox>
        </div>
       
      );
    }
  }
  
  export default SingleService;