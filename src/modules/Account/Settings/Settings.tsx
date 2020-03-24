import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { LoaderButton } from "modules/LoaderButton";
import "./Settings.css";

export default function Settings(props: any) {

  return (
    <div className="Settings">
      <div className="pb-2 mt-4 mb-2 border-bottom">
        Settings
      </div>
      <LinkContainer to="/account/settings/email">
        <LoaderButton
          block
          size="lg"
          text="Change Email"
        />
      </LinkContainer>
      <LinkContainer to="/account/settings/password">
        <LoaderButton
          block
          size="lg"
          text="Change Password"
        />
      </LinkContainer>
    </div>
  );
}
