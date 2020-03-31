import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { LoaderButton } from "modules/LoaderButton";
import ReactGA from 'react-ga';

import "./Settings.css";

export default function Settings(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(location.pathname + location.search);
  }, []);

  return (
    <div className="Settings">
      <h4>Settings</h4>
      <div className="row">
        <LinkContainer to="/account/settings/email">
          <LoaderButton
            size="lg"
            className="btn btn--primary"
            text="Change Email"
          />
        </LinkContainer>
      </div>
      <div className="row">
        <LinkContainer to="/account/settings/password">
          <LoaderButton
            size="lg"
            className="btn btn--primary"
            text="Change Password"
          />
        </LinkContainer>
      </div>
    </div>
  );
}
