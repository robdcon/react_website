import styled from 'styled-components';

export const PinSectionWrapper = styled.div `
 display: flex;
 padding-top: 50px;

 height: 100vh;
    .title {
        flex:1;
        display: flex;
        justify-content:center;
    }
    .description {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items: center;
        positoin:absolute;
    }
 }
`;
