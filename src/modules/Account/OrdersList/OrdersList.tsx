import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

import { ListGroup } from 'react-bootstrap'
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
          <ListGroup.Item>
            {order.content.trim().split("\n")[0] + "Created: " + new Date(order.createdAt).toLocaleString()}
          </ListGroup.Item>
        </LinkContainer>
      ) : (
          <LinkContainer key="new" to="/order">
            <ListGroup.Item>
              <h4>
                <b>{"\uFF0B"}</b> Create a new order
              </h4>
            </ListGroup.Item>
          </LinkContainer>
        )
    );
  }

  return (
    <div className="OrdersList orders">
      <div className="pb-2 mt-4 mb-2 border-bottom">
        Your Orders
      </div>
      <ListGroup>
        {!isLoading && renderOrdersList(orders)}
      </ListGroup>
    </div>
  );
}
