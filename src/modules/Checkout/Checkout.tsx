// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import { Elements, StripeProvider } from "react-stripe-elements";
import { API } from 'aws-amplify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import ReactGA from 'react-ga';

import config from 'config';
import { subtotalPricing } from 'libs/utils';
import BillingForm from './BillingForm';
import './Checkout.css';

export default function Checkout(props: any) {
  const initialOrders = loadCart();
  const [orders] = useState(initialOrders);
  const [checkoutError, setCheckoutError] = useState('');
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const node = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
      await billUser({
        orders,
        email: email,
        isAuthenticated: isAuthenticated,
        source: token.id
      });

      // Clear cart
      localStorage.setItem('EditMuleCart', JSON.stringify([]));

      setIsLoading(false);

      props.history.push("/thanks");

    } catch (e) {
      setCheckoutError("Uh oh, something went wrong. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <div className="main-container">
      <section className="space--xs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Secure Checkout</h1>
              <hr />
            </div>
          </div>
        </div>
      </section>
      {(orders !== [{}] && orders !== [] && orders.length >= 1) ?
        <section>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-7">
                <StripeProvider apiKey={config.STRIPE_KEY}>
                  <Elements>
                    <BillingForm
                      checkoutError={checkoutError}
                      orders={orders}
                      isLoading={isLoading}
                      onSubmit={handleFormSubmit}
                      isAuthenticated={props.isAuthenticated}
                    />
                  </Elements>
                </StripeProvider>
              </div>
              <div className="col-md-4">
                <div className="boxed boxed--border">
                <div className="row">
                  <div className="col-12">
                    <h3>Order Summary</h3>
                  </div>
                </div>
                  <div className="row">
                    <div className="col-8">
                      <span className="h5">Order Subtotal:</span>
                    </div>
                    <div className="col-4 text-right">
                      <span>${finalSubTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <span className="h5">Service Fee: <FontAwesomeIcon className="info-modal" icon={faInfoCircle} onClick={() => setInfoModalOpen(true)} /></span>
                    </div>
                    <div className="col-4 text-right">
                      <span>${serviceFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-8">
                      <span className="h5">Total:</span>
                    </div>
                    <div className="col-4 text-right">
                      <span className="h5">${grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      <Modal
        show={infoModalOpen}
        onHide={() => setInfoModalOpen(false)}
        centered
      >
        <Modal.Body className="fee-modal">
          <h2>What's a service fee?</h2>
          <hr className="short" />
          <p className="lead">
            Edit Mule orders include a service fee equal to 15% of the order subtotal. This fee helps to keep our platform up and running.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
