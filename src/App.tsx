import React from 'react';

import { Box } from './components/Box';
import { EntryChart } from './components/EntryChart';
import { EntryTable } from './components/EntryTable';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { GlobalStyle } from './globalStyle';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <Header>
          <Box>
            <Logo />
          </Box>
        </Header>
        <EntryChart />
        <EntryTable />
      </Grid>
    </>
  );
};
