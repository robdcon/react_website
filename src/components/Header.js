import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import StyledHeader from '../styled/StyledHeader'

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
                <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">{this.props.title}</div>
                    <div className="intro-heading text-uppercase">{this.props.subtitle}</div>
                    {this.props.showBtn && <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/services">{this.props.btnText}</Link>}
                </div>
                </div>
            </header>
          </StyledHeader>
      );
    }
  }
  
  export default Header;