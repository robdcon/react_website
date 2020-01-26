import React, { Component } from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import {media} from '../utils/media'

const StyledMenuButton = styled.div`

    cursor:pointer;
    display:inline-block;
    ${media.tablet`display:none;`}
   

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