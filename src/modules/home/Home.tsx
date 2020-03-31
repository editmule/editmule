import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import ReactGA from 'react-ga';

import "./Home.css";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="main-container">
      <section className="space--sm">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-6 col-lg-5">
              <h1>
                On-demand editing by real humans
              </h1>
              <p className="lead">
                Clear, concise, consistent English proofreading and copyediting delivered within hours
              </p>
              <LinkContainer to="/order">
                <a className="btn btn--primary type--uppercase" href="#order">
                  <span className="btn__text">
                    Get Started
                  </span>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-6 col-lg-5 pull-right">
              <img alt="Header" src="/img/crypto-2.svg"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-Newspaper"></i>
                    <span className="h5 color--primary">Press Releases</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-Speach-BubbleDialog"></i>
                    <span className="h5 color--primary">Memos and Announcements</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-Tablet"></i>
                    <span className="h5 color--primary">Blog Posts</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-Project"></i>
                    <span className="h5 color--primary">Reports and Proposals</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-CPU"></i>
                    <span className="h5 color--primary">Product Briefs</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-Email"></i>
                    <span className="h5 color--primary">Emails</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-Notepad"></i>
                    <span className="h5 color--primary">Applications</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <i className="icon--lg icon-Spell-Check"></i>
                    <span className="h5 color--primary">Miscellaneous</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="switchable feature-large switchable--switch">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6"> <img alt="Image" className="border--round box-shadow-wide" src="/img/writer.jpg"></img> </div>
            <div className="col-md-6 col-lg-5">
              <div className="switchable__text">
                <h2>Write flawlessly</h2>
                <p className="lead">With delivery in as little as 24 hours, professional copyediting and proofreading has never been easier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>EDIT MULE IS TRUSTED BY THOUSANDS OF PROFESSIONALS WORLD-WIDE</p>
              <ul className="list-inline list-inline--images">
                <li>
                  <img alt="Image" src="/img/partner-1.png" />
                </li>
                <li>
                  <img alt="Image" src="/img/partner-5.png" />
                </li>
                <li>
                  <img alt="Image" src="/img/partner-7.png" />
                </li>
                <li>
                  <img alt="Image" src="/img/partner-4.png" />
                </li>
                <li>
                  <img alt="Image" src="/img/partner-6.png" />
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
                <h2>Built for professionals</h2>
                <p className="lead">With no minimum word count, Edit Mule makes it easy to write your best on any document. Never again let typos, awkward sentences, or grammar mistakes get in the way of your best work.</p>
                <LinkContainer to="/order">
                  <a className="btn type--uppercase" href="#">
                    <span className="btn__text">
                      Get Started
                    </span>
                  </a>
                </LinkContainer>
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
      <section className="space--xs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta cta-1 cta--horizontal boxed boxed--border text-center-xs row justify-content-center">
                <div className="col-lg-3 col-md-4">
                  <h4>Let's get started</h4>
                </div>
                <div className="col-lg-4 col-md-5">
                  <p className="lead">
                    Start writing flawlessly
                  </p>
                </div>
                <div className="col-lg-4 col-md-3 text-center">
                  <LinkContainer to="/order">
                    <a className="btn btn--primary type--uppercase" href="#">
                      <span className="btn__text">
                        Order Now
                      </span>
                    </a>
                  </LinkContainer>
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
