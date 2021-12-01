import styled from 'styled-components';

export const Card = styled.div`
 display: flex;
`;

export const CardHeading = styled.div`
    width:100%;
    height: 100%;
    padding: ${({theme}) => theme.global.cardPadding};
    margin: ${({theme}) => theme.global.cardMargin};
    background: ${({theme}) => theme.global.cardBackground};
`;

export const CardContent = styled.p`
 width: 100%;
`;

export const CardButton = styled.button`
 ${props => props.theme.global.buttonStyles};
`;