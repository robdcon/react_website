import React, { Component } from 'react';
import styled from 'styled-components'

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

        <SingleServiceContainer className="SingleService">
          <StyledSingleService>
              <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
              </span>
              <h4 className="service-heading">{this.props.title}</h4>
              <p className="text-muted">{this.props.caption}</p>
          </StyledSingleService>
        </SingleServiceContainer>
       
      );
    }
  }
  
  export default SingleService;