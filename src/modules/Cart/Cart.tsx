// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Button, PageHeader, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { subtotalPricing } from 'libs/utils';

import { LoaderButton } from 'modules/LoaderButton';
import './Cart.css';

export default function Cart(props: any) {
  const initialOrders = loadCart();
  const initialSubTotal = calculateSubTotal(initialOrders);

  const [orders, setOrders] = useState(initialOrders);
  const [subtotal, setSubTotal] = useState(initialSubTotal);
  const [isLoading] = useState(false);

  // Refresh persistent localStorage and subtotal when "orders" state changes
  useEffect(() => {
    localStorage.setItem('EditMuleCart', JSON.stringify(orders));
    setSubTotal(calculateSubTotal(orders).toFixed(2));
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
          <Button bsStyle="link" onClick={!isLoading ? handleDelete.bind(this, index) : null}>Delete</Button>
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
    <div className="Cart">
      <PageHeader>Cart</PageHeader>
      {(orders !== [{}] && orders.length >= 1) ?
        <Row>
          <Col sm={8}>
            <ListGroup>
              {!isLoading && renderOrdersList(orders)}
            </ListGroup>
          </Col>
          <Col sm={4}>
            <h3><b>Subtotal: ${subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b></h3>
            <br />
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              text="Checkout"
              onClick={e => (props.history.push('/checkout'))}
            />
            <br />
            <Link to="/order">
              <b>Or add another order</b>
            </Link>
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
    </div>
  );
}
