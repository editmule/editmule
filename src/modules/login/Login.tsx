import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

import { Form } from 'react-bootstrap';

import { LoaderButton } from 'modules/LoaderButton';
import { useFormFields } from 'libs/hooks';
import './Login.css';

function Login(props: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
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
        <Link to="/login/reset">Forgot password?</Link>
        <LoaderButton
          block
          type="submit"
          size="lg"
          text="Login"
          isLoading={isLoading}
          disabled={!validateForm()}
        />
      </form>
    </div>
  );
}

export default Login;
