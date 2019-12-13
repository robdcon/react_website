import styled from 'styled-components'
import {media} from '../utils/media'

const StyledNavList = styled.ul`
    display:flex;
    flex: row space-between center;
    li
    {
        list-style:none;

        a
        {
            text-decoration:none;
            cursor:pointer;
        }

    }
    margin:0;

`
export default StyledNavList