import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import StyledCollapsableNav from '../styled/StyledCollapsableNav'
import CollapsableNavMenu from './CollapsableNavMenu'
import Logo from './Logo'
import MenuButton from './MenuButton';



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

                <StyledCollapsableNav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">

                    <div className="container">
                        
                        <Logo text="ROB CONNOLLY DESIGN" />
                        {
                            (this.state.collapsed) ?
                            (
                            
                               <MenuButton toggleMenu={this.props.toggleMenu} />
                            
                            ) :

                            (
                            
                            <div className="collapse navbar-collapse" id="navbarResponsive">

                                <ul className="navbar-nav text-uppercase ml-auto">
                                {
                                    pages.map(page => 
                                    {
                                        return   <li key={page.title} className="nav-item"><Link className="nav-link js-scroll-trigger" to={page.path}>{page.title}</Link></li>
                                    })
                                }
                                </ul>

                            </div>
                            
                            )

                        }

                    </div>

                </StyledCollapsableNav>
             
            </div>       
      )
    }
  }
  
  export default CollapsableNav;

