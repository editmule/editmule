// @ts-nocheck
import React, { useRef, useState } from 'react';
import { FormGroup, FormControl, ControlLabel, Form, Row, Col, Radio, Label } from 'react-bootstrap';

import { LoaderButton } from 'modules/LoaderButton';
import './Order.css';

export default function Configuration(props: any) {

  function validateForm() {
    return (props.wordcount && props.delivery);
  }

  if (props.currentStep !== 1) {
    return null
  }

  return (
    <div>
      <Row>
        <Col sm={8}>
          <h1>On-demand editing by a human</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque maximus dictum. Morbi magna nulla, sollicitudin sed tellus eget, sodales tincidunt libero. Aliquam aliquam mi ac blandit finibus.</p>
        </Col>
        <Col sm={4}>
            <FormGroup
              controlId="wordcount"
              onChange={e => props.setWordcount(parseInt(((e.target as HTMLTextAreaElement).value),10))}
            >
              <ControlLabel>Select word count</ControlLabel>
              <Radio name="wordcount" value="50">
                50 - $5
              </Radio>
              <Radio name="wordcount" value="100" >
                100 - $7
              </Radio>
              <Radio name="wordcount" value="200">
                200 - $14
              </Radio>
              <Radio name="wordcount" value="300">
                300 - $20
              </Radio>
              <Radio name="wordcount" value="500">
                500 - $27
              </Radio>
              <Radio name="wordcount" value="1000">
                1,000 - $45
              </Radio>
              <Radio name="wordcount" value="2000">
                2,000 - $80
              </Radio>
              <Radio name="wordcount" value="3000">
                3,000 - $150
              </Radio>
              <Radio name="wordcount" value="5000">
                5,000 - $250
              </Radio>
              <Radio name="wordcount" value="10000">
                10,000 - $450
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
              <ControlLabel>Select delivery</ControlLabel>
              <Radio defaultChecked required name="delivery" value="24">
                24 hours
              </Radio>
              <Radio name="delivery" value="48">
                48 hours (-15%)
              </Radio>
              <Radio name="delivery" value="72">
                72 hours (-25%)
              </Radio>
            </FormGroup>
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
