import React from 'react';
import './Account.css';

import { OrdersList } from 'modules/Account/OrdersList';
import { Orders } from 'modules/Account/Orders';
import { Summary } from 'modules/Account/Summary';
import { Settings } from 'modules/Account/Settings';
import { ChangeEmail } from 'modules/Account/ChangeEmail';
import { ChangePassword } from 'modules/Account/ChangePassword';
import { NotFound } from 'modules/NotFound';

import { Link, Switch, Route } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

export default function Account(props: any) {

  return (
    <div className="Account">
      <div>
        <div className="Account summary">
          <PageHeader>Your Account</PageHeader>
        </div>
        <ul>
          <li>
            <Link to={`/account/orders`}>Orders</Link>
          </li>
          <li>
            <Link to={`/account/settings`}>Settings</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/account' component={Summary} />
        <Route path='/account/orders' exact component={OrdersList} />
        <Route path='/account/orders/:id' exact component={Orders} />
        <Route path='/account/settings' exact component={Settings} />
        <Route path='/account/settings/email' exact component={ChangeEmail} />
        <Route path='/account/settings/password' exact component={ChangePassword} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
