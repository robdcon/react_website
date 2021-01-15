import styled from 'styled-components';
import customCursor from '../../assets/cursors/custom-cursor.png';

export const StyledParallaxSection = styled.section `
 min-height:100vh;
 width:100vw;
 padding: 10vh 0;
 background-color:#000;
 position:relative;
 overflow:hidden;
 cursor: url(${customCursor}), auto;
`;

export const StyledParallaxContent = styled.div`
position: relative;
height:100%;
z-index:2;
`;

export const StyledParallaxImage = styled.div`
position:absolute;
top:0;
height:200%;
width:100%;
z-index:1;
background-color:#000;
background-image: url(${props => props.image});
background-size:100%;
`;

export const StyledFlexBox = styled.div `
display:flex;
flex-direction: ${props => props.column ? 'column' : 'row'};
justify-content: space-around;
align-items:center;
`;

export const Overlay = styled.div`
width:100%;
height:100%;
background-color: ${props => props.color}
opacity: 0.5;
`;
