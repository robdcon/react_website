import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    padding: 60px 100px;
    background-color: ${props => props.theme.colors.backgroundColor};

    @media(max-width: 600px) {
        padding: 60px 15px;
    }
`;

export const StyledHeading = styled.h2`
    display: block;
    text-align: center;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${props => props.theme.h2FontSize};
    font-weight: 600;
    color: ${props => props.theme.colors.primaryColor};
`;

export const StyledSubheading = styled.p`
    display: inline-block;
    text-align: center;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${props => props.theme.h4FontSize};
    font-weight: 300;
    max-width: ${props => props.theme.maxTextWidth};
    line-height: ${props => props.theme.subheadingLineHeight}
    color: ${props => props.theme.colors.secondaryColor};
`;

export const StyledDescription = styled.p`
    display: inline-block;
    text-align:center;
    font-family: ${props => props.theme.secondaryFont};
    font-size: ${props => props.theme.h5FontSize};
    max-width: ${props => props.theme.maxTextWidth};
    color: ${props => props.theme.colors.secondaryColor};
`;

export const StyledButton = styled.button`
    ${props => props.theme.buttonStyles}
`;
