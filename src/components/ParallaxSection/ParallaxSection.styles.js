import styled from 'styled-components';

export const StyledParallaxSection = styled.section `
 height:100vh;
 width:100vw;
 padding: 10vh 0;
 background-color:#000;
 position:relative;
 overflow:hidden;
`;

export const StyledParallaxContent = styled.div`
position: relative;
height:100%;
width:90%;
max-width:1080px;
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
