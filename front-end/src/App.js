import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import { ThemeProvider } from '@material-ui/core/styles';
import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider>
      {routing}
    </ThemeProvider>

  );
}

export default App;
