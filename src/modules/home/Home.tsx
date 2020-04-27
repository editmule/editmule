import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import "./Home.css";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="main-container Home">
      <section className="space--md">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-xs-6 col-sm-8 col-md-6 col-lg-5 order-md-12 pb-5">
              <img alt="Header" src="/img/google_docs.svg"></img>
            </div>
            <div className="col-md-6 col-lg-5 order-md-1 pb-5">
              <h1 className="font-weight-bold">
                On-demand editing by real humans
              </h1>
              <p className="lead">
                Professional English editing built for startups
              </p>
              <LinkContainer to="/order">
                <div className="btn btn--primary type--uppercase">
                  <div className="btn__text">
                    Get Started
                  </div>
                </div>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center hidden-xs space--lg">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Newspaper.svg"></img>
                    <span className="h5 color--primary">Press Releases</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/CPU.svg"></img>
                    <span className="h5 color--primary">Product Briefs</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Project.svg"></img>
                    <span className="h5 color--primary">Reports and Proposals</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Speach-BubbleDialog.svg"></img>
                    <span className="h5 color--primary">Memos and Announcements</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Tablet.svg"></img>
                    <span className="h5 color--primary">Blog Posts</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Code-Window.svg"></img>
                    <span className="h5 color--primary">Documentation</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Notepad.svg"></img>
                    <span className="h5 color--primary">Applications</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round bg--secondary">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Spell-Check.svg"></img>
                    <span className="h5 color--primary">Miscellaneous</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="space--lg">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-4 order-md-12 pb-5 col-sm-6"> <img alt="Writing" src="/img/message_sent.svg"></img> </div>
            <div className="col-md-6 col-lg-5 order-md-1 pb-5">
              <div className="switchable__text">
                <h2>In-Depth Copyediting</h2>
                <p className="lead">Beyond simple proofreading for spelling and grammar, we reword and rework writing where necessary for structure, clarity, and consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space--lg">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-4 pb-5 col-sm-6"> <img alt="Writing" src="/img/security_on.svg"></img> </div>
            <div className="col-md-6 col-lg-5 pb-5">
              <div className="switchable__text">
                <h2>NDAs and 256-bit Security</h2>
                <p className="lead">Every document submitted to Edit Mule is secured behind AES-256 encryption and covered under our copyeditor <Link to="/nda">Non-Disclosure Agreement</Link> by default.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space--lg">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-4 order-md-12 pb-5 col-sm-6"> <img alt="Writing" src="/img/reviewed_docs.svg"></img> </div>
            <div className="col-md-6 col-lg-5 order-md-1 pb-5">
              <div className="switchable__text">
                <h2>Unlimited Revisions</h2>
                <p className="lead">Made some changes and need the document looked at again? We'll review it again for free as many times as you need, no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="text-center bg--secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <div className="cta">
                <h2>Start writing flawlessly</h2>
                <Link to="/order" className="btn btn--primary type--uppercase">
                  <div className="btn__text">
                    Order Now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Home;
