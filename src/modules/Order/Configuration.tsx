// @ts-nocheck
import React from 'react';
import { Form, Row, Col, Table } from 'react-bootstrap';
import { wordcountToPricing, deliveryToPricing, subtotalPricing } from 'libs/utils';

import { LoaderButton } from 'modules/LoaderButton';
import ConfigRow from './ConfigRow';
import './Order.css';

export default function Configuration(props: any) {

  function validateForm() {
    return (props.wordcount && props.delivery);
  }

  if (props.currentStep !== 1) {
    return null
  }

  function renderPrices() {
    const prices = [100, 200, 300, 500, 1000, 2000, 3000, 5000, 10000]
    return prices.map((price, index) =>
      <Form.Check
        type="radio"
        name="wordcount"
        label={
          <ConfigRow wordcount={price} />
        }
        value={price} />
    );
  }

  return (
    <div className="Configuration">
      <Row>
        <Col sm={7}>
          <h1>On-demand editing by a human</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque maximus dictum. Morbi magna nulla, sollicitudin sed tellus eget, sodales tincidunt libero. Aliquam aliquam mi ac blandit finibus.</p>
        </Col>
        <Col sm={5}>
          <Form.Group
            controlId="wordcount"
            onChange={e => props.setWordcount(parseInt(((e.target as HTMLTextAreaElement).value), 10))}
          >
            <Form.Label>Select word count</Form.Label>
            <Form.Check
              type="radio"
              name="wordcount"
              label={
                <Table>
                  <tbody>
                    <tr>
                      <td>{50}</td>
                      <td>${Number(wordcountToPricing(50)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              }
              value={50} />
            {renderPrices()}
            <Form.Check
              required
              type="radio"
              name="wordcount"
              value="custom"
              label={
                <Form.Control
                  type="text"
                  placeholder="Enter word count"
                />
              }/>
          </Form.Group>
          <Form.Group
            controlId="delivery"
            onChange={e => props.setDelivery((e.target as HTMLTextAreaElement).value)}
            required
          >
            <Form.Label>Select guaranteed delivery</Form.Label>
            <Form.Check
              type="radio"
              name="delivery"
              defaultChecked
              required
              label={
                <Table>
                  <tbody>
                    <tr>
                      <td>24 hours</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              }
              value={24} />
            <Form.Check
              type="radio"
              name="delivery"
              label={
                <Table>
                  <tbody>
                    <tr>
                      <td>{48} hours</td>
                      <td></td>
                      <td style={{ color: 'green' }}>{(props.wordcount >= 1) && '-$' + (Number(-1 * deliveryToPricing(props.wordcount, 48)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</td>
                    </tr>
                  </tbody>
                </Table>
              }
              value={48} />
            <Form.Check
              type="radio"
              name="delivery"
              label={
                <Table>
                  <tbody>
                    <tr>
                      <td>{72} hours</td>
                      <td></td>
                      <td style={{ color: 'green' }}>{(props.wordcount >= 1) && '-$' + (Number(-1 * deliveryToPricing(props.wordcount, 72)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</td>
                    </tr>
                  </tbody>
                </Table>
              }
              value={72} />
          </Form.Group>
          {(props.wordcount >= 1) &&
            <Form.Label>
              Subtotal: ${Number(subtotalPricing(props.wordcount, props.delivery)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Form.Label>
          }
          <LoaderButton
            block
            size="lg"
            variant="primary"
            text="Continue"
            onClick={e => props.setCurrentStep(2)}
            disabled={!validateForm()}
          />
        </Col>
      </Row>
    </div>
  );
}
