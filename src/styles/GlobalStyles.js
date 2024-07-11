import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html, #root {
    height: 100%;
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
  .container {
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
    padding: ${({ theme }) => theme.layout.padding};
  }
`;

export default GlobalStyles;
