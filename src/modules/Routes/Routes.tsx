import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import { Home } from 'modules/Home';
import { Login } from 'modules/Login';
import { Signup } from 'modules/Signup';
import { NewOrder } from 'modules/NewOrder';
import { Account } from 'modules/Account';
import { NotFound } from 'modules/NotFound';


function Routes({ appProps }: any) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/order" exact component={NewOrder} appProps={appProps} />
      <AuthenticatedRoute path="/account" component={Account} appProps={appProps} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
