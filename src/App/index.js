import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Switch,
} from 'react-router-dom';
import theme from './theme';
import Auth from './Auth';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Switch>
      <Auth />
    </Switch>
  </MuiThemeProvider>
);

export default App;
