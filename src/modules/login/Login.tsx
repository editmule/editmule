import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import ReactGA from 'react-ga';

import { Form } from 'react-bootstrap';

import { LoaderButton } from 'modules/LoaderButton';
import { useFormFields } from 'libs/hooks';
import './Login.css';

export function Login(props: any) {
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    setLoginError('');
    setIsLoading(true);

    try {
      await Auth.signIn(fields.email.toLowerCase(), fields.password);
      props.userHasAuthenticated(true);
    } catch (e) {
      setLoginError(e.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="main-container">
      <section className="height-70 text-center">
        <div className="container pos-vertical-center">
          <div className="row">
            <div className="col-md-7 col-lg-5">
              <h2>Log in</h2>
              <form onSubmit={handleSubmit} className="text-left">
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    size="lg"
                    type="email"
                    value={fields.email}
                    onChange={handleFieldChange}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="lg"
                    type="password"
                    value={fields.password}
                    onChange={handleFieldChange}
                  />
                </Form.Group>
                {
                  loginError &&
                  <div className="alert bg--error">
                    <div className="alert__body">
                      <span>{loginError}</span>
                    </div>
                  </div>
                }
                <LoaderButton
                  type="submit"
                  size="lg"
                  text="Log in"
                  isLoading={isLoading}
                  disabled={!validateForm()}
                  className="btn btn--primary type--uppercase"
                />
              </form>
              <span className="type--fine-print block">Don't have an account yet? <Link to="/signup">Create an account</Link>
              </span>
              <span className="type--fine-print block">Forgot your password? <Link to="/login/reset">Recover your account</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
