import styled from 'styled-components'

export const StyledFlexSection = styled.section`

    display:flex;
    flex-direction:${(props) => {return props.direction} };
    justify-content:${(props) => (props.justify) ? props.justify : 'center' };
    align-items:${(props) => (props.align) ? props.align : 'center'};
    height:100%;
    width:100%;
    height:100vh;
    width:100vw;
  


`

export const StyledFlexBox = styled.div`

    display:flex;
    flex-direction:${(props) => {return props.direction} };
    justify-content:${(props) => (props.justify) ? props.justify : 'center' };
    align-items:${(props) => (props.align) ? props.align : 'center'};
    height:100%;
    width:100%

`
export const StyledFlexWrapper = styled.div`

    width:100%;
    height:100%;
    display:inline-block;

`

