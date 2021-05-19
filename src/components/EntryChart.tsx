import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { StateType } from '../reducers';
import { Box } from './Box';
import { BoxTitle } from './BoxTitle';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';

export const EntryChart: React.FC = () => {
  const entries = useSelector((state: StateType) => state.entries);
  const selectedId = useSelector((state: StateType) => state.selectedId);
  const selectedEntry = useMemo(
    () => entries.find(entry => entry.id === selectedId),
    [selectedId, entries]
  );
  const randomData = useMemo(() => {
    if (!selectedEntry) {
      return [];
    }

    const arr = new Array(15).fill(selectedEntry.value).map((value, i) => ({
      i,
      value: Math.random() * value + value / 2,
    }));
    arr.push({
      i: 15,
      value: selectedEntry.value,
    });
    return arr;
  }, [selectedEntry]);

  if (!selectedEntry) {
    return null;
  }

  return (
    <Box>
      <BoxTitle>{selectedEntry.label}</BoxTitle>
      <ResponsiveContainer width="99%" height={500}>
        <LineChart height={300} data={randomData} key={selectedEntry.id}>
          <XAxis dataKey="i" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
