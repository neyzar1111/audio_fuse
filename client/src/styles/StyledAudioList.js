import styled from 'styled-components/macro';

const StyledAudioList = styled.div`
  margin:0;
  padding:0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: var(--spacing-sm);
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: var(--spacing-lg);
  }
    .audio__item{
        padding: var(--spacing-xs);
        color: var(--light-grey);
        font-size: var(--fz-sm);
        border-radius: var(--border-radius-subtle);
        transition: background-color 0.3s ease;
        cursor: default;
        height: 180px;
        background-color: var(--near-black);
       
        @media (min-width: 768px) {
            padding: var(--spacing-xs) var(--spacing-sm);
        }
        &:hover,
        &:focus {
            background-color: var(--dark-grey);
        }
        .audio__description{
            height: 40px;
            overflow-y: hidden;
        }
   
  }
     .audio__name {
         color: var(--white);
         font-size: var(--fz-md);
     }
     .audio__author{
          color: var(--grey);

     }
     
  }`;
export default StyledAudioList;