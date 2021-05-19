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
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 400;
  }

  tr:nth-child(even) {
    background: #fafafa;
  }

  tr {
    cursor: pointer;
  }

  tr.selected {
    background: #ddd;
  }
`;
