// @ts-nocheck

import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

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
      <FormGroup controlId="content">
        <ControlLabel>Google Docs Link</ControlLabel>
        <FormControl
          value={props.content}
          onChange={e => props.setContent((e.target as HTMLTextAreaElement).value)}
        />
      </FormGroup>
      or, attach a file
      <FormGroup controlId="file">
        <FormControl onChange={handleFileChange} type="file" />
      </FormGroup>
      <LoaderButton
        block
        bsSize="large"
        type="submit"
        bsStyle="primary"
        text="Continue"
        disabled={!validateForm()}
      />
    </div>
  );
}
