import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import StyledCollapsableNav from '../styled/StyledCollapsableNav'
import CollapsableNavMenu from './CollapsableNavMenu'
import Logo from './Logo'
import MenuButton from './MenuButton';
import StyledNavList from '../styled/StyledNavList'
import StyledResponsiveDiv from '../styled/StyledResponsiveDiv'



const pages = 
[
    {
        title:"Services",
        path:"/services"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Portfolio",
        path:"/portfolio"
    },
    {
        title:"Contact",
        path:"/contact"
    }
]


class CollapsableNav extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            collapsed:true
        }
    }

    render() 
    {
      return (
       
            <div className="nav">

                <StyledCollapsableNav className="StyledCollapsableNav navbar navbar-expand-lg navbar-dark fixed-top">
   
                        <Logo text="ROB CONNOLLY DESIGN" />

                        <StyledResponsiveDiv className="StyledResponsiveDiv">
                            
                            <StyledNavList className="StyledNavList text-uppercase" id="navbarResponsive">

                                
                                {
                                    pages.map(page => 
                                    {
                                        return   <li key={page.title} className="nav-item"><Link className="nav-link js-scroll-trigger" to={page.path}>{page.title}</Link></li>
                                    })
                                }
                               

                            </StyledNavList>

                        </StyledResponsiveDiv>

                    <MenuButton toggleMenu={this.props.toggleMenu} />

                </StyledCollapsableNav>


             
            </div>       
      )
    }
  }
  
  export default CollapsableNav;

