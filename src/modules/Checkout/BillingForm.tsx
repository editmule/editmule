import React, { useState } from "react";
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
    console.log(fields.name);
    return (
      fields.name !== "" &&
      isCardComplete
    );
  }

  function renderEmailForm() {
    return (
      <>
        <div className="col-sm-6">
          <LinkContainer to="/login?redirect=/checkout">
            <div className="btn block btn--primary">
              <span className="btn__text">Log in</span>
            </div>
          </LinkContainer>
        </div>
        <div className="col-sm-6">
          <LinkContainer to="/signup?redirect=/checkout">
            <div className="btn block">
              <span className="btn__text">Sign Up</span>
            </div>
          </LinkContainer>
        </div>
        <div className="col-12">
          <hr data-title="Or continue as a guest" />
          <label>Email address</label>
          <input
            className="validate-required"
            type="text"
            id="email"
            value={fields.email}
            required={!props.isAuthenticated}
            onChange={(e) => handleFieldChange(e)}
            placeholder="Email address"
          />
        </div>
      </ >
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
    <form className="BillingForm row" onSubmit={handleSubmitClick}>
      {!isAuthenticated && renderEmailForm()}
      <div className="col-12">
        <label>Cardholder&apos;s name</label>
        <input
          className="validate-required"
          type="text"
          id="name"
          value={fields.name}
          onChange={handleFieldChange}
          placeholder="Name on the card"
        />
      </div>
      <div className="col-12">
        <label>Card details</label>
        <CardElement
          className="card-field validate-required"
          onChange={e => setIsCardComplete(e.complete)}
          style={{
            base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif', fontWeight: 400 }
          }}
        />
      </div>
      <div className="col-12">
        <LoaderButton
          block
          type="submit"
          size="lg"
          text="Place your order"
          className="btn btn--primary type--uppercase"
          isLoading={loading}
          disabled={!validateForm()}
        />
      </div>
    </form>
  );
}

export default injectStripe(BillingForm);
