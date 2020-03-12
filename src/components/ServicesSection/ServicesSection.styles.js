import styled from 'styled-components';
import {media} from '../../utils/media';


export const StyledServicesSection = styled.section`
 
height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
${media.handheld`flex-direction: row;`}
`;

export const StyledFlexBox = styled.div`

display:flex;
flex-direction: ${props => props.column ? 'column' : 'row'}
justify-content: space-around;
align-items:center;
flex: 33%;


`;
