import React from 'react';
import { useSelector } from 'react-redux';

import { Table } from './Table';
import { StateType } from '../reducers';
import { EntryTableRow } from './EntryTableRow';
import { Box } from './Box';
import { BoxTitle } from './BoxTitle';

export const EntryTable: React.FC = () => {
  const entries = useSelector((state: StateType) => state.entries);

  return (
    <Box>
      <BoxTitle>Parameters</BoxTitle>
      <Table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <EntryTableRow key={entry.id} entry={entry} />
          ))}
        </tbody>
      </Table>
    </Box>
  );
};
