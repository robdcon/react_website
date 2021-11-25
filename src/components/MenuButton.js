import React from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import {media} from '../utils/media'

const StyledMenuButton = styled.div`
    cursor:pointer;
    display:inline-block;
    ${media.desktop`display:none;`}
    z-index: 99999999999999;
`;

const MenuButton = ({action}) => 
{
    return(
        <StyledMenuButton>
            <MenuIcon onClick={action} style={{ color: '#fed136' }} />
        </StyledMenuButton>
    )
}

export default MenuButton