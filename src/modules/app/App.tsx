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

    props.history.push('/login');
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
    <div className="App container">
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand>
            Edit Mule
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <RouterNavLink to="/order">
              Order
            </RouterNavLink>
          </Nav>
          <Nav className="justify-content-end">
            <RouterNavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </RouterNavLink>
            {isAuthenticated
              ? <>
              <NavDropdown eventKey="4" title={
                <FontAwesomeIcon icon={faUserCircle} />
              } id="account-dropdown">
                <LinkContainer to="/account/orders">
                  <NavDropdown.Item eventKey="4.2">Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/account/settings">
                  <NavDropdown.Item eventKey="4.3">Settings</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" onClick={handleLogout}>Log out</NavDropdown.Item>
              </NavDropdown>
              </>
              : <>
                <RouterNavLink to="/login">
                  Log in
                </RouterNavLink>
                <RouterNavLink to="/signup">
                  Sign up
                </RouterNavLink>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

// @ts-ignore
export default withRouter(App);
