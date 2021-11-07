import styled from 'styled-components';

export const StyledBackgroundImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: 100%;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0,0,0,0.1);
`;

export const StyledHeroBanner = styled.section`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
`;

export const StyledHeading = styled.h1`
    display: block;
    text-transform: uppercase;
    text-align: center;
    font-family: ${props => props.theme.global.primaryFont};
    font-size: ${props => props.theme.global.h2FontSize};
    font-weight: 600;
    color: ${props => props.theme.colors.primaryColor};
`;

export const StyledSubheading = styled.p`
    display: inline-block;
    text-align: center;
    font-family: ${props => props.theme.global.primaryFont};
    font-size: ${props => props.theme.global.h4FontSize};
    font-weight: 300;
    max-width: ${props => props.theme.global.maxTextWidth};
    line-height: ${props => props.theme.global.subheadingLineHeight}
    color: ${props => props.theme.colors.secondaryColor};
`;

export const StyledDescription = styled.p`
    display: inline-block;
    text-align:center;
    font-family: ${props => props.theme.global.secondaryFont};
    font-size: ${props => props.theme.global.h5FontSize};
    max-width: ${props => props.theme.global.maxTextWidth};
    color: ${props => props.theme.colors.secondaryColor};
`;

export const StyledButton = styled.button`
    ${props => props.theme.global.buttonStyles}
`;
