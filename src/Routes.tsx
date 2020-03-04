import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from 'modules/Home';
import { NotFound } from 'modules/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      { /* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
