import styled from 'styled-components';

export const StyledBackgroundImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: 100%;
    top: 0;
    left: 0;
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

export const StyledHeading = styled.h2`
    display: block;
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
