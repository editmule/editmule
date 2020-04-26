import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import { Loader } from 'modules/Loader';

// Build these critical purchase flow components into the main build
import { Home } from 'modules/Home';
import { Login } from 'modules/Login';
import { Signup } from 'modules/Signup';
import { Order } from 'modules/Order';
import { Cart } from 'modules/Cart';
import { Checkout } from 'modules/Checkout';

// Lazy load components not critical to standard purchase flow
const Account = React.lazy(() => import('modules/Account'));
const ResetPassword = React.lazy(() => import('modules/ResetPassword'));
const Thanks = React.lazy(() => import('modules/Thanks'));
const NonDisclosureAgreement = React.lazy(() => import('modules/Documents/NonDisclosureAgreement'));
const Privacy = React.lazy(() => import('modules/Documents/Privacy'));
const Terms = React.lazy(() => import('modules/Documents/Terms'));
const Cookies = React.lazy(() => import('modules/Documents/Cookies'));
const BlogHome = React.lazy(() => import('modules/Blog'));
const NotFound = React.lazy(() => import('modules/NotFound'));

function Routes({ appProps }: any) {
  return (
    <Suspense fallback={<Loader />}>
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
        <AppliedRoute path="/blog" component={BlogHome} appProps={appProps} />
        { /* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
