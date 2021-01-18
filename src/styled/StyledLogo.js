import styled from 'styled-components'
import {media} from '../utils/media'

const StyledLogo = styled.div`

    font-family:'Montserrat', sans-serif;
    color: {$props => props.theme.colors.primaryColor;
    letter-spacing:3px;
    display:none;
    ${media.handheld`display:block`}


`

export default StyledLogo