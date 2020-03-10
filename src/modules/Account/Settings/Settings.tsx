import React from "react";
import { PageHeader } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { LoaderButton } from "modules/LoaderButton";
import "./Settings.css";

export default function Settings(props: any) {

  return (
    <div className="Settings">
      <PageHeader>Settings</PageHeader>
      <LinkContainer to="/account/settings/email">
        <LoaderButton
          block
          bsSize="large"
          text="Change Email"
        />
      </LinkContainer>
      <LinkContainer to="/account/settings/password">
        <LoaderButton
          block
          bsSize="large"
          text="Change Password"
        />
      </LinkContainer>
    </div>
  );
}
