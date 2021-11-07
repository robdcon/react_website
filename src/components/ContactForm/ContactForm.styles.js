import styled from 'styled-components';

export const StyledForm = styled.div` 
    width:100%;
    h2 {
      text-align:center;
      color:#fff;
    }
`;

export const StyledCheckbox = styled.label`
    display: block;
    position: relative;
    margin: .5em 0 1em;
    padding: .125em .125em .125em 2em;
    font-family: ${props => props.theme.global.fontFamily};
    font-weight: 100;
    font-size: 1em;
    line-height: 1.7;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 3px;

    &:focus {
        border: 1px solid ${props => props.theme.colors.primaryColor};
    }

    .checkbox--custom {
        position: absolute;
        top: 2px;
        left: 2px;
        height: 24px;
        width: 24px;
        background-color: #eee;
        border-radius: 3px;
        border: 1px solid #767676;
    }

    .checkbox--custom:before {
        content: "✔";
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        display: none;
    }

    .checkbox--native {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    &:hover .checkbox--custom {
        background-color: #ccc;
    }

    input[type=checkbox]:checked ~ .checkbox--custom {
        background-color: ${props => props.theme.colors.primaryColor};
        &:before {
            display: block;
        }
    }

`;

export const Input = styled.input`
    border-radius: 6px;
    width:100%;
    padding: 16px;
    margin-bottom: 8px;
    background-color: #fff;
`;

export const Select = styled.select`
    border-radius: 6px;
    width: 100%;
    padding: 16px;
    margin-bottom: 8px;
    background-color: #fff;
    position: relative;

    &.untouched {
        color: #aaa;
    }
`;

export const Option = styled.option`
    border-radius: 6px;
    padding: 16px;
    background-color: #fff;
    width: 100%;
`;

export const SelectList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
}`;



export const ConfirmationStyles = styled.div`

    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    h2, p {
        text-align:center;
        color:#fff;
    }
`;
