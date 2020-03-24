import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Auth } from 'aws-amplify';
import { CardElement, injectStripe } from "react-stripe-elements";
import { LinkContainer } from 'react-router-bootstrap';
import { LoaderButton } from "modules/LoaderButton";
import { useFormFields } from "libs/hooks";
import "./Checkout.css";

function BillingForm({ isLoading, onSubmit, isAuthenticated, ...props }: any) {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);

  const loading = isProcessing || isLoading;

  function validateForm() {
    return (
      fields.name !== "" &&
      isCardComplete
    );
  }

  function renderEmailForm() {
    return (
      <div>
        <Form.Group controlId="email">
          <Row>
            <Col sm={6}>
              <LinkContainer to="/login?redirect=/checkout">
                <Button className="login" variant="primary" block>
                  Log in
                </Button>
              </LinkContainer>
            </Col>
            <Col sm={6}>
              <LinkContainer to="/signup?redirect=/checkout">
                <Button className="login" variant="light" block size="lg">
                  Sign up
                </Button>
              </LinkContainer>
            </Col>
          </Row>
          <p>or continue as guest</p>
          <Form.Label>Email address <span className="sublabel">Required</span></Form.Label>
          <Form.Control
            type="text"
            value={fields.email}
            required={!props.isAuthenticated}
            onChange={handleFieldChange}
            placeholder="Email address"
          />
        </Form.Group>
        <hr />
      </div>
    );
  }

  async function handleSubmitClick(event: any) {
    event.preventDefault();

    setIsProcessing(true);

    const { token, error } = await props.stripe.createToken({ name: fields.name });
    const email = isAuthenticated ? (await Auth.currentAuthenticatedUser()).attributes.email : fields.email;

    setIsProcessing(false);

    onSubmit(props.orders, email, isAuthenticated, { token, error });
  }

  return (
    <form className="BillingForm" onSubmit={handleSubmitClick}>
      {!isAuthenticated && renderEmailForm()}
      <Form.Group controlId="name">
        <Form.Label>Cardholder&apos;s name <span className="sublabel">Required</span></Form.Label>
        <Form.Control
          type="text"
          value={fields.name}
          onChange={handleFieldChange}
          placeholder="Name on the card"
        />
      </Form.Group>
      <Form.Label>Card details <span className="sublabel">Required</span></Form.Label>
      <CardElement
        className="card-field"
        onChange={e => setIsCardComplete(e.complete)}
        style={{
          base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif' }
        }}
      />
      <LoaderButton
        block
        type="submit"
        size="lg"
        text="Purchase"
        isLoading={loading}
        disabled={!validateForm()}
      />
    </form>
  );
}

export default injectStripe(BillingForm);
