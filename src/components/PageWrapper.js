import React, {Component} from 'react';
import CollapsableNav from './CollapsableNav';
import CollapsableNavMenu from './CollapsableNavMenu';
import Navigation from './Navigation';
import NavBar from './NavBar';
import {pages} from '../utils/nav-config.js';
import Footer from './Footer';


export default class PageWrapper extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            menuOpen:false
        }
    }

    toggleMenu = () =>
    {
        this.setState((prevState) =>
        ({
            menuOpen: !prevState.menuOpen
        }))
    }

    render()
    {
        return(

            <div>
                <Navigation pages={pages} open={this.state.menuOpen} toggleMenu={() => {this.toggleMenu()}}></Navigation>
                <NavBar toggleMenu={() => {this.toggleMenu()}} collapsed={this.state.menuOpen}/>
                
                    {this.props.children}
              
                <Footer />
            </div>
        )

    }

}