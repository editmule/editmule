import React, { useRef, useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Form } from 'react-bootstrap';

import { LoaderButton } from 'modules/LoaderButton';
import { s3Upload } from 'libs/aws';
import config from 'config';

import './Orders.css';

export default function Orders(props: any) {
  const file = useRef(null);
  const [order, setOrder] = useState(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
    }

    onLoad();
  }, [props.match.params.id]);

  function validateForm() {
    return content.length > 0;
  }

  function formatFilename(str: string) {
    return str.replace(/^\w+-/, "");
  }

  function handleFileChange(event: any) {
    file.current = event.target.files[0];
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

  return (
    <div className="">
      <h4>Order</h4>
      {order && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="content">
            <Form.Control
              value={content}
              as="textarea"
              onChange={e => setContent((e.target as HTMLTextAreaElement).value)}
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
          <LoaderButton
            block
            type="submit"
            size="lg"
            className="btn btn-primary"
            text="Save"
            isLoading={isLoading}
            disabled={!validateForm()}
          />
          <LoaderButton
            block
            size="lg"
            className="btn btn-danger"
            text="Delete"
            onClick={handleDelete}
            isLoading={isDeleting}
          />
        </Form>
      )}
    </div>
  );
}

// <Form.Control isStatic={true}>
//   <a
//     target="_blank"
//     rel="noopener noreferrer"
//     href={
//       // @ts-ignore
//       order.attachmentURL
//     }
//   >
//     {
//       // @ts-ignore
//       formatFilename(order.attachment)
//     }
//   </a>
// </Form.Control>
