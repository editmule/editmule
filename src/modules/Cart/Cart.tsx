// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap';
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

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
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
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

  function formatFilename(str: string) {
    return str.replace(/^\w+-/, "");
  }

  function truncate(input) {
    if (input.length > 20)
      return input.substring(0, 20) + '...';
    else
      return input;
  };

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
    return [{}].concat(orders).map((order: any, index) => (
      index !== 0 ?
        <tr key={index}>
          <td>{order.content ? <span className="btn btn-link" data-tooltip={order.content}>{truncate(order.content)}</span>
            : formatFilename(order.attachment)}</td>
          <td>{order.wordcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{order.delivery} hours</td>
          <td>${subtotalPricing(order.wordcount, order.delivery).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td><span data-tooltip="Delete document"><FontAwesomeIcon className="info-modal" icon={faTimesCircle} onClick={!isLoading ? handleDelete.bind(this, index) : null} /></span></td>
        </tr>
        : null
    ));
  }

  return (
    <div className="main-container">
      <section className="space--xs">
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
            <div className="row">
              <div className="col-md-8">
                <table>
                  <thead>
                    <tr>
                      <th className="border-bottom">Document</th>
                      <th className="border-bottom">Word count</th>
                      <th className="border-bottom">Delivery</th>
                      <th className="border-bottom">Total</th>
                      <th className="border-bottom"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {!isLoading && renderOrdersList(orders)}
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <div className="boxed boxed--border">
                  <div className="col-12">
                    <h3>Order Summary</h3>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <span className="h5">Order Subtotal:</span>
                    </div>
                    <div className="col-4 text-right">
                      <span>${subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
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
                <LoaderButton
                  type="submit"
                  className="btn btn--primary type--uppercase"
                  size="lg"
                  text="Proceed to checkout"
                  onClick={e => (props.history.push('/checkout'))}
                />
                <br />
                <span className="type--fine-print block">or <Link to="/order">add another order</Link></span>
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

//
// <div ref={node} className={`modal-container ${infoModalOpen ? 'modal-active' : null}`}>
//   <div className="modal-content rounded">
//     <div className="boxed boxed--lg">
//       <h2>What's a service fee?</h2>
//       <hr className="short" />
//       <p className="lead">
//         Edit Mule orders include a service fee equal to 15% of the order subtotal. This fee helps to keep our platform up and running.
//       </p>
//     </div>
//   </div>
// </div>
