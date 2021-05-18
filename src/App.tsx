import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from './components/Box';
import { Chart } from './components/Chart';
import { Grid } from './components/Grid';
import { Table } from './components/Table';
import { GlobalStyle } from './globalStyle';
import { StateType } from './reducers';

export const App: React.FC = () => {
  const entries = useSelector((state: StateType) => state.entries);

  return (
    <>
      <GlobalStyle />
      <Grid>
        <Box>
          <Chart />
        </Box>
        <Box>
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
                <tr key={entry.id}>
                  <td>{entry.label}</td>
                  <td>{entry.value}</td>
                  <td>{entry.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Grid>
    </>
  );
};
