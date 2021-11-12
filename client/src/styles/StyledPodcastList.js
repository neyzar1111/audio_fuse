import styled from 'styled-components/macro';

const StyledPodcastList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  .track__item {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    grid-gap: var(--spacing-md);
    padding: var(--spacing-xs);
    color: var(--gray);
    font-size: var(--fz-sm);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
      .track__item__artist{
        height: 100px;
      }
      .readMore{
        height: auto;
      }
        
    @media (min-width: 768px) {
      grid-template-columns: 1fr  ;
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    &:hover,
    &:focus {
      background-color: var(--dark-grey);
      color: var(--white);
    }
  }

  .track__item__num {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: var(--fz-md);
    font-variant-numeric: tabular-nums;
    overflow: visible;
  }

  .track__item__title-group {
    display: flex;
    align-items: center;
  }

  .track__item__img {
    margin-right: var(--spacing-sm);
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    background-color: var(--dark-grey);
  }

  .track__item__name {
    color: var(--dark-gray);
    font-size: var(--fz-lg);
    font-weight: bold;
  }


  .track__item__album {
    display: none;

    @media (min-width: 768px) {
      display: block;
      white-space: nowrap;
    }
  }

  .track__item__duration {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-end;
      font-variant-numeric: tabular-nums;
    }
  }
`;

export default StyledPodcastList;