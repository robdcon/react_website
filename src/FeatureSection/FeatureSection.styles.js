import styled from 'styled-components';

export const FeatureSectionWrapper = styled.div`
    display: flex;
    height:100vh;
`;

export const FeatureDetailsWrapper = styled.div`
    padding: 0 20px;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100%;
`;

export const FeatureHeading = styled.h2`
    font-size: ${props => props.theme.global.h2FontSize};
    font-weight: bold;
`;

export const FeatureTagline = styled.div`
    p {
        font-size: ${props => props.theme.global.h4FontSize};
        line-height: 1.2;
    }
`;

export const FeatureDescription = styled.div`
    p {
        font-size: ${props => props.theme.global.bodyFontSize};
    }
`;

export const FeatureImageWrapper = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100%;
`;

export const FeatureImage = styled.div`
    img {
        width: 100%;
    }
`;