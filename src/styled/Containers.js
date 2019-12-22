import styled from 'styled-components'
import {media} from '../utils/media'


export const StyledSection = styled.section`

    width:100%;
    height:${(props) => {(props) ? props : "auto"}};
    padding:0;
    margin:0;

    `

export const StyledDiv = styled.div`

    position:relative;
    height:100%;
    width: ${(props) => props.width }%;
    ${media.handheld`width:100%;`}
    ${media.tablet`width:50%;`}
    ${media.desktop`width:${100/3};`}

`