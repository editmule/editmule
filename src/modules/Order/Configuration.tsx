// @ts-nocheck
import React from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col, Radio, Table, tr, td } from 'react-bootstrap';
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

  return (
    <div className="Configuration">
      <Row>
        <Col sm={7}>
          <h1>On-demand editing by a human</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque maximus dictum. Morbi magna nulla, sollicitudin sed tellus eget, sodales tincidunt libero. Aliquam aliquam mi ac blandit finibus.</p>
        </Col>
        <Col sm={5}>
            <FormGroup
              controlId="wordcount"
              onChange={e => props.setWordcount(parseInt(((e.target as HTMLTextAreaElement).value),10))}
            >
              <ControlLabel>Select word count</ControlLabel>
              <Radio name="wordcount" value={50}>
                <Table>
                  <tbody>
                    <tr>
                      <td>{50}</td>
                      <td>${Number(wordcountToPricing(50)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Radio>
              <Radio name="wordcount" value={100}>
                <ConfigRow wordcount={100} />
              </Radio>
              <Radio name="wordcount" value={200}>
                <ConfigRow wordcount={200} />
              </Radio>
              <Radio name="wordcount" value={300}>
                <ConfigRow wordcount={300} />
              </Radio>
              <Radio name="wordcount" value={500}>
                <ConfigRow wordcount={500} />
              </Radio>
              <Radio name="wordcount" value={1000}>
                <ConfigRow wordcount={1000} />
              </Radio>
              <Radio name="wordcount" value={2000}>
                <ConfigRow wordcount={2000} />
              </Radio>
              <Radio name="wordcount" value={3000}>
              <ConfigRow wordcount={3000} />
              </Radio>
              <Radio name="wordcount" value={5000}>
                <ConfigRow wordcount={5000} />
              </Radio>
              <Radio name="wordcount" value={10000}>
                <ConfigRow wordcount={10000} />
              </Radio>
              <Radio required name="wordcount" value="custom">
                <FormControl
                  type="text"
                  placeholder="Enter word count"
                />
              </Radio>
            </FormGroup>
            <FormGroup
              controlId="delivery"
              onChange={e => props.setDelivery((e.target as HTMLTextAreaElement).value)}
            >
              <ControlLabel>Select guaranteed delivery</ControlLabel>
              <Radio defaultChecked required name="delivery" value={24}>
                <Table>
                  <tbody>
                    <tr>
                      <td>24 hours</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Radio>
              <Radio name="delivery" value={48}>
                <Table>
                  <tbody>
                    <tr>
                      <td>48 hours</td>
                      <td></td>
                      <td style={{color: 'green'}}>{props.wordcount && '-$'+(Number(-1*deliveryToPricing(props.wordcount, 48)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</td>
                    </tr>
                  </tbody>
                </Table>
              </Radio>
              <Radio name="delivery" value={72}>
              <Table>
                <tbody>
                  <tr>
                    <td>72 hours</td>
                    <td></td>
                    <td style={{color: 'green'}}>{props.wordcount && '-$'+(Number(-1*deliveryToPricing(props.wordcount, 72)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}</td>
                  </tr>
                </tbody>
              </Table>
              </Radio>
            </FormGroup>
            {props.wordcount && <ControlLabel style={{ marginBottom: '16px'}}>Subtotal: ${subtotalPricing(props.wordcount, props.delivery).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</ControlLabel>}
            <LoaderButton
              block
              bsSize="large"
              bsStyle="primary"
              text="Continue"
              onClick={e=>props.setCurrentStep(2)}
              disabled={!validateForm()}
            />
        </Col>
      </Row>
    </div>
  );
}
