import React, { Component } from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

const StyledMenuButton = styled.div`

    cursor:pointer;

`
const MenuButton = (props) => 
{
    return(

        <StyledMenuButton>
            <MenuIcon onClick={() => {props.toggleMenu()}} style={{ color: '#fed136' }} />
        </StyledMenuButton>

    )
}

export default MenuButton