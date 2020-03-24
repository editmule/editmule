// @ts-nocheck
import React, { useState } from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";
import { API } from 'aws-amplify';
import { Modal, Button, PageHeader, Table, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { subtotalPricing } from 'libs/utils';

import config from 'config';
import BillingForm from './BillingForm';
import OrderRow from './OrderRow';
import './Checkout.css';

export default function Checkout(props: any) {
  const initialOrders = loadCart();
  const [orders] = useState(initialOrders);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const finalSubTotal = (Number(orders.reduce((prev, next) => prev + subtotalPricing(next.wordcount, next.delivery), 0))).toFixed(2);
  const serviceFee = (Number(finalSubTotal * 0.15)).toFixed(2);
  // const finalTax = (Number(taxesToPricing(Number(finalSubTotal)+Number(serviceFee), 0.09))).toFixed(2);
  const grandTotal = (+finalSubTotal + +serviceFee).toFixed(2);

  function billUser(data: any) {
    return API.post('orders', data.isAuthenticated ? '/billing' : '/guestbilling', {
      body: data
    });
  }

  function loadCart() {
    // @ts-ignore
    return localStorage.getItem('EditMuleCart') ? JSON.parse(window.localStorage.getItem('EditMuleCart')) : [{}];
  }

  async function handleFormSubmit(orders: Array, email: string, isAuthenticated: boolean, { token, error }: any) {
    if (error) {
      alert(error);
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Authorize payment (but don't charge until orders complete)
      const response = await billUser({
        orders,
        email: email,
        isAuthenticated: isAuthenticated,
        source: token.id
      });

      alert("Your card has been charged successfully!");

      // Clear cart
      localStorage.setItem('EditMuleCart', JSON.stringify([]));

      setIsLoading(false);
      if (props.isAuthenticated) {
        props.history.push("/account/orders");
      } else {
        props.history.push(`/thanks/${response.orders[0].orderNum}`);
      }
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  function renderOrderSummary(orders: Array) {
    return orders.map((order, index) =>
      <OrderRow
        item={'Professional editing'}
        key={index}
        price={subtotalPricing(order.wordcount, order.delivery).toFixed(2)}
        subtitle={`${order.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} words, ${order.delivery} hour delivery`}
      />
    );
  }

  return (
    <div>
      <PageHeader>Checkout</PageHeader>
      {(orders !== [{}] && orders.length >= 1) ?
        <Row>
          <Col sm={8}>
            <StripeProvider apiKey={config.STRIPE_KEY}>
              <Elements>
                <BillingForm
                  orders={orders}
                  isLoading={isLoading}
                  onSubmit={handleFormSubmit}
                  isAuthenticated={props.isAuthenticated}
                />
              </Elements>
            </StripeProvider>
          </Col>
          <Col sm={4} className="OrderSummary">
            <h3>Order Summary <span className="order-summary-edit"><Link to="/cart">edit</Link></span></h3>
            <hr />
            {renderOrderSummary(orders)}
            <hr />
            <Table condensed>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td align="right">${finalSubTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                </tr>
                <tr>
                  <td>Service Fee <FontAwesomeIcon className="info-modal" icon={faInfoCircle} onClick={() => setInfoModalOpen(true)} /></td>
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
        :
        <div>
          <p>Your cart is empty!</p>
          <Link to="/order">
            <b>Add an order</b>
          </Link>
        </div>
      }
        <Modal show={infoModalOpen} onHide={() => setInfoModalOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>What's a service fee?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Edit Mule orders include a service fee equal to 15% of the subtotal. This fee helps to keep our platform up and running.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setInfoModalOpen(false)}>
              Got it
          </Button>
          </Modal.Footer>
        </Modal>
    </div>
      );
    }
