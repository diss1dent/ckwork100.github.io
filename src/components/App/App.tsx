import React from 'react';
import AppRoutes from "./AppRoutes";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#719248',
    },
    secondary: {
      main: '#d1dbdc',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <AppRoutes/>
      </div>
    </ThemeProvider>

  );
}

export default App;
