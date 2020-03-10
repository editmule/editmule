import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'


import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, withRouter } from 'react-router-dom';

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

  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Edit Mule</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav >
            <LinkContainer to="/order">
              <NavItem>Order</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/cart">
              <NavItem><FontAwesomeIcon icon={faShoppingCart} /></NavItem>
            </LinkContainer>
            {isAuthenticated
              ? <>
              <NavDropdown eventKey="4" title={
                <FontAwesomeIcon icon={faUserCircle} />
              } id="account-dropdown">
                <LinkContainer to="/account">
                  <MenuItem eventKey="4.1">Account</MenuItem>
                </LinkContainer>
                <LinkContainer to="/account/orders">
                  <MenuItem eventKey="4.2">Orders</MenuItem>
                </LinkContainer>
                <LinkContainer to="/account/settings">
                  <MenuItem eventKey="4.3">Settings</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <MenuItem eventKey="4.4" onClick={handleLogout}>Log out</MenuItem>
              </NavDropdown>

              </>
              : <>
                <LinkContainer to="/login">
                  <NavItem>Log in</NavItem>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <NavItem>Sign up</NavItem>
                </LinkContainer>
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
