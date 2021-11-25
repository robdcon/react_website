import styled from 'styled-components';
import { spacing } from '../../utils/spacing';

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({theme}) => spacing(theme.spacing, 2)};
    z-index: 999999999;
`;
