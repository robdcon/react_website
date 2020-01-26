import styled from 'styled-components'
import {media} from '../utils/media'

const StyledResponsiveDiv = styled.div`

    display:none;
    ${media.tablet`display:block;`}

`

export default StyledResponsiveDiv