// @ts-nocheck

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { validateURL } from 'libs/utils';
import { LoaderButton } from 'modules/LoaderButton';
import './Order.css';

export default function Upload(props: any) {

  const [showDocumentUpload, setShowDocumentUpload] = useState(false);

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
    <div className="row justify-content-around">
      <div className="col-md-6 col-lg-5">
        <div>
          <h2>Link your document</h2>
          <p className="lead">
            We highly recommend sharing your document as a Google Docs link for ease of editing and commenting. Please make sure that your document is set to "Anyone with the link can edit". <a href="https://support.google.com/drive/answer/2494822" target="_blank">Learn more</a>
          </p>
        </div>
      </div>
      <div className="col-md-5 col-lg-5">
        <div className="boxed boxed--border">
          <label>Google Docs link</label>
          <input onChange={e => props.setContent((e.target as HTMLTextAreaElement).value)} value={props.content} className="validate-required" type="text" name="Google Docs link" />
          <span className="type--fine-print block">or <a onClick={e => setShowDocumentUpload(true)} href="#">upload your document</a></span>
          {
            showDocumentUpload &&
            <>
              <hr data-title="Or attach a file" />
              <Form.Group controlId="file">
                <Form.Control onChange={handleFileChange} type="file" />
              </Form.Group>
            </>
          }
          <br />
          <LoaderButton
            block
            size="lg"
            type="submit"
            variant="primary"
            className="btn btn--primary type--uppercase"
            text="Continue"
            disabled={!validateForm()}
          />
        </div>
      </div>
    </div>
  );
}
