import React from 'react';
import { useSelector } from 'react-redux';

import { Table } from './Table';
import { StateType } from '../reducers';
import { EntryTableRow } from './EntryTableRow';

export const EntryTable: React.FC = () => {
  const entries = useSelector((state: StateType) => state.entries);

  return (
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
  );
};
