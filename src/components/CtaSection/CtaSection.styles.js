import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    padding: 60px 100px;
    background-color: ${props => props.theme.colors.backgroundColor};

    @media(max-width: 600px) {
        padding: 60px 15px;
    }
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
