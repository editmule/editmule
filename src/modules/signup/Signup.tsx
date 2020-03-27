import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { Auth } from 'aws-amplify'
import { LoaderButton } from 'modules/LoaderButton';
import { useFormFields } from 'libs/hooks';
import './Signup.css';

export default function Signup(props: any) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
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
      alert(e.message);
      setIsLoading(false);
    }
  }

  async function handleConfirmationSubmit(event: any) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  function renderConfirmationForm() {
    return (
      <Form onSubmit={handleConfirmationSubmit}>
        <Form.Group controlId="confirmationCode">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            size="lg"
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
          <Form.Text>Please check your email for the code.</Form.Text>
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          size="lg"
          isLoading={isLoading}
          text="Verify"
          disabled={!validateConfirmationForm()}
        />
      </Form>
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
                      type="password"
                      size="lg"
                      value={fields.password}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      size="lg"
                      onChange={handleFieldChange}
                      value={fields.confirmPassword}
                    />
                  </Form.Group>
                  <LoaderButton
                    block
                    type="submit"
                    size="lg"
                    text="Sign Up"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                    className="btn btn--primary type--uppercase"
                  />
                  <br />
                </form>
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
