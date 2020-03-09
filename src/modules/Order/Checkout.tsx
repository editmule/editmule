// @ts-nocheck
import React, { useRef, useState } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Elements, StripeProvider } from "react-stripe-elements";
import { Row, Col, Radio, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { wordcountToPricing, deliveryToPricing, taxesToPricing, totalPricing} from 'libs/utils';

import { LoaderButton } from 'modules/LoaderButton';
import BillingForm from './BillingForm';
import './Order.css';

export default function Checkout(props: any) {
  const wordcountCost = wordcountToPricing(props.wordcount);
  const deliveryDiscount = deliveryToPricing(props.wordcount, props.delivery);
  const subtotal = wordcountCost + deliveryDiscount;
  const taxes = taxesToPricing(subtotal, 0.09);
  const total = totalPricing(props.wordcount, props.delivery, 0.09);

  if (props.currentStep !== 3) { // Prop: The current step
    return null
  }

  return (
    <div>
      <Row>
        <Col sm={8}>
          <h1>Checkout</h1>
          <hr/>
          <StripeProvider apiKey={props.config.STRIPE_KEY}>
            <Elements>
              <BillingForm
                wordcount={props.wordcount}
                delivery={props.delivery}
              />
            </Elements>
          </StripeProvider>
        </Col>
        <Col sm={4} className="OrderSummary">
          <h3>Order Summary</h3>
          <hr />
          <b className="font-weight-bold">Word Count: ${wordcountCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
          <p>{props.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <Link to="/order">edit</Link></p>
          <br />
          <b className="font-weight-bold">Delivery: ${deliveryDiscount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
          <p>{props.delivery} hours <Link to="/order">edit</Link></p>
          <br />
          <b className="font-weight-bold">Subtotal: ${subtotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
          <p>Tax: ${taxes.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          <hr/>
          <b>Total: ${total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
        </Col>
      </Row>
    </div>
  );
}
