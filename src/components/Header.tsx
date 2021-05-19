import styled from 'styled-components';

export const Header = styled.div`
  grid-column: 1 / 2;

  @media screen and (min-width: 1000px) {
    grid-column: 1 / 3;
  }
`;
