import styled from 'styled-components/macro';

const StyledNav = styled.ul`
  list-style: none;
  padding: var(--spacing-xs) ;
  margin: 0;
  width: inherit;
   box-sizing:border-box;

  .list__item {
     box-sizing:border-box;
    align-items: center;
    padding: var(--spacing-xs);
    font-size: var(--fz-sm);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
    width:inherit;

  .list__item__name {
    color: var(--pink);
    font-size: var(--fz-sm);
    box-sizing:border-box;

  }

    &:hover,
    &:focus {
      background-color: var(--white);
      color: black;
      z-index:0;
    }
  }
`;

export default StyledNav;