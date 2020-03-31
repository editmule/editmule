import React, { useRef, useState, useEffect } from 'react';
import { s3Upload } from 'libs/aws';
import config from 'config';
import ReactGA from 'react-ga';

import './Order.css';
import Configuration from './Configuration';
import Upload from './Upload';

export default function Order(props: any) {
  const file = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [content, setContent] = useState("");
  const [wordcount, setWordcount] = useState("");
  const [delivery, setDelivery] = useState(24);

  // @ts-ignore
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search); // No route, but worthwhile to know
  }, []);

  // TODO: Add billing to order (only submit order when billing works)
  async function handleOrderSubmit(event: any) {
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

    let attachment = null;

    try {
      attachment = file.current
        ? await s3Upload(file.current)
        : null;
      // await createOrder({ content, attachment });
    } catch (e) {
      alert(e);
    }

    // @ts-ignore
    const cart = localStorage.getItem('EditMuleCart') ? JSON.parse(localStorage.getItem('EditMuleCart')) : []

    //@ts-ignore
    const order = {
      wordcount: Number(wordcount),
      delivery: Number(delivery),
      content: content,
      attachment: attachment
    }

    cart.push(order);

    //@ts-ignore
    localStorage.setItem('EditMuleCart', JSON.stringify(cart));

    setIsLoading(false);

    props.history.push('/cart');

  }

  return (
    <div className="main-container">
      <section className="space--xs">
        <div className="container">
          <form onSubmit={handleOrderSubmit}>
            <Configuration
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              wordcount={wordcount}
              setWordcount={setWordcount}
              delivery={delivery}
              isLoading={isLoading}
              setDelivery={setDelivery}
              isAuthenticated={props.isAuthenticated}
            />
            <Upload
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              content={content}
              setContent={setContent}
              file={file}
              isLoading={isLoading}
              props={props}
              isAuthenticated={props.isAuthenticated}
            />
          </form>
        </div>
      </section>
    </div>
  );
}
