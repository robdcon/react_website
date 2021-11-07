import styled from 'styled-components';

export const Card = styled.div`
 display: flex;
`;

export const CardHeading = styled.div`
    width:100%;
    height: 100%;
    padding: ${props => props.theme.global.cardPadding};
    margin: ${props => props.theme.global.cardMargin};
    background: ${props => props.theme.global.cardBackground};
`;

export const CardContent = styled.p`
 width: 100%;

`;

export const CardButton = styled.button`
 ${props => props.theme.global.buttonStyles};
`;