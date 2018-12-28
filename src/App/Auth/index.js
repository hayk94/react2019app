// @flow
import * as React from 'react';
import {
  Route,
} from 'react-router-dom';
import {
  Switch,
} from 'react-router-dom';
import Login from './Login';
import Reset from './Reset';
import SignPage from './SignPage';
import Register from './Register';

const Auth = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />,
      <Route exact path="/reset/:code" component={Reset} />,
      <Route exact path="/signpage/:code" component={SignPage} />,
      <Route exact path="/register/:code" component={Register} />,
    </Switch>
  );
};

export default Auth;
