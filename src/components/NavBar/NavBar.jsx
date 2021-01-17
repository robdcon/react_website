import React, { Component, useEffect, useState, useRef } from 'react';
import { StyledCollapsableNav, StyledNavList, StyledResponsiveDiv } from './NavBar.styles';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {gsap, TweenMax, TimelineMax} from "gsap";
import {Link} from 'react-router-dom'
import CollapsableNavMenu from '../CollapsableNavMenu'
import Logo from '../Logo'
import MenuButton from '../MenuButton';

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


const NavBar = (props) => {
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


NavBar.propTypes = {
  // bla: PropTypes.string,
};

NavBar.defaultProps = {
  // bla: 'test',
};

export default NavBar;
