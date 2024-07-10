import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { VideoProvider } from './context/VideoContext';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <VideoProvider>
        <GlobalStyles />
        <App />
      </VideoProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
