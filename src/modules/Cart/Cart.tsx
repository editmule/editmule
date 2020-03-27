// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Modal, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { subtotalPricing } from 'libs/utils';

import { LoaderButton } from 'modules/LoaderButton';
import './Cart.css';

export default function Cart(props: any) {
  const initialOrders = loadCart();
  const initialSubTotal = calculateSubTotal(initialOrders);
  const initialServiceFee = (Number(initialSubTotal * 0.15)).toFixed(2);
  const initialGrandTotal = (+initialSubTotal + +initialServiceFee).toFixed(2);

  const [orders, setOrders] = useState(initialOrders);
  const [subtotal, setSubTotal] = useState(initialSubTotal);
  const [serviceFee, setServiceFee] = useState(initialServiceFee);
  const [grandTotal, setGrandTotal] = useState(initialGrandTotal);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [isLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  // Refresh persistent localStorage and subtotal when "orders" state changes
  useEffect(() => {
    localStorage.setItem('EditMuleCart', JSON.stringify(orders));
    const newSubtotal = calculateSubTotal(orders).toFixed(2);
    const newServiceFee = (Number(newSubtotal * 0.15)).toFixed(2);
    setSubTotal(newSubtotal);
    setServiceFee(newServiceFee);
    setGrandTotal((+newSubtotal + +newServiceFee).toFixed(2));
  }, [orders]);

  function loadCart() {
    // Initialize an empty cart if 'EditMuleCart' is not yet set (i.e. incognito browsers or new users)
    if (!localStorage.getItem('EditMuleCart')) localStorage.setItem('EditMuleCart', JSON.stringify([]));

    return JSON.parse(localStorage.getItem('EditMuleCart'));
  }

  function calculateSubTotal(orders: any) {
    return orders.reduce((subtotal, curr) => (
      subtotal += subtotalPricing(curr.wordcount, curr.delivery)
    ), 0);
  }

  function handleDelete(index: number, event: any) {
    const oldOrders = orders;
    const newOrders = oldOrders.slice(0, index - 1).concat(oldOrders.slice(index, oldOrders.length))
    setOrders(newOrders);
  }

  function renderOrdersList(orders: any) {
    return [{}].concat(orders).map((order: any, index) =>
      index !== 0 ? (
        <ListGroupItem key={index} header={order.content.trim().split("\n")[0]}>
          {"Wordcount: " + order.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '\n'}
          {"Delivery: " + order.delivery + " hours\n"}
          {"Cost: $" + subtotalPricing(order.wordcount, order.delivery).toFixed(2) + '\n'}
          <Button variant="link" onClick={!isLoading ? handleDelete.bind(this, index) : null}>Delete</Button>
        </ListGroupItem>
      ) : (
          <LinkContainer key="new" to="/order">
            <ListGroupItem>
              <h4>
                <b>{"\uFF0B"}</b> Create a new order
              </h4>
            </ListGroupItem>
          </LinkContainer>
        )
    );
  }

  return (
    <div className="main-container">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Cart</h1>
              <hr />
            </div>
          </div>
        </div>
      </section>
      {(orders !== [{}] && orders.length >= 1) ?
        <section>
          <div className="container">
            <Row>
              <Col sm={8}>
                <ListGroup>
                  {!isLoading && renderOrdersList(orders)}
                </ListGroup>
              </Col>
              <div class="col-md-4">
                <div class="boxed boxed--border">
                  <div class="col-12">
                    <h3>Order Summary</h3>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <span class="h5">Order Subtotal:</span>
                    </div>
                    <div class="col-4 text-right">
                      <span>${subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <span class="h5">Service Fee: <FontAwesomeIcon className="info-modal" icon={faInfoCircle} onClick={() => setInfoModalOpen(true)} /></span>
                    </div>
                    <div class="col-4 text-right">
                      <span>${serviceFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-8">
                      <span class="h5">Total:</span>
                    </div>
                    <div class="col-4 text-right">
                      <span class="h5">${grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                  </div>
                </div>
                <LoaderButton
                  block
                  type="submit"
                  className="btn btn--primary"
                  size="lg"
                  text="Continue"
                  onClick={e => (props.history.push('/checkout'))}
                />
                <br />
                <span className="type--fine-print block">or <Link to="/order">add another order</Link></span>
              </div>
            </Row>
          </div>
        </section>
        :
        <section className="height-30 text-center">
          <div className="container pos-vertical-center">
            <div className="row">
              <div className="col-md-12">
                <h2>Your cart is empty!</h2>
                <Link to="/order">Add an order</Link>
              </div>
            </div>
          </div>
        </section>
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
