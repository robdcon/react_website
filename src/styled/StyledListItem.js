import styled from 'styled-components'

const StyledListItem = styled.li`

list-style: none;
padding: 1.6rem;
font-size: 1.5em;
text-transform: uppercase;

@media(max-width: 800px)
    {
        font-size:1.25em;
    }

    @media(max-width: 400px)
    {
        font-size:1.15em;
    }
`;

export default StyledListItem