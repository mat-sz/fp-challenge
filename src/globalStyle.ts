import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* Awful hack, but style props aren't working on react-split-pane... */
  body > div {
    height: 100vh;

    & > div {
      & > div:nth-child(2) {
        width: 15px;
        background: #777;
        background-clip: padding-box;

        &:hover {
          border-left: 5px solid rgba(0,0,0,0.1);
          border-right: 5px solid rgba(0,0,0,0.1);
        }
      }

      & > div:not(:nth-child(2)) {
        display: flex;

        & > * {
          flex: 1;
        }
      }
    }
  }
`;
