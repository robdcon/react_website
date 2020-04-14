import styled from 'styled-components';

export const SpacerSection = styled.section`

height:100vh;

`;

export const StyledShowcaseSection = styled.div`
 .contentContainer {
     display: flex;
     height:100vh;
     width:100vw;
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
     }
 }
 h2 {
     position: absolute;
    font-size: 15em;
    opacity: .025;
 }

`;
