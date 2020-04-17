import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { CardElement, injectStripe } from "react-stripe-elements";
import { LinkContainer } from 'react-router-bootstrap';
import { LoaderButton } from "modules/LoaderButton";
import { useFormFields } from "libs/hooks";
import "./Checkout.css";

function BillingForm({ checkoutError, isLoading, onSubmit, isAuthenticated, ...props }: any) {
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
      <div className="row">
        <div className="col-sm-6">
          <LinkContainer to="/login?redirect=/checkout">
            <div className="btn block btn--primary">
              <div className="btn__text">Log in</div>
            </div>
          </LinkContainer>
        </div>
        <div className="col-sm-6">
          <LinkContainer to="/signup?redirect=/checkout">
            <div className="btn block">
              <div className="btn__text">Sign Up</div>
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
      </div>
    );
  }

  async function handleSubmitClick(event: any) {

    event.preventDefault();

    setIsProcessing(true);

    const { token, error } = await props.stripe.createToken({ name: fields.name });
    const email = isAuthenticated ? (await Auth.currentAuthenticatedUser()).attributes.email.toLowerCase() : fields.email.toLowerCase();

    setIsProcessing(false);

    onSubmit(props.orders, email, isAuthenticated, { token, error });
  }

  return (
    <form className="BillingForm" onSubmit={handleSubmitClick}>
      {!isAuthenticated && renderEmailForm()}
      <div className="row">
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
      </div>
      <div className="row">
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
      </div>
      {
        checkoutError &&
        <div className="row">
          <div className="col-12">
            <div className="alert bg--error">
              <div className="alert__body">
                <span>{checkoutError}</span>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="row">
        <div className="col-12">
          <LoaderButton
            type="submit"
            size="lg"
            text="Place your order"
            className="btn btn--primary type--uppercase"
            isLoading={loading}
            disabled={!validateForm()}
          />
        </div>
      </div>
    </form>
  );
}

export default injectStripe(BillingForm);
