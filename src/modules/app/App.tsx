import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';

import { Routes } from 'modules/Routes';

function App(props: any) {

  const initialOrders = loadCart();
  const [isAuthenticating, setIsAuthenticating] = useState<Boolean>(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [orders, setOrders] = useState(initialOrders);

  window.addEventListener("storage", (e) => {
    console.log(e)
    // setOrders({ orders: true});
  });


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

  function loadCart() {
    // @ts-ignore
    return localStorage.getItem('EditMuleCart') ? JSON.parse(window.localStorage.getItem('EditMuleCart')) : [{}];
  }

  // This fixes react-router-bootstrap failing to nullify active links in different navs within the same navbar
  const RouterNavLink = ({ children, ...props }: any) => (
    <LinkContainer {...props}>
      <Nav.Link active={false}>
        {children}
      </Nav.Link>
    </LinkContainer>
  )

  return (
    !isAuthenticating &&
    <div>
      <div className="nav-container">
        <div className="via-1585181384433">
          <div className="bar bar--sm visible-xs">
            <div className="container">
              <div className="row">
                <div className="col-3 col-md-2">
                  <a href="">
                    <img className="logo logo-dark" alt="logo" src="img/logo-dark.png"></img>
                    <img className="logo logo-light" alt="logo" src="/img/logo-light.png"></img>
                  </a>
                </div>
                <a href="" className="col-9 col-md-10 text-right">
                  <div className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm">
                    <i className="icon icon--sm stack-interface stack-menu"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <nav id="menu1" className="bar bar-1 hidden-xs">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-2 hidden-xs">
                  <div className="bar__module">
                    <LinkContainer to="/">
                      <a href="">
                        <img className="logo logo-dark" alt="logo" src="img/logo-dark.png"></img>
                        <img className="logo logo-light" alt="logo" src="img/logo-light.png"></img>
                      </a>
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
                              <a href="">Cart</a>
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
                                          <a href="">Orders</a>
                                        </LinkContainer>
                                      </li>
                                      <li>
                                        <LinkContainer to="/account/settings">
                                          <a href="">Settings</a>
                                        </LinkContainer>
                                      </li>
                                      <li className="separate" onClick={handleLogout}>
                                        <a href="">Log Out</a>
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
                            <span className="btn__text">
                              Order Now
                            </span>
                          </div>
                        </LinkContainer>
                      </div>
                    </>
                    : <>
                      <div className="bar__module">
                        <ul className="menu-horizontal text-left">
                          <li>
                            <LinkContainer to="/cart">
                              <a href="">Cart</a>
                            </LinkContainer>
                          </li>
                          <li>
                            <LinkContainer to="/login">
                              <a href="">Log In</a>
                            </LinkContainer>
                          </li>
                        </ul>
                      </div>
                      <div className="bar__module">
                        <LinkContainer to="/signup">
                          <div className="btn btn--sm type--uppercase">
                            <span className="btn__text">Sign Up</span>
                          </div>
                        </LinkContainer>
                        <LinkContainer to="/order">
                          <div className="btn btn--sm btn--primary type--uppercase">
                            <span className="btn__text">Order Now</span>
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
      <footer className="footer-7 text-center-xs">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <span className="type--fine-print">© <span className="update-year">2020</span> Edit Mule — All Rights Reserved</span>
            </div>
            <div className="col-sm-6 text-right text-center-xs">
              <span className="type--fine-print">hello@editmule.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

// <Navbar bg="light" expand="lg" collapseOnSelect>
//   <LinkContainer to="/">
//     <Navbar.Brand>
//       Edit Mule
//     </Navbar.Brand>
//   </LinkContainer>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <RouterNavLink to="/order">
//         Order
//       </RouterNavLink>
//     </Nav>
//     <Nav className="justify-content-end">
//       <RouterNavLink to="/cart">
//         <FontAwesomeIcon icon={faShoppingCart} />
//         {
//           (orders !== [{}] && orders.length >= 1) ?
//           ` (${orders.length})` : null
//         }
//       </RouterNavLink>
//       {isAuthenticated
//         ? <>
//         <NavDropdown eventKey="4" title={
//           <FontAwesomeIcon icon={faUserCircle} />
//         } id="account-dropdown">
//           <LinkContainer to="/account/orders">
//             <NavDropdown.Item eventKey="4.2">Orders</NavDropdown.Item>
//           </LinkContainer>
//           <LinkContainer to="/account/settings">
//             <NavDropdown.Item eventKey="4.3">Settings</NavDropdown.Item>
//           </LinkContainer>
//           <NavDropdown.Divider />
//           <NavDropdown.Item eventKey="4.4" onClick={handleLogout}>Log out</NavDropdown.Item>
//         </NavDropdown>
//         </>
//         : <>
//           <RouterNavLink to="/login">
//             Log in
//           </RouterNavLink>
//           <RouterNavLink to="/signup">
//             Sign up
//           </RouterNavLink>
//         </>
//       }
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>

// @ts-ignore
export default withRouter(App);
