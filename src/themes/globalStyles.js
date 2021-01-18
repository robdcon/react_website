import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.body};
        
    }
    a {
        color: ${({theme}) => theme.colors.primaryColor};
        transition: all .35s ease-in-out;
        &:hover {
            color: ${({theme}) => theme.colors.lightText};
            transform: translateY(-5px);
            text-decoration:none;
        }
    }
`; 