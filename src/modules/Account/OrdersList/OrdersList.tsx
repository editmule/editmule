// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import ReactGA from 'react-ga';

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { subtotalPricing } from 'libs/utils';
import './OrdersList.css';

export default function OrdersList(props: any) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(location.pathname + location.search);

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

  function formatFilename(str: string) {
    return str.replace(/^\w+-/, "");
  }

  function truncate(input: string) {
    if (input.length > 20)
      return input.substring(0, 20) + '...';
    else
      return input;
  };

  function renderContent() {
    return (
      (orders !== [{}] && orders.length >= 1) ?
        <table>
          <thead>
            <tr>
              <th className="border-bottom">Document</th>
              <th className="border-bottom">Word count</th>
              <th className="border-bottom">Delivery</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Total</th>
            </tr>
          </thead>
          <tbody>
            {renderOrdersList(orders)}
          </tbody>
        </table>
      :
      <section className="height-30 text-center">
        <div className="container pos-vertical-center">
          <div className="row">
            <div className="col-md-12">
              <h2>You have no orders!</h2>
              <Link to="/order">Add an order</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function renderOrdersList(orders: any) {
    return (orders).map((order: any, index: number) => (
      <LinkContainer key={index} to={`/account/orders/` + order.orderId}>
        <tr>
          <td>{order.content ? <span data-tooltip={order.content}>{truncate(order.content)}</span>
            : formatFilename(order.attachment)}</td>
          <td>{order.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{order.delivery} hours</td>
          <td>{order.status}</td>
          <td>${(subtotalPricing(order.wordcount, order.delivery)*1.15).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        </tr>
      </LinkContainer>
    ));
  }

  return (
    <div className="">
      <h4>Orders</h4>
      { isLoading ?
        <section className="height-30 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </section>
        : renderContent()
      }
    </div>
  );
}
