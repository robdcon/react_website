
import React, { Component } from 'react';
import styled from 'styled-components'
import {IoMdMenu} from 'react-icons/io'




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
    top:1em;
    width:50px;
    height:50px;
    color:#fff;
    right: ${(props) =>  props.open ?  0 : `-50px`}
    margin-left: ${(props) => props.open ? 0 : "100px"};
    background-color: transparent;
    z-index:9999;
    transition: all .333s;
    cursor:pointer;
    


`
const NavButton = (props) =>
{
    return(
        <StyledNavButton width={props.width} open={props.open}>
           
            <span className="fa-stack fa-1x" onClick={props.handler}>
                
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className={`fas fa-plus fa-stack-1x fa-1x`}></i> 
               
                    {/* <IoMdMenu size={"50px"} /> */}
            </span>
          
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

    toggle = () =>
    {
        console.log("toggle")
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
                        <NavButton handler={this.toggle} width={this.state.width} open={this.state.open}/>
                       
                            {this.props.children}
                       
                    </StyledSection>
                </StyledSidebar>
            </div>  
             
      )
    }
  }
  
  export default ExpandableSidebar;

