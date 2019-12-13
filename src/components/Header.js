import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import StyledHeader from '../styled/StyledHeader'
import StyledFlexContainer from '../styled/StyledFlexContainer'

class Header extends Component 
{
    constructor(props)
    {
        super(props)
    }
    render() {
      return (

          <StyledHeader>
            <header className="masthead" style={{backgroundImage:"url(" + this.props.image +")"}}>
                <StyledFlexContainer className="container">
                      <h1 className="header-title">{this.props.title}</h1>
                      <p className="header-tagline text-uppercase">{this.props.subtitle}</p>
                      {this.props.showBtn && <Link className="btn btn-primary btn-xl text-uppercase" to="/services">{this.props.btnText}</Link>}
                </StyledFlexContainer>
            </header>
          </StyledHeader>
      );
    }
  }
  
  export default Header;