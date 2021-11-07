import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #000;
    span {
        color: ${props => props.theme.colors.primaryColor};
    }
    a {
        text-decoration:none;
        cursor:pointer;
        color: ${props => props.theme.colors.primaryColor};
        transition: all .35s linear; 
        &:hover {
            color: ${props => props.theme.colors.lightText};
            transform: translateY(-5px);
        }
    }
    .footer__info {
        color: ${props => props.theme.colors.greyLightText}
    }
`;

export const StyledLinkList = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledFooterRow = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
    justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};
    padding: 16px 24px;
    background-color: #000;

    @media(max-width: 800px) {
        flex-direction: column;
    }
`;
