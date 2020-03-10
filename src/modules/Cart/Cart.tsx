// @ts-nocheck
import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LoaderButton } from 'modules/LoaderButton';
import './Cart.css';

export default function Checkout(props: any) {

  function getCart() {
    let cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')) : {};

    console.log(cart);
  }

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <Row>
        <Col sm={8}>
          <p>item</p>
        </Col>
        <Col sm={4}>
          <h2>Subtotal: $50</h2>
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
