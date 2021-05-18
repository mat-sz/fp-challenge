import React from 'react';
import SplitPane from 'react-split-pane';

import { Box } from './components/Box';
import { Chart } from './components/Chart';
import { Table } from './components/Table';
import { GlobalStyle } from './globalStyle';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SplitPane>
        <Box>
          <Chart />
        </Box>
        <Box>
          <Table />
        </Box>
      </SplitPane>
    </>
  );
};
