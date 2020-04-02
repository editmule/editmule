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
import { Thanks } from 'modules/Thanks';
import { NonDisclosureAgreement } from 'modules/Documents';
import { Privacy } from 'modules/Documents';
import { Terms } from 'modules/Documents';
import { Cookies } from 'modules/Documents';
import { NotFound } from 'modules/NotFound';

function Routes({ appProps }: any) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/order" exact component={Order} appProps={appProps} />
      <AppliedRoute path="/cart" exact component={Cart} appProps={appProps} />
      <AppliedRoute path="/checkout" exact component={Checkout} appProps={appProps} />
      <AppliedRoute path="/thanks" exact component={Thanks} appProps={appProps} />
      <AppliedRoute path="/nda" exact component={NonDisclosureAgreement} appProps={appProps} />
      <AppliedRoute path="/privacy" exact component={Privacy} appProps={appProps} />
      <AppliedRoute path="/terms" exact component={Terms} appProps={appProps} />
      <AppliedRoute path="/cookies" exact component={Cookies} appProps={appProps} />
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
