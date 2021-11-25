import React, {useRef } from 'react';
import { StyledCollapsableNav, StyledNavList, StyledResponsiveDiv } from './NavBar.styles';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {gsap} from "gsap";
gsap.registerPlugin(ScrollTrigger);
import {Link} from 'react-router-dom'
import Logo from '../Logo'
import MenuButton from '../MenuButton';

const NavBar = (props) => {
    const nav = useRef();
    return (   
        <div className="nav" ref={nav}>

            <StyledCollapsableNav className="StyledCollapsableNav navbar navbar-expand-lg navbar-dark fixed-top">

                <Logo text={`INNERSPACE`} />

                <StyledResponsiveDiv className="StyledResponsiveDiv">
                    
                    <StyledNavList className="StyledNavList text-uppercase" id="navbarResponsive">

                        
                        {
                            props.pages.map(page => 
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

export default NavBar;
