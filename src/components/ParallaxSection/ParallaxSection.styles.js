import styled from 'styled-components';
import customCursor from '../../assets/cursors/custom-cursor.png';

export const StyledCanvas = styled.canvas`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const StyledParallaxSection = styled.section`
    height:800px;
    width:100vw;
    padding: 10vh 0;
    background-color:#000;
    position: relative;
    overflow:hidden;
    cursor: url(${customCursor}), auto;
    background-image: url(${props => props.background});
    background-size:auto 1000px;
    background-repeat: no-repeat;
`;

export const StyledParallaxContent = styled.div`
    position: relative;
    height:100%;
    z-index:2;
`;

export const StyledParallaxImage = styled.div`
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    z-index:1;
    background-image: url(${props => props.foreground});
    background-size:100%;
    background-position: bottom center;
    background-repeat: no-repeat;
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
