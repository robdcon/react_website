import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.body};
        color: #333333;
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

    main {
        scroll-snap-type: y mandatory;
    }

    section {
        min-width: 100vh;
        padding: 50px 16px;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        @media(min-width: 600px) {
            padding: 50px 100px;
        }

    }

    ::placeholder {
        color: #aaa;
    }
`; 