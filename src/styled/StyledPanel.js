import styled from 'styled-components'

const StyledPanel = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    width: 100vw;
    text-align: center;
    background-color: ${(props) => props.bgColor}


`

export default StyledPanel