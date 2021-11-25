import styled from 'styled-components';
import {media} from '../../utils/media';

export const NavigationWrapper = styled.nav`
    width: 100%;
    min-height:100vh;
    min-width: 100vw;
    z-index: 999;
    position:absolute;
    top:-100vh;
    left:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: #000;

    &.navigation--expanded-true {
        top: 0;
    }

    ${media.desktop`
        min-height:100%;
        min-width: auto;
        top: 0;
        right: 0;
        flex-direction: row;
        background-color: transparent;
    `}

`;

export const NavigationListItem = styled.li`
    list-style: none;
    padding: 1.6rem;
    font-size: 1.5em;
    text-transform: uppercase;
    ${media.tablet`font-size:1.25em;`}
    ${media.handheld`font-size:1.15em;`}
`;
