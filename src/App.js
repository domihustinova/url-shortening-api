import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./theme/GlobalStyles";
import { theme } from "./theme/consts";

import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
