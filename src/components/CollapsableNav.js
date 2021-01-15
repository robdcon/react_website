import React, { Component, useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import StyledCollapsableNav from '../styled/StyledCollapsableNav'
import CollapsableNavMenu from './CollapsableNavMenu'
import Logo from './Logo'
import MenuButton from './MenuButton';
import StyledNavList from '../styled/StyledNavList'
import StyledResponsiveDiv from '../styled/StyledResponsiveDiv'



const pages = 
[
    // {
    //     title:"Services",
    //     path:"/services"
    // },
    {
        title:"About",
        path:"/about"
    },
    // {
    //     title:"Portfolio",
    //     path:"/portfolio"
    // },
    {
        title:"Contact",
        path:"/contact"
    }
]


const CollapsableNav = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const nav = useRef();
      return (
       
            <div className="nav" ref={nav}>

                <StyledCollapsableNav className="StyledCollapsableNav navbar navbar-expand-lg navbar-dark fixed-top">
   
                        <Logo text={`INNERSPACE`} />

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

                    <MenuButton toggleMenu={props.toggleMenu} />

                </StyledCollapsableNav>
            </div>       
      )
  }
  
  export default CollapsableNav;

