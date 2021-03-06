// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { validateURL } from 'libs/utils';
import { LoaderButton } from 'modules/LoaderButton';
import './Order.css';

export default function Upload(props: any) {

  const [showDocumentUpload, setShowDocumentUpload] = useState(false);
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleFileChange(event: any) {
    props.file.current = event.target.files ? event.target.files[0] : null;
    if (props.file.current && props.file.current.name !== "") {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }

  function renderFileUpload() {
    return (props.isAuthenticated ?
      <>
        <hr data-title="Or attach a file" />
        <Form.Group controlId="file">
          <Form.Control onChange={handleFileChange} type="file" />
          <span className="type--fine-print block">or <div onClick={handleDocumentUploadCancel} className="a-link">cancel</div></span>
        </Form.Group>
      </>
    :
      <>
        <hr />
        <p className="text-center">Oops! You must be logged in to upload a file. <Link to="/login?redirect=/order">Log in</Link></p>
      </>);
  }

  function handleDocumentUpload(event: any) {
    props.setContent("");
    setShowDocumentUpload(true);
  }

  function handleDocumentUploadCancel(event: any) {
    event.target.value = null;
    handleFileChange(event);
    setShowDocumentUpload(false);
  }

  function handleLinkChange(event: any) {
    props.setContent((event.target as HTMLTextAreaElement).value);
    setValidated(validateURL((event.target as HTMLTextAreaElement).value));
  }

  if (props.currentStep !== 2) {
    return null
  }

  return (
    <div className="row justify-content-around height-60">
      <div className="col-md-6 col-lg-5">
        <div>
          <h2>Link your document</h2>
          <p className="lead">
            We highly recommend sharing your document as a Google Docs link for ease of editing and commenting. Please make sure that your document is set to "Anyone with the link can edit". <a href="https://support.google.com/drive/answer/2494822" rel='noreferrer noopener' target="_blank">Learn more</a>
          </p>
        </div>
      </div>
      <div className="col-md-5 col-lg-5">
        <div className="boxed boxed--border">
          <label>Google Docs link</label>
          <input
            onChange={e => handleLinkChange(e)}
            value={props.content}
            className="validate-required"
            type="text"
            disabled={showDocumentUpload}
            name="Google Docs link" />
          <span className="type--fine-print block">or <div onClick={handleDocumentUpload} className="a-link">upload your document</div></span>
          {
            showDocumentUpload && renderFileUpload()

          }
          <br />
          <LoaderButton
            size="lg"
            type="submit"
            variant="primary"
            className="btn btn--primary type--uppercase"
            text="Continue"
            isLoading={props.isLoading}
            disabled={!validated}
          />
        </div>
      </div>
    </div>
  );
}
