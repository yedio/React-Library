import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

declare global {
  interface Window {
    klaytn: any;
  }
}

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
