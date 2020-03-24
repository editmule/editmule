import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Form } from "react-bootstrap";
import { LoaderButton } from "modules/LoaderButton";
import "./ChangePassword.css";

interface AppProps {
  history: any;
}

interface AppState {
  password: string,
  oldPassword: string,
  isChanging: boolean,
  confirmPassword: string
}

export default class ChangePassword extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      password: "",
      oldPassword: "",
      isChanging: false,
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.oldPassword.length > 0 &&
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

  handleChangeClick = async (event: any) => {
    event.preventDefault();

    this.setState({ isChanging: true });

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentUser,
        this.state.oldPassword,
        this.state.password
      );

      this.props.history.push("/account/settings");
    } catch (e) {
      alert(e.message);
      this.setState({ isChanging: false });
    }
  };

  render() {
    return (
      <div className="ChangePassword">
        <Form onSubmit={this.handleChangeClick}>
          <Form.Group controlId="oldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              onChange={this.handleChange}
              value={this.state.oldPassword}
            />
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
            block
            type="submit"
            size="lg"
            text="Change Password"
            loadingText="Changing…"
            disabled={!this.validateForm()}
            isLoading={this.state.isChanging}
          />
        </Form>
      </div>
    );
  }
}
