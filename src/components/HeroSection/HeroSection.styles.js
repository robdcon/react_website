import styled from 'styled-components';
import { media } from '../../utils/media';

export const StyledBackgroundImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url(${props => props.smallBgImage});
    ${media.handheld`background-image: url(${props => props.largeBgImage});`}
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 20%;
`;

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0,0,0,0);
`;

export const StyledHeroBanner = styled.section`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
`;

export const StyledHeading = styled.h1`
    display: block;
    ${'' /* text-transform: uppercase; */}
    text-align: center;
    ${'' /* font-family: ${props => props.theme.global.primaryFont}; */}
    ${'' /* font-weight: 600; */}
    color: ${props => props.theme.colors.primaryColor};
    font-size: ${props => props.theme.global.h3FontSize};
    ${media.handheld`font-size:${props => props.theme.global.h2FontSize};`}
`;

export const StyledSubheading = styled.p`
    display: inline-block;
    text-align: center;
    font-family: ${props => props.theme.global.secondaryFont};
    ${'' /* font-weight: 300; */}
    max-width: ${props => props.theme.global.maxTextWidth};
    line-height: ${props => props.theme.global.subheadingLineHeight};
    color: ${props => props.theme.colors.secondaryColor};
    font-size: ${props => props.theme.global.h5FontSize};
    ${media.handheld`font-size:${props => props.theme.global.h4FontSize};`}
`;

export const StyledDescription = styled.p`
    display: inline-block;
    text-align: center;
    font-family: ${props => props.theme.global.secondaryFont};
    max-width: ${props => props.theme.global.maxTextWidth};
    color: ${props => props.theme.colors.secondaryColor};
    font-size: ${props => props.theme.global.h6FontSize};
    ${media.handheld`font-size:${props => props.theme.global.h5FontSize};`}
`;

export const StyledButton = styled.button`
    font-family: ${props => props.theme.global.secondaryFont};
    background-color: #fff;
    color: #000;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 10px 24px;
    ${'' /* ${props => props.theme.global.buttonStyles} */}
`;

export const StyledImageContainer = styled.div`
    position: absolute;
    ${props => props.left && 'left: 10%'}
    ${props => props.right && 'right: 10%'}

    ${props => props.image && `background-image: url(${props.image})`}; 
    background-size: 100%;
    background-repeat: no-repeat;
    width: 90vw;
    height: 40vh;
    ${'' /* border: 1px solid #000; */}
    bottom: 5%;
`;
