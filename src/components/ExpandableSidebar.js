
import React, { Component } from 'react';
import styled from 'styled-components'
import ContactMailIcon from '@material-ui/icons/ContactMail';
const fields = ['name', 'email', 'message']
import DynamicContactForm from '../containers/DynamicContactForm'
import ContactForm from './ContactForm/ContactForm';

const StyledSidebar = styled.div`

    position:fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%;
    width: ${(props) => `${props.width}%`};
    margin-left: ${(props) => props.open ? 0 : `-${props.width}%`};
    background-color: #000000;
    z-index:9999;
    transition: margin .33s;

`

const StyledSection= styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    height: 100%;

`

const StyledNavButton = styled.div`

    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    top:25px;
    width:${(props) => props.btnWidth}px;
    height:${(props) => props.btnWidth}px;
    color:#fff;
    right: ${(props) =>  props.open ?  0 : `-${props.btnWidth}px`}
    margin-left: ${(props) => props.open ? 0 : "100%"};
    background-color: transparent;
    z-index:9999;
    transition: all .333s;
    cursor:pointer;
    
`

const StyledSidebarHeader = styled.div`

   width:100%;
   position:absolute;
   display:flex;
   justify-content:flex-end;
   align-items:center;
   top:0;
   left:0;
   height:50px;

`

const SidebarHeader = (props) => 
{
    return(

        <StyledSidebarHeader>
            {props.children}
        </StyledSidebarHeader>
    )
}

const NavButton = (props) =>
{
    return(
        <StyledNavButton btnWidth={props.btnWidth} open={props.open}>
           
            <ContactMailIcon style={{ color: '#fed136' }} onClick={props.handler}>

            </ContactMailIcon>
          
        </StyledNavButton>
    )
}

class ExpandableSidebar extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            open:false,
            width:100
        }
    }

    // useEffect(() => {
    //     if(props.open === true) {
    //       TweenMax.to(sidebar.current, .5, {top:0});
    //       TweenMax.staggerFromTo(navItems.current, .5, { opacity:0, y:100 }, { opacity:1, y:0, delay:.25 }, .125);
    //     } else {
    //       TweenMax.staggerFromTo(navItems.current, .35, { opacity:1, y:0 }, { opacity:0, y:-100 }, .125);
    //       TweenMax.to(sidebar.current, .5, {top:"-100%", delay:.35});
    //     }
    //   })

    toggle = () =>
    {
        this.setState((prevState) =>
        {
           return { open:!prevState.open}
        })
    }

    render() 
    {
      return (
            
        <div className="expandable-sidebar">
            
            <StyledSidebar open={this.state.open} width={this.state.width}>
                <StyledSection>
                    <SidebarHeader>
                        <NavButton handler={this.toggle} btnWidth="50" open={this.state.open}/>
                    </SidebarHeader>
                    <ContactForm />
                </StyledSection>
            </StyledSidebar>
            
        </div>
      )
    }
  }
  
  export default ExpandableSidebar;

