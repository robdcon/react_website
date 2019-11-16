
import React, { Component } from 'react';
import styled from 'styled-components'


const StyledSidebar = styled.div`

    position:absolute;
    height:100%;
    margin-left: ${(props) => props.open ? 0 : `-${props.width}`};
    background-color: #00000020;
    z-index:999;


`

class ExpandableSidebar extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            open:true,
            width:250
        }
    }

    toggle = () =>
    {
        this.setState((prevState, props) =>
        {
            return( {open:!prevState.open} )
        })
    }

    render() 
    {
      return (
       
       
            <div className="expandable-sidebar">
                <StyledSidebar open={this.state.open}>
                    <SidebarButton />
                    <section>
                        <div>
                            <h2>MENU</h2>
                            {this.props.children}
                        </div>
                    </section>
                </StyledSidebar>
            </div>  
             
      )
    }
  }
  
  export default ExpandableSidebar;

