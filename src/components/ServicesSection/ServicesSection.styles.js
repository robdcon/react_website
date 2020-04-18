import styled from 'styled-components';
import {media} from '../../utils/media';

export const StyledSection = styled.section`

height:100vh;
width:100vw;
padding: 2em;
display: inline-block;

`;

export const StyledServicesSection = styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items:center;
padding:0;
`;

export const StyledServiceSectionHeading = styled.div`
width:100%;
text-align:center;
`;

export const StyledServiceItem = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
flex: 33%;
.service-heading {
    font-size: 1.25em;
}
${media.handheld`
    .service-heading {
        font-size: 1.6em;
    }
`}
`;


export const StyledFlexBox = styled.div`
width:100%;
display:flex;
flex-direction: ${props => props.column ? 'column' : 'row'}
justify-content: space-around;
align-items:center;
${media.handheld`flex-direction: row;`}
`;
