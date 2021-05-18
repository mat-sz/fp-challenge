import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Farro:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html,
  body {
    margin: 0;
  }

  body {
    font-family: 'Farro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #999;
    font-weight: 300;
  }

  body > div {
    height: 100vh;
  }
`;
