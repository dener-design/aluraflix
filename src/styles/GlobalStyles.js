import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #121212;
    color: #ffffff;
    font-family: 'Arial', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
