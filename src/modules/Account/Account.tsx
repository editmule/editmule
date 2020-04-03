import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Auth } from "aws-amplify";
import ReactGA from 'react-ga';

import './Account.css';

import { OrdersList } from 'modules/Account/OrdersList';
import { Orders } from 'modules/Account/Orders';
import { Settings } from 'modules/Account/Settings';
import { ChangeEmail } from 'modules/Account/ChangeEmail';
import { ChangePassword } from 'modules/Account/ChangePassword';
import { NotFound } from 'modules/NotFound';

import { Switch, Route } from 'react-router-dom';

export default function Account(props: any) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);

    async function onLoad() {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setCurrentUser(currentUser);
      } catch (e) {
        alert(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, []);

  return (
    <div className="Account main-container">
      <section className="bg--secondary space--sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="boxed boxed--lg boxed--border">
                <div className="text-block text-center">
                  {isLoading ?
                    <section className="height-30 text-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </section>
                    :
                    <>
                      <img className="icon--svg user-icon" width="64" height="64" alt="Header" src="/icons/Eyeglasses-Smiley.svg"></img>
                      <span className="h5">{currentUser.attributes.email.toLowerCase()}</span>
                      <span>{currentUser.attributes.email_verified ? "Email Verified" : "Email Not Verified"}</span>
                      <span className="label">Early Adopter</span>
                    </>
                  }
                </div>
                <hr />
                <div className="text-block">
                  <ul className="menu-vertical">
                    <li key="account-orders">
                      <LinkContainer to="/account/orders">
                        <div className="a-link">
                          Orders
                        </div>
                      </LinkContainer>
                    </li>
                    <li key="acount-settings">
                      <LinkContainer to="/account/settings">
                        <div className="a-link">
                          Account Settings
                        </div>
                      </LinkContainer>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="boxed boxed--lg boxed--border">
                <Switch>
                  <Route exact path='/account' component={OrdersList} />
                  <Route path='/account/orders' exact component={OrdersList} />
                  <Route path='/account/orders/:id' exact component={Orders} />
                  <Route path='/account/settings' exact component={Settings} />
                  <Route path='/account/settings/email' exact component={ChangeEmail} />
                  <Route path='/account/settings/password' exact component={ChangePassword} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
