// /App.js

import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LinkContainer from "./components/LinkContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LinkContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
