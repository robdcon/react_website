import styled from 'styled-components';
import { media } from '../../utils/media';

export const StyledCollapsableNav = styled.nav`

    display:flex;
    justify-content: space-between;
    align-items:center;
    height:100px;
    background-color: transparent;
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    padding-left: 60px;

`;

export const StyledNavList = styled.ul`
    display:flex;
    flex: row space-between center;
    li { list-style:none;

        a {
            text-decoration:none;
            cursor:pointer;
        }
    }
    font-size:.75em;
    ${media.desktop`font-size:1em;`}
    margin:0;
`;

export const StyledResponsiveDiv = styled.div`

    display:none;
    ${media.tablet`display:block;`}

`;