import styled from 'styled-components';

export const TestWrapper = styled.div`
 display: flex;
 position:relative;
 height:100vh;
 width:100vw;

 .header{
     position:absolute;
     top:0;
     left:0;
     color:#f00;
     z-index:99999;
     font-size:10em;
 }

`;

export const StyledHeadingClone = styled.h1`

color:#000;
font-size:10em;
clip-path:polygon(0 0, ${`calc((var(--maskX)-var(--maskY))*1%)`} 0, ${`calc((var(--maskY)-var(--maskX))*1%)`} 100%, 0 100%);
position:absolute;
top:0;
left:0;
z-index:99999;
transition: all 0.5s ease;
`;
