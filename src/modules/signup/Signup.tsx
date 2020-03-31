import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { Auth } from 'aws-amplify'
import { LoaderButton } from 'modules/LoaderButton';
import { useFormFields } from 'libs/hooks';
import ReactGA from 'react-ga';

import './Signup.css';
export default function Signup(props: any) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [signUpError, setSignUpError] = useState('');
  const [confirmEmailError, setConfirmEmailError] = useState('');
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(location.pathname + location.search);
  }, []);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    setSignUpError('');
    setIsLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password
      });
      setIsLoading(false);
      // @ts-ignore
      setNewUser(newUser);
    } catch (e) {
      setSignUpError(e.message);
      setIsLoading(false);
    }
  }

  async function resendConfirmation(event: any) {

    setConfirmEmailError('');
    setIsLoading(true);

    try {
      await Auth.resendSignUp(fields.email);
      setIsLoading(false);
    } catch (e) {
      setConfirmEmailError(e.message);
      setIsLoading(false);
    }
  }
  async function handleConfirmationSubmit(event: any) {
    event.preventDefault();

    setConfirmEmailError('');
    setIsLoading(true);

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      props.userHasAuthenticated(true);
    } catch (e) {
      setConfirmEmailError(e.message);
      setIsLoading(false);
    }
  }

  function renderConfirmationForm() {
    return (
      <div className="main-container">
        <section className="height-70 text-center">
          <div className="container pos-vertical-center">
            <div className="col-md-7 col-lg-5">
              <h2>Confirm your email</h2>
              <form onSubmit={handleConfirmationSubmit} className="text-left">
                <Form.Group controlId="confirmationCode">
                  <Form.Label>Confirmation code</Form.Label>
                  <Form.Control
                    autoFocus
                    size="lg"
                    type="tel"
                    onChange={handleFieldChange}
                    value={fields.confirmationCode}
                  />
                  <Form.Text className="form-help-text">Please check your email for the code.</Form.Text>
                </Form.Group>
                {
                  confirmEmailError &&
                  <div className="alert bg--error">
                    <div className="alert__body">
                      <span>{confirmEmailError}</span>
                    </div>
                  </div>
                }
                <LoaderButton
                  type="submit"
                  size="lg"
                  isLoading={isLoading}
                  text="Verify"
                  className="btn btn--primary type--uppercase"
                  disabled={!validateConfirmationForm()}
                />
                </form>
                <span className="type--fine-print block">Didn't receive an email? <div onClick={resendConfirmation} className="btn btn-link">Resend confirmation code</div>
                </span>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function renderForm() {
    return (
      <div className="main-container">
        <section className="height-70 text-center">
          <div className="container pos-vertical-center">
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <h2>Sign up</h2>
                <Form onSubmit={handleSubmit} className="text-left">
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
                      type="password"
                      size="lg"
                      value={fields.password}
                      onChange={handleFieldChange}
                    />
                    <Form.Text className="form-help-text">Password must be at least 8 characters long and include symbols, numbers, uppercase, and lowercase letters.</Form.Text>
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      size="lg"
                      onChange={handleFieldChange}
                      value={fields.confirmPassword}
                    />
                  </Form.Group>
                  {
                    signUpError &&
                    <div className="alert bg--error">
                      <div className="alert__body">
                        <span>{signUpError}</span>
                      </div>
                    </div>
                  }
                  <LoaderButton
                    type="submit"
                    size="lg"
                    text="Sign Up"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                    className="btn btn--primary type--uppercase"
                  />
                  <br />
                </Form>
                <span className="type--fine-print block">Have an account? <Link to={
                  props.location.search !== "" ? "/login?redirect=/checkout" : "/login"
                }>Log in</Link>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="main-container">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
