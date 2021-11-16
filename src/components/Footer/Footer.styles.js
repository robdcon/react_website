import styled from 'styled-components';
import { media } from '../../utils/media';

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #000;
    color: ${props => props.theme.colors.primaryColor};
    font-family: ${props => props.theme.global.primaryFont};
    font-weight: 300;

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
        text-align: center;
        color: ${props => props.theme.colors.greyLightText};
        margin: 0.25em;
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
    padding: 16px 0;
    background-color: #000;

    @media(max-width: 800px) {
        flex-direction: column;
    }

    ${media.handheld`padding: 16px 24px`};

    h2 {
        margin-bottom: 24px;
        color: #fff;
    }
`;
