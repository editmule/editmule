// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { PageHeader, ListGroup, ListGroupItem, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { subtotalPricing } from 'libs/utils';

import { LoaderButton } from 'modules/LoaderButton';
import './Cart.css';

export default function Cart(props: any) {
  const [orders, setOrders] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      try {
        const orders = await loadCart();
        const subtotal = await calculateSubTotal(orders); //TODO: reduce cart by wordcount and delivery to price
        setOrders(orders);
        setSubTotal(subtotal.toFixed(2));
      } catch (e) {
        alert(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, []);

  function loadCart() {
    // @ts-ignore
    return localStorage.getItem('EditMuleCart') ? JSON.parse(localStorage.getItem('EditMuleCart')) : [];
  }

  function calculateSubTotal(orders: any){
    return orders.reduce((subtotal, curr) => (
      subtotal += subtotalPricing(curr.wordcount, curr.delivery)
    ), 0);
  }

  function renderOrdersList(orders: any) {
    return [{}].concat(orders).map((order: any, i) =>
      i !== 0 ? (
        <ListGroupItem key={i} header={order.content.trim().split("\n")[0]}>
          {"Wordcount: " + order.wordcount + '\n'}
          {"Delivery: " + order.delivery + " hours" + '\n'}
          {"Cost: " + subtotalPricing(order.wordcount, order.delivery) + '\n'}
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
      <Row>
        <Col sm={8}>
          <ListGroup>
            {!isLoading && renderOrdersList(orders)}
          </ListGroup>
          <Link to="/order">
            Add another order
          </Link>
        </Col>
        <Col sm={4}>
          <h2>Subtotal: ${subtotal}</h2>
          <LoaderButton
            block
            type="submit"
            bsSize="large"
            text="Checkout"
            onClick={e => (props.history.push('/checkout'))}
          />
        </Col>
      </Row>
    </div>
  );
}
