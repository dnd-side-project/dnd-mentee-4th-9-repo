import React from 'react';
import {render, hydrate} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

import {ThemeProvider} from 'styled-components';
import {HelmetProvider} from 'react-helmet-async';

const rootElement: any = document.getElementById('root');

if (!!rootElement &&rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetProvider>
          <App />
        </HelmetProvider>
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetProvider>
          <App />
        </HelmetProvider>
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
