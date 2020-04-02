// @ts-nocheck

import React, { useRef, useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Form } from 'react-bootstrap';
import ReactGA from 'react-ga';

import { LoaderButton } from 'modules/LoaderButton';
import { s3Upload } from 'libs/aws';
import { validateURL } from 'libs/utils';
import config from 'config';

import './Orders.css';

export default function Orders(props: any) {
  const file = useRef(null);
  const [order, setOrder] = useState(null);
  const [content, setContent] = useState("");
  const [formValidated, setFormValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    function loadOrder() {
      // @ts-ignore
      return API.get('orders', `/orders/${props.match.params.id}`);
    }

    async function onLoad() {
      try {
        const order = await loadOrder();
        // @ts-ignore
        const { content, attachment } = order;

        if (attachment) {
          // @ts-ignore
          order.attachmentURL = await Storage.vault.get(attachment);
        }

        setContent(content);
        setOrder(order);
      } catch (e) {
        alert(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [props.match.params.id]);

  function formatFilename(str: string) {
    return str.replace(/^\w+-/, "");
  }

  function handleFileChange(event: any) {
    file.current = event.target.files ? event.target.files[0] : null;
    if (file.current && file.current.name !== "") {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  }

  function saveOrder(order: any) {
    return API.put('orders', `/orders/${props.match.params.id}`, {
      body: order
    });
  }

  async function handleSubmit(event: any) {
    let attachment;

    event.preventDefault();

    // @ts-ignore
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      //@ts-ignore
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
        1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      if (file.current) {
        attachment = await s3Upload(file.current);
      }

      // @ts-ignore
      await saveOrder({ content, attachment: attachment || order.attachment });
      props.history.push('/account/orders');
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  function deleteNote() {
    // @ts-ignore
    return API.del('orders', `/orders/${props.match.params.id}`);
  }

  function handleContentChange(event: any) {
    setContent((event.target as HTMLTextAreaElement).value);
    setFormValidated(validateURL((event.target as HTMLTextAreaElement).value));
  }

  async function handleDelete(event: any) {
    event.preventDefault();

    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      await deleteNote();
      props.history.push("/account/orders");
    } catch (e) {
      alert(e);
      setIsDeleting(false);
    }
  }

  function renderContent() {
    return (
      order && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="content">
            <Form.Control
              value={content}
              as="textarea"
              onChange={handleContentChange}
            />
          </Form.Group>
          {
            // @ts-ignore
            order.attachment && (
              <Form.Group>
                <Form.Label>Attachment</Form.Label>
                <Form.File
                  id="custom-file"
                  label="Custom file input"
                  custom
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      // @ts-ignore
                      order.attachmentURL
                    }
                  >
                    {
                      // @ts-ignore
                      formatFilename(order.attachment)
                    }
                  </a>
                </Form.File>

              </Form.Group>
            )}
          <Form.Group controlId="file">
            {
              // @ts-ignore
              !order.attachment && <Form.Label>Attachment</Form.Label>
            }
            <Form.Control onChange={handleFileChange} type="file" />
          </Form.Group>
          <div className="row">
            <div className="col-12">
              <LoaderButton
                type="submit"
                size="lg"
                className="btn btn--primary"
                text="Update"
                isLoading={isLoading}
                disabled={!formValidated}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <LoaderButton
                size="lg"
                className="btn btn-danger"
                text="Delete"
                onClick={handleDelete}
                isLoading={isDeleting}
              />
            </div>
          </div >
        </Form >
      )
    );
  }

  return (
    <div className="">
      <h4>Order</h4>
      {isLoading ?
        <section className="height-30 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </section>
        : renderContent()
      }
    </div>
  );
}
