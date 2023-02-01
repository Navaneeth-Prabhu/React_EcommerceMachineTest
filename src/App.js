import React from 'react';
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { createTheme ,ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff64f',
      main: '#ffc400',
      dark: '#c79400',
      contrastText: '#000',
    },
    // secondary: amber,
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>

    <BrowserRouter>
    <Routes>

    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}
export default App;
