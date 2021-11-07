import styled from 'styled-components/macro';

const StyledSearchBar = styled.input`
  padding: var(--spacing-xs) ;
  margin: 0;
  width: 40%;
  border-radius: var(--border-radius-pill);
  border: 1px solid var(--black);
    &:active,
    &:focus {
      border: 1px solid var(--pink);
    }
  }
`;

export default StyledSearchBar;