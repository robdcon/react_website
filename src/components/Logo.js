import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {media} from '../utils/media';

const StyledLogo = styled.div`

    font-family:${props => props.theme.global.fontFamily};
    letter-spacing:3px;
    display:none;
    ${media.handheld`display:block`}
`;

const Logo = (props) => {
    return(
        <StyledLogo>
            <Link to="/">
            {
                (props.image) ?
                (
                    <img src={props.src} alt={props.alt} />
                ) : props.text
            }
            </Link>
        </StyledLogo>     
    )
}

export default Logo;