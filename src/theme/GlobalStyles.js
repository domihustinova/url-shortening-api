import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 1.3;
}
`;

export default GlobalStyles;
