// @ts-nocheck
import React from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { wordcountToPricing, deliveryToPricing, taxesToPricing, totalPricing} from 'libs/utils';

import config from 'config';
import BillingForm from './BillingForm';
import OrderRow from './OrderRow';
import './Checkout.css';

export default function Checkout(props: any) {
  const wordcountCost = wordcountToPricing(props.wordcount);
  const deliveryDiscount = deliveryToPricing(props.wordcount, props.delivery);
  const subtotal = wordcountCost + deliveryDiscount;
  const taxes = taxesToPricing(subtotal, 0.09);
  const total = totalPricing(props.wordcount, props.delivery, 0.09);

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

  function createOrder(order: any) {
    return API.post("orders", "/orders", {
      body: order
    });
  }

  return (
    <div className="Checkout">
      <Row>
        <Col sm={8}>
          <h1>Checkout</h1>
          <hr/>
          <StripeProvider apiKey={config.STRIPE_KEY}>
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
          <OrderRow
            item={'Professional editing'}
            price={wordcountCost}
            subtitle={`${props.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} words`}
          />
          <br />
          <OrderRow
            item={'Guaranteed delivery'}
            price={deliveryDiscount}
            subtitle={`${props.delivery} hours`}
          />
          <br />

          <Table condensed>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td align="right">${subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
              <tr>
                <td>Sales tax</td>
                <td align="right">${taxes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
              <hr />
              <tr>
                <td className="summary-item">Total</td>
                <td className="summary-item" align="right">${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
