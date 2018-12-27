import React from 'react';
import { Route, Link } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Home from '../Home';
import About from '../About';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </MuiThemeProvider>
);

export default App;
