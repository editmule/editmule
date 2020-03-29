import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { LoaderButton } from "modules/LoaderButton";
import "./ResetPassword.css";

interface AppProps {

}

interface AppState {
  code: string,
  email: string,
  password: string,
  codeSent: boolean,
  confirmed: boolean,
  confirmPassword: string,
  isConfirming: boolean,
  isSendingCode: boolean
}

export default class ResetPassword extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      code: "",
      email: "",
      password: "",
      codeSent: false,
      confirmed: false,
      confirmPassword: "",
      isConfirming: false,
      isSendingCode: false
    };
  }

  validateCodeForm() {
    return this.state.email.length > 0;
  }

  validateResetForm() {
    return (
      this.state.code.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = (event: any) => {
    // @ts-ignore
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSendCodeClick = async (event: any) => {
    event.preventDefault();

    this.setState({ isSendingCode: true });

    try {
      await Auth.forgotPassword(this.state.email);
      this.setState({ codeSent: true });
    } catch (e) {
      alert(e.message);
      this.setState({ isSendingCode: false });
    }
  };

  handleConfirmClick = async (event: any) => {
    event.preventDefault();

    this.setState({ isConfirming: true });

    try {
      await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.code,
        this.state.password
      );
      this.setState({ confirmed: true });
    } catch (e) {
      alert(e.message);
      this.setState({ isConfirming: false });
    }
  };

  renderRequestCodeForm() {
    return (
      <Form onSubmit={this.handleSendCodeClick} className="text-left">
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <LoaderButton
          type="submit"
          size="lg"
          text="Send Confirmation"
          className="btn btn--primary type--uppercase"
          isLoading={this.state.isSendingCode}
          disabled={!this.validateCodeForm()}
        />
      </Form>
    );
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmClick} className="text-left">
        <Form.Group controlId="code">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            type="tel"
            value={this.state.code}
            onChange={this.handleChange}
          />
          <Form.Text>
            Please check your email ({this.state.email}) for the confirmation
            code.
          </Form.Text>
        </Form.Group>
        <hr />
        <Form.Group controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
        </Form.Group>
        <LoaderButton
          type="submit"
          size="lg"
          text="Confirm"
          className="btn btn--primary type--uppercase"
          isLoading={this.state.isConfirming}
          disabled={!this.validateResetForm()}
        />
      </form>
    );
  }

  renderSuccessMessage() {
    return (
      <div className="success">
        <FontAwesomeIcon icon={faCheck} />
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="main-container">
        <section className="height-70 text-center">
          <div className="container pos-vertical-center">
            <div className="col-md-7 col-lg-5">
              <h2>Reset password</h2>
              {!this.state.codeSent
                ? this.renderRequestCodeForm()
                : !this.state.confirmed
                  ? this.renderConfirmationForm()
                  : this.renderSuccessMessage()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
