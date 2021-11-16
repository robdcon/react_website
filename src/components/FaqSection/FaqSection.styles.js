import styled from 'styled-components';

export const StyledFaqSection = styled.div`
    padding: 16px;
    .faq-section_inner {
        border: ${props => props.theme.global.cardBorder}
    }
`;

export const StyledFaq = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    border-bottom: ${props => props.theme.global.cardBorder};

    &:last-of-type {
        border-bottom: none;
        button {
            border-bottom: none;
        }

        .faq-content {
            border-bottom: none;
            border-top: ${props => props.theme.global.cardBorder};
        }
    }
`;

export const StyledFaqHeader = styled.div`
    h5 {
        
        margin-bottom: 0;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        height: 50px;
        border: none;

    } 
`;

export const StyledFaqContent = styled.div`
    transition: height .25s ease-in-out;
    transform-origin: top center;
    &.collapsed-true {
        height: 0;
    }
    &.collapsed-false {
        height: ${props => props.height}px;
    }
    .faq-content {
        padding: 16px;
        border-bottom: ${props => props.theme.global.cardBorder};
        border-top: ${props => props.theme.global.cardBorder};
    }
`;
