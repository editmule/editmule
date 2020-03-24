// @ts-nocheck

import React from 'react';
import { Form } from 'react-bootstrap';

import { validateURL } from 'libs/utils';
import { LoaderButton } from 'modules/LoaderButton';
import './Order.css';

export default function Upload(props: any) {

  function validateForm() {
    return (validateURL(props.content) || props.file.current != null);
  }

  function handleFileChange(event: any) {
    props.file.current = event.target.files[0];
  }

  if (props.currentStep !== 2) {
    return null
  }

  return (
    <div>
      <Form.Group controlId="content">
        <Form.Label>Google Docs Link</Form.Label>
        <Form.Control
          value={props.content}
          onChange={e => props.setContent((e.target as HTMLTextAreaElement).value)}
        />
      </Form.Group>
      or, attach a file
      <Form.Group controlId="file">
        <Form.Control onChange={handleFileChange} type="file" />
      </Form.Group>
      <LoaderButton
        block
        size="lg"
        type="submit"
        variant="primary"
        text="Continue"
        disabled={!validateForm()}
      />
    </div>
  );
}
