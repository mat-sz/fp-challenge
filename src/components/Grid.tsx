import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;
