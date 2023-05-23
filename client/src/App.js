// /App.js

import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import LinkContainer from "./components/LinkContainer";

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export const ThemeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ThemeContext.Provider value={toggleTheme}>
          <Grid container spacing={0} direction="column" alignItems="flex-end" justifyContent="flex-start">
            <Switch checked={darkMode} onChange={toggleTheme} />
          </Grid>
          <LinkContainer />
        </ThemeContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
