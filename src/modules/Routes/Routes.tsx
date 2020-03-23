import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import { Home } from 'modules/Home';
import { Login } from 'modules/Login';
import { Signup } from 'modules/Signup';
import { Order } from 'modules/Order';
import { Cart } from 'modules/Cart';
import { Checkout } from 'modules/Checkout';
import { Account } from 'modules/Account';
import { ResetPassword } from 'modules/ResetPassword';
import { NotFound } from 'modules/NotFound';

function Routes({ appProps }: any) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/order" exact component={Order} appProps={appProps} />
      <AppliedRoute path="/cart" exact component={Cart} appProps={appProps} />
      <AppliedRoute path="/checkout" component={Checkout} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/account" component={Account} appProps={appProps} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
