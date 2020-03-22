import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { CardElement, injectStripe } from "react-stripe-elements";
import { LoaderButton } from "modules/LoaderButton";
import { useFormFields } from "libs/hooks";
import "./Checkout.css";

function BillingForm({ isLoading, onSubmit, ...props }: any) {
  const [fields, handleFieldChange] = useFormFields({
    name: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);

  isLoading = isProcessing || isLoading;

  function validateForm() {
    return (
      fields.name !== "" &&
      isCardComplete
    );
  }

  async function handleSubmitClick(event: any) {
    event.preventDefault();

    setIsProcessing(true);

    const { token, error } = await props.stripe.createToken({ name: fields.name });

    setIsProcessing(false);

    onSubmit(props.orders, { token, error });
  }

  return (
    <form className="BillingForm" onSubmit={handleSubmitClick}>
      <FormGroup bsSize="large" controlId="name">
        <ControlLabel>Cardholder&apos;s name</ControlLabel>
        <FormControl
          type="text"
          value={fields.name}
          onChange={handleFieldChange}
          placeholder="Name on the card"
        />
      </FormGroup>
      <ControlLabel>Credit Card Info</ControlLabel>
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
        bsSize="large"
        text="Purchase"
        isLoading={props.isLoading}
        disabled={!validateForm()}
      />
    </form>
  );
}

export default injectStripe(BillingForm);
