import styled from 'styled-components';

export const StyledBackgroundImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: 100%;
    top: 0;
    left: 0;
`;

export const StyledHeroBanner = styled.section`
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
`;
