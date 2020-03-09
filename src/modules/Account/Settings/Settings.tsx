import React, { useState } from "react";
import { API } from 'aws-amplify';
import { PageHeader } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { LoaderButton } from "modules/LoaderButton";
import config from "config";
import "./Settings.css";

export default function Settings(props: any) {
  const [isLoading, setIsLoading] = useState(false);

  function billUser(details: any) {
    return API.post('orders', '/billing', {
      body: details
    });
  }

  async function handleFormSubmit(words: Number, { token, error }: any) {
    if (error) {
      alert(error);
      return;
    }

    setIsLoading(true);

    try {
      await billUser({
        words,
        source: token.id
      });

      alert("Your card has been charged successfully!");
      props.history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

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
