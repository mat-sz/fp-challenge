import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIdAction } from '../actions/state';
import { StateType } from '../reducers';

import { DataEntry } from '../types/Models';

export interface EntryTableRowProps {
  entry: DataEntry;
}

export const EntryTableRow: React.FC<EntryTableRowProps> = ({ entry }) => {
  const selectedId = useSelector((state: StateType) => state.selectedId);
  const dispatch = useDispatch();

  const onClick = useCallback(
    () => dispatch(selectIdAction(entry.id)),
    [dispatch, entry]
  );

  return (
    <tr onClick={onClick} className={selectedId === entry.id ? 'selected' : ''}>
      <td>{entry.label}</td>
      <td>{entry.value}</td>
      <td>{entry.description}</td>
    </tr>
  );
};
