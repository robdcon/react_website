import styled from 'styled-components'
import {media} from '../utils/media'

const StyledResponsiveDiv = styled.div`

    ${media.handheld`display:none;`}

`

export default StyledResponsiveDiv