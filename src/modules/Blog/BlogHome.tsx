import React from 'react';

import { Posts } from 'modules/Blog';
import { SinglePost } from 'modules/Blog';
import { NotFound } from 'modules/NotFound';

import { Switch, Route } from 'react-router-dom';

export default function BlogHome(props: any) {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path='/blog' component={Posts} />
        <Route path='/blog/pages/:num' component={Posts} />
        <Route path='/blog/post/:id' component={SinglePost} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
