import styled from 'styled-components';
import { media } from '../../utils/media';

export const StyledSection = styled.section`

    width:100vw;
    display: flex;
    flex-direction: column;

       ${media.desktop`
            // display: grid
            grid-template-rows: 20vh 30vh;
            grid-template-columns: repeat(3, 1fr);
       `}
    }
`;

export const Column = styled.div`
    padding: 8px;
    flex-basis: 33.333%;
`;

export const StyledServiceSectionHeading = styled.div`

    width:100%;
    min-height: 100px;
    text-align:center;
    grid-column-start: span 3;
    grid-row-start: span 1;
    align-self: center;
`;

export const ServiceItemWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    ${media.desktop`
    flex-direction: row;
    `}
    
    grid-column-start: span 3;
    grid-row-start: 2;
    .service-heading {
        font-size: 1.25em;
    }
`;

export const ServiceIcon = styled.div`
    display: inline-block;
    color: ${props => props.theme.global.primaryColor};
    padding:  ${props => props.theme.global.cardPadding};
`;

export const ServiceHeading = styled.div`
    // grid-area: serviceHeading;

    // ${media.handheld`
    //     align-self: self-end;
    //     justify-self: self-start;
    // `}
    //  ${media.desktop`
    //     align-self: self-start;
    //     justify-self: center;
    // `}
`;

export const ServiceDescription = styled.div`
   
    // grid-area: serviceDescription;
    // ${media.handheld`
    //     align-self: self-start;
    //     justify-self: self-start;
    // `}
    //  ${media.desktop`
    //     align-self: self-start;
    //     justify-self: center;
    // `}

`;

export const StyledServiceItem = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:left;
    text-align:center;
    transistion: all 1s ease-in;
    padding: ${props => props.theme.global.cardPadding};
    box-shadow: ${props => props.theme.global.cardShadow};
    margin-bottom: 24px;
    border-radius: 3px;


    .fa-stack {
        max-width: 100%;
        max-width:100%;
    }

`;