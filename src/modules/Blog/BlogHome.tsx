import React from 'react';

import { Posts } from './Posts';
import { SinglePost } from './SinglePost';
import { NotFound } from 'modules/NotFound';

import { Switch, Route } from 'react-router-dom';

export function BlogHome(props: any) {
  return (
    <div className="main-container Blog">
      <Switch>
        <Route exact path='/blog' component={Posts} />
        <Route path='/blog/pages/:num' component={Posts} />
        <Route path='/blog/post/:id' component={SinglePost} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
