// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";
import { Modal, Button, PageHeader, Table, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { wordcountToPricing, deliveryToPricing, taxesToPricing, totalPricing, subtotalPricing} from 'libs/utils';

import config from 'config';
import BillingForm from './BillingForm';
import OrderRow from './OrderRow';
import './Checkout.css';

export default function Checkout(props: any) {
  const initialOrders = loadCart();
  const [orders, setOrders] = useState(initialOrders);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const finalSubTotal = (Number(orders.reduce((prev,next) => prev + subtotalPricing(next.wordcount, next.delivery), 0))).toFixed(2);
  const serviceFee = (Number(finalSubTotal * 0.15)).toFixed(2);
  // const finalTax = (Number(taxesToPricing(Number(finalSubTotal)+Number(serviceFee), 0.09))).toFixed(2);
  const grandTotal = (+finalSubTotal + +serviceFee).toFixed(2);

  function billUser(details: any) {
    return API.post('orders', '/billing', {
      body: details
    });
  }

  function loadCart() {
    // @ts-ignore
    return localStorage.getItem('EditMuleCart') ? JSON.parse(window.localStorage.getItem('EditMuleCart')) : [{}];
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

  function calculateSalesTax() {
    return 0.0925;
  }

  function renderOrderSummary(orders: Array) {
    return orders.map((order, index) =>
      <OrderRow
        item={'Professional editing'}
        price={subtotalPricing(order.wordcount, order.delivery).toFixed(2)}
        subtitle={`${order.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} words, ${order.delivery} hour delivery`}
      />
    );
  }

  return (
    <div className="Checkout">
      <Row>
        <PageHeader>Checkout</PageHeader>
        <Col sm={8}>
        <StripeProvider apiKey={config.STRIPE_KEY}>
          <Elements>
            <BillingForm
              orders={orders}
            />
          </Elements>
        </StripeProvider>
        </Col>
        <Col sm={4} className="OrderSummary">
          <h3>Order Summary </h3>
          <hr />
          {!isLoading && renderOrderSummary(orders)}
          <span><Link to="/cart">edit</Link></span>
          <hr />
          <Table condensed>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td align="right">${finalSubTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
              <tr>
                <td>Service Fee <FontAwesomeIcon className="info-modal" icon={faInfoCircle} onClick={()=>setInfoModalOpen(true)}/></td>
                <td align="right">${serviceFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Table condensed>
            <tbody>
              <tr>
                <td className="summary-item">Total</td>
                <td className="summary-item" align="right">${grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={infoModalOpen} onHide={()=>setInfoModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>What's a service fee?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit Mule orders include a service fee equal to 15% of the subtotal. This fee helps to keep our platform up and running.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setInfoModalOpen(false)}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// <Table condensed>
//   <tbody>
//     <tr>
//       <td>Taxes</td>
//       <td align="right">${finalTax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
//     </tr>
//   </tbody>
// </Table>
// <hr />
