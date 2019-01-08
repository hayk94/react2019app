import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Switch,
} from 'react-router-dom';
import theme from './theme';
import Auth from './Auth';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Switch>
      <Auth />
    </Switch>
  </ThemeProvider>
);

export default App;
