import {createGlobalStyle} from 'styled-components';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratLite from '../assets/fonts/Montserrat-Light.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'MontserratLite';
        src: local('MontserratLite'),
        url(${MontserratLite}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('ttf');
        font-weight: 600;
        font-style: normal;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body {
        background-color: ${({theme}) => theme.body};
        color: #333333;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin-bottom: 16px;
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        font-size: 24px;
    }

    h1, h2 {
        font-family: 'Montserrat';
        text-align: center;
    }

    h3, h4, h5 {
        font-family: 'Montserrat';
        text-align: center;
    }

    p {
        font-family: 'Roboto', sans-serif;
    }

    a {
        font-family: 'Montserrat';
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
        min-width: 100%;
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