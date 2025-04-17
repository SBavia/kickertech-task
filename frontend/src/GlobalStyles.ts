import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 1.125rem;
  }
  body {
    background-color: hsl(0deg 0% 95%);
  }
`;

export default GlobalStyles;
