import styled from 'styled-components'

const StyledCollapsableNav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:100px;
    background-color: transparent;
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    padding-left: 60px;
`;

export default StyledCollapsableNav