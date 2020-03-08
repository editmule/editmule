import React, { useRef, useState } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { API } from 'aws-amplify';
import { s3Upload } from 'libs/aws';

import { LoaderButton } from 'modules/LoaderButton';
import config from 'config';
import './Order.css';

export default function NewNote(props: any) {
  const file = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event: any) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    // @ts-ignore
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      // @ts-ignore
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
        1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      const attachment = file.current
        ? await s3Upload(file.current)
        : null;

      await createNote({ content, attachment });
      props.history.push("/account/orders");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  function createNote(order: any) {
    return API.post("orders", "/orders", {
      body: order
    });
  }

  return (
    <div className="NewNote">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent((e.target as HTMLTextAreaElement).value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          text="Create"
          isLoading={isLoading}
          disabled={!validateForm()}
        />
      </form>
    </div>
  );
}