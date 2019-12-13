import React, { Component } from 'react';
import styled from 'styled-components'
// Animation
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import {Link} from 'react-router-dom'
import StyledListItem from '../styled/StyledListItem'


const StyledCollapsableNavMenu = styled.div`

    height:100%;
    width:100%;
    height:100vh;
    width:100vw;
    position:absolute;
    top:${(props) => (props.open) ? '0' : '-100%'};
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#000000;
    transition: top .5s ease-in-out;

`

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

class CollapsableNavMenu extends Component 
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            open:props.open
        }

    }

    render() 
    {
      return (
       
        <StyledCollapsableNavMenu open={this.props.open} className="CollapsableNavMenu">

            <ul>
            {
               (this.props.open) ?
               
               (<Tween
                duration={.5}
                staggerFrom={{
                    opacity: 0,
                    y:50
                  }}
                  staggerTo={{
                   opacity:1,
                   y:0
                  }}
                  stagger={0.15}
                  delay={.25}
                  
                >
                {
                    pages.map(page => 
                    (
                        <StyledListItem  key={page.title} className="custom-nav-item">
                              <Link onClick={() => {this.props.toggleMenu()}} className="custom-nav-link" to={page.path}>{page.title}</Link>
                        </StyledListItem>
                    ))
                }
                </Tween>) : (null)
                
            }
            </ul>
            
        </StyledCollapsableNavMenu>       
      )
    }
  }
  
  export default CollapsableNavMenu;

