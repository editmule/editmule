import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Form } from "react-bootstrap";
import { LoaderButton } from "modules/LoaderButton";
import "./ChangeEmail.css";

interface AppProps {
  history: any;
}

interface AppState {
  code: string,
  email: string,
  codeSent: boolean,
  isConfirming: boolean,
  isSendingCode: boolean
}

export default class ChangeEmail extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      code: "",
      email: "",
      codeSent: false,
      isConfirming: false,
      isSendingCode: false
    };
  }

  validatEmailForm() {
    return this.state.email.length > 0;
  }

  validateConfirmForm() {
    return this.state.code.length > 0;
  }

  handleChange = (event: any) => {
    // @ts-ignore
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleUpdateClick = async (event: any) => {
    event.preventDefault();

    this.setState({ isSendingCode: true });

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { email: this.state.email });

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
      await Auth.verifyCurrentUserAttributeSubmit("email", this.state.code);

      this.props.history.push("/account/settings");
    } catch (e) {
      alert(e.message);
      this.setState({ isConfirming: false });
    }
  };

  renderUpdateForm() {
    return (
      <Form onSubmit={this.handleUpdateClick}>
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
          text="Update Email"
          className="btn btn-primary"
          disabled={!this.validatEmailForm()}
          isLoading={this.state.isSendingCode}
        />
      </Form>
    );
  }

  renderConfirmationForm() {
    return (
      <Form onSubmit={this.handleConfirmClick}>
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
        <LoaderButton
          type="submit"
          size="lg"
          text="Confirm"
          className="btn btn-primary"
          isLoading={this.state.isConfirming}
          disabled={!this.validateConfirmForm()}
        />
      </Form>
    );
  }

  render() {
    return (
      <div className="ChangeEmail">
        <h4>Settings</h4>
        {!this.state.codeSent
          ? this.renderUpdateForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
