import styled from 'styled-components';
import { media } from '../../utils/media';

export const StyledSection = styled.section`

    width:100vw;
    padding: 1.25em;
    display: flex;
    flex-direction: column;

       ${media.desktop`
            // display: grid
            grid-template-rows: 20vh 30vh;
            grid-template-columns: repeat(3, 1fr);
       `}
    }
`;

export const StyledServiceSectionHeading = styled.div`

    width:100%;
    min-height: 100px;
    margin-top: 5em;
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
    // grid-area: serviceIcon;
    // justify-self: center;
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

const stackedLayout = `
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    grid-template-areas: 
    "serviceIcon"
    "serviceHeading"
    "serviceDescription";
`;
export const StyledServiceItem = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-basis: 33.333%;
    transistion: all 1s ease-in;
    // display: grid;
    // grid-gap: 16px;
    // ${stackedLayout}

    // ${media.handheld`
    //     grid-template-rows: repeat(2, 1fr);
    //     grid-template-columns: 20% 80%;
    //     align-items: center;
    //     grid-template-areas: 
    //     "serviceIcon serviceHeading"
    //     "serviceIcon serviceDescription";
    // `};

    // ${media.desktop`
    //    ${stackedLayout}
    // `};

    // margin-bottom: 2em;

    .fa-stack {
        max-width: 100%;
        max-width:100%;
    }

`;