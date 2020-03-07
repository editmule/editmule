import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

import { PageHeader, ListGroup, ListGroupItem  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './OrdersList.css';

export default function OrdersList(props: any) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      try {
        const orders = await loadOrders();
        setOrders(orders);
      } catch (e) {
        alert(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [props.isAuthenticated]);

  function loadOrders() {
    // @ts-ignore
    return API.get('orders', '/orders');
  }

  function renderOrdersList(orders: any) {
    return [{}].concat(orders).map((order: any, i) =>
      i !== 0 ? (
        <LinkContainer key={order.orderId} to={`/account/orders/${order.orderId}`}>
          <ListGroupItem header={order.content.trim().split("\n")[0]}>
            {"Created: " + new Date(order.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
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
    <div className="OrdersList orders">
      <PageHeader>Your Orders</PageHeader>
      <ListGroup>
        {!isLoading && renderOrdersList(orders)}
      </ListGroup>
    </div>
  );
}
