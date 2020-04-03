import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

import './App.css';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';

import { Routes } from 'modules/Routes';

function App(props: any) {

  const [isAuthenticating, setIsAuthenticating] = useState<Boolean>(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push('/');
  }

  return (
    <>
      {
        isAuthenticating ?
          <section className="height-30 text-center">
            <div className="spinner-border" role="status" >
              <span className="sr-only">Loading...</span>
            </div >
          </section >
          :
          <div>
            <div className="nav-container">
              <div className="via-1585181384433">
                <div className="bar bar--sm visible-xs">
                  <div className="container">
                    <div className="row">
                      <div className="col-3 col-md-2">
                        <LinkContainer to="/">
                          <div className="hover">
                            <img className="logo logo-dark" alt="logo" src="/img/logo-dark.png"></img>
                            <img className="logo logo-light" alt="logo" src="/img/logo-light.png"></img>
                          </div>
                        </LinkContainer>
                      </div>
                      <div className="col-9 col-md-10 text-right hover">
                        <div className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm">
                          <i className="icon icon--sm stack-interface stack-menu"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav id="menu1" className="bar bar-1 hidden-xs">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 hidden-xs">
                        <div className="bar__module">
                          <LinkContainer to="/">
                            <div className="hover">
                              <img className="logo logo-dark" alt="logo" src="/img/logo-dark.png"></img>
                              <img className="logo logo-light" alt="logo" src="/img/logo-light.png"></img>
                            </div>
                          </LinkContainer>
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 text-right text-left-xs text-left-sm">
                        {isAuthenticated
                          ? <>
                            <div className="bar__module">
                              <ul className="menu-horizontal text-left">
                                <li>
                                  <LinkContainer to="/cart">
                                    <a href="#/">Cart</a>
                                  </LinkContainer>
                                </li>
                                <li className="dropdown">
                                  <span className="dropdown__trigger">
                                    Account
                            </span>
                                  <div className="dropdown__container">
                                    <div className="container">
                                      <div className="row">
                                        <div className="dropdown__content col-lg-2">
                                          <ul className="menu-vertical">
                                            <li>
                                              <LinkContainer to="/account/orders">
                                                <a href="#/">Orders</a>
                                              </LinkContainer>
                                            </li>
                                            <li>
                                              <LinkContainer to="/account/settings">
                                                <a href="#/">Settings</a>
                                              </LinkContainer>
                                            </li>
                                            <li className="separate" onClick={handleLogout}>
                                              <a href="#/">Log Out</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="bar__module">
                              <LinkContainer to="/order">
                                <div className="btn btn--sm btn--primary type--uppercase">
                                  <div className="btn__text">
                                    Order Now
                                  </div>
                                </div>
                              </LinkContainer>
                            </div>
                          </>
                          : <>
                            <div className="bar__module">
                              <ul className="menu-horizontal text-left">
                                <li>
                                  <LinkContainer to="/cart">
                                    <a href="#/">Cart</a>
                                  </LinkContainer>
                                </li>
                                <li>
                                  <LinkContainer to="/login">
                                    <a href="#/">Log In</a>
                                  </LinkContainer>
                                </li>
                              </ul>
                            </div>
                            <div className="bar__module">
                              <LinkContainer to="/signup">
                                <div className="btn btn--sm type--uppercase">
                                  <div className="btn__text">Sign Up</div>
                                </div>
                              </LinkContainer>
                              <LinkContainer to="/order">
                                <div className="btn btn--sm btn--primary type--uppercase">
                                  <div className="btn__text">Order Now</div>
                                </div>
                              </LinkContainer>
                            </div>
                          </>
                        }
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
            <footer className="footer-3 text-center-xs space--xs ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img alt="logo" className="logo" src="/img/logo-dark.png" />
                    <ul className="list-inline list--hover">
                      <li className="list-inline-item">
                        <LinkContainer to="/order">
                          <div className="hover">
                            <span className="type--fine-print">Get Started</span>
                          </div>
                        </LinkContainer>
                      </li>
                      <li className="list-inline-item">
                        <span className="type--fine-print">hello@editmule.com</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 text-md-right text-center-xs">
                    <ul className="list-inline list--hover">
                      <li className="list-inline-item">
                        <span className="type--fine-print">&copy; 2020 Edit Mule</span>
                      </li>
                      <li className="list-inline-item">
                        <LinkContainer to="/privacy">
                          <div className="hover">
                            <span className="type--fine-print">Privacy</span>
                          </div>
                        </LinkContainer>
                      </li>
                      <li className="list-inline-item">
                        <LinkContainer to="/terms">
                          <div className="hover">
                            <span className="type--fine-print">Terms</span>
                          </div>
                        </LinkContainer>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div >
      }
    </>
  );
}

// @ts-ignore
export default withRouter(App);
