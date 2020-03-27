import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";

import "./Home.css";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="main-container">
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-6 col-lg-5">
              <h1>
                On-demand editing by a real human
              </h1>
              <p className="lead">
                Clear, concise, consistent English proofreading and copyediting delivered within hours
              </p>
              <LinkContainer to="/order">
                <a className="btn btn--primary type--uppercase" href="#order">
                  <span className="btn__text">
                    Let's Go
                  </span>
                </a>
              </LinkContainer>
            </div>
            <div className="col-6">
              <img alt="Image" src="img/crypto-1.svg"></img>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature feature-1"> <img alt="Image" src="img/cowork-1.jpg"></img>
                <div className="feature__body boxed boxed--lg boxed--border">
                  <h3>Press Releases</h3>
                  <p className="lead"> Save time with a multitude of styled components designed to showcase your content </p>
                  <a href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature feature-1"> <img alt="Image" src="img/landing-1.jpg"></img>
                <div className="feature__body boxed boxed--lg boxed--border">
                  <h3>Product Briefs</h3>
                  <p className="lead"> Save time with a multitude of styled components designed to showcase your content </p>
                  <a href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature feature-1"> <img alt="Image" src="img/inner-6.jpg"></img>
                <div className="feature__body boxed boxed--lg boxed--border">
                  <h3>Internal Memos</h3>
                  <p className="lead"> Save time with a multitude of styled components designed to showcase your content </p>
                  <a href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="switchable feature-large switchable--switch">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6"> <img alt="Image" className="border--round box-shadow-wide" src="img/landing-11.jpg"></img> </div>
            <div className="col-md-6 col-lg-5">
              <div className="switchable__text">
                <h2>Perfect for bootstrapped startups</h2>
                <p className="lead"> Launching an attractive and scalable website quickly and affordably is important for modern startups — Stack offers massive value without looking 'bargain-bin'. </p> <a href="#">Learn More »</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-inline list-inline--images">
                <li>
                  <img alt="Image" src="img/partner-1.png" />
                </li>
                <li>
                  <img alt="Image" src="img/partner-5.png" />
                </li>
                <li>
                  <img alt="Image" src="img/partner-7.png" />
                </li>
                <li>
                  <img alt="Image" src="img/partner-4.png" />
                </li>
                <li>
                  <img alt="Image" src="img/partner-6.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="switchable feature-large">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-5">
              <div className="switchable__text">
                <h2>Perfect for bootstrapped startups</h2>
                <p className="lead"> Launching an attractive and scalable website quickly and affordably is important for modern startups — Stack offers massive value without looking 'bargain-bin'. </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="boxed boxed--lg boxed--border">
                <div className="feature feature-2"> <i className="icon icon-Clock-Back color--primary"></i>
                  <div className="feature__body">
                    <h5>Delivery Within 24 Hours</h5>
                    <p>We'll get your document back to you within 24 hours or less, guaranteed.</p>
                  </div>
                </div>
                <div className="feature feature-2"> <i className="icon color--primary icon-Security-Check"></i>
                  <div className="feature__body">
                    <h5>Secure and Confidential</h5>
                    <p>All work is kept strictly confidential and stored behind industry standard AES-256 encryption.</p>
                  </div>
                </div>
                <div className="feature feature-2"> <i className="icon color--primary icon-File-Edit"></i>
                  <div className="feature__body">
                    <h5>Unlimited Revisions</h5>
                    <p>Made some changes and need the document looked at again? Send it back.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
