import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Logo from './Logo';
import StyledHeader from '../styled/StyledHeader'
import {StyledFlexBox} from '../styled/StyledFlexBox'
import ParallaxContainer from './ParallaxContainer';


class Header extends Component 
{
    constructor(props)
    {
        super(props)
    }
    render() {
      return (
            <StyledHeader className="StyledHeader masthead" style={{backgroundImage:"url(" + this.props.image +")"}}>
              <StyledFlexBox className="StyledFlexBox outer">
                <StyledFlexBox className="StyledFlexBox inner" direction="column">
                      <Logo />
                      <h1 className="header-title">{this.props.title}</h1>
                      <p className="header-tagline">{this.props.subtitle}</p>
                      {this.props.showBtn && <Link className="btn btn-primary btn-xl" to="/services">{this.props.btnText}</Link>}
                </StyledFlexBox>
              </StyledFlexBox>
            </StyledHeader>
      );
    }
  }
  
  export default Header;