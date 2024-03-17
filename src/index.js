import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from "./theme"
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <App />
</ThemeProvider>,);
