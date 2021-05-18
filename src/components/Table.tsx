import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    text-align: center;
  }

  td,
  th {
    padding: 0.2rem;
  }

  th {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  tr:nth-child(even) {
    background: #fafafa;
  }
`;
