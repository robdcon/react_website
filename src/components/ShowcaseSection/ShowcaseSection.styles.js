import styled from 'styled-components';
import {media} from '../../utils/media';


export const SpacerSection = styled.section`

    height:100vh;

`;

export const StyledButton = styled.button`

    ${props => props.theme.buttonStyles}

`;

export const StyledShowcaseSection = styled.div`
    scroll-snap-align: start;
 .contentContainer {
     display: flex;
     flex-direction: column;
     height:100vh;
     width:100vw;
     ${media.handheld`
        flex-direction: row;
     `}
     div.col {
         flex-basis:50%;
         height:100%;
         display:flex;
         flex-direction:column;
         justify-content:center;
         align-items: center;
         padding:2em;
     }
     .imgContainer {
         background-image: transparent;
         overflow:hidden;
         max-width:100%;

         img {
             width:100%;
         }
     }
 }
 h2 {
    position: absolute;
    font-size: 10em;
    opacity: .025;
    ${media.handheld`
     font-size:15em;
    `}
 }

`;
