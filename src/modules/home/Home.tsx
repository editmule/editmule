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
    <div className="main-container">
      <section className="space--sm">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-6 col-lg-5 order-md-12">
              <img alt="Header" src="/img/crypto-2.svg"></img>
            </div>
            <div className="col-md-6 col-lg-5 order-md-1">
              <h1>
                On-demand editing by real humans
              </h1>
              <p className="lead">
                Clear, concise, consistent English proofreading and copyediting delivered within hours
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
      <section className="text-center hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Newspaper.svg"></img>
                    <span className="h5 color--primary">Press Releases</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Speach-BubbleDialog.svg"></img>
                    <span className="h5 color--primary">Memos and Announcements</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                  <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Tablet.svg"></img>
                  <span className="h5 color--primary">Blog Posts</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                  <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Project.svg"></img>
                  <span className="h5 color--primary">Reports and Proposals</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                  <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/CPU.svg"></img>
                  <span className="h5 color--primary">Product Briefs</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                    <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Email.svg"></img>
                    <span className="h5 color--primary">Emails</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                  <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Notepad.svg"></img>
                  <span className="h5 color--primary">Applications</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
            <div className="col-md-3">
              <LinkContainer to="/order">
                <a href="#/" className="block">
                  <div className="feature boxed boxed--border border--round">
                  <img className="icon--svg" width="72" height="72" alt="Header" src="/icons/Spell-Check.svg"></img>
                  <span className="h5 color--primary">Miscellaneous</span>
                  </div>
                </a>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="bg--secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature feature-4 boxed boxed--lg boxed--border editing-features">
                <img className="icon--svg" width="42" height="42" alt="Header" src="/icons/File-Edit.svg"></img>
                <h4>In-Depth Copyediting</h4>
                <hr />
                <p>
                  Beyond simple proofreading for spelling and grammar, we work hard to reword and rework writing where necessary for structure, clarity and consistency.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature feature--featured feature-4 boxed boxed--lg boxed--border editing-features">
              <img className="icon--svg" width="42" height="42" alt="Header" src="/icons/Security-Check.svg"></img>
                <h4>NDAs and 256-bit Security</h4>
                <hr />
                <p>
                  Every document submitted to Edit Mule is secured behind 256-bit encryption and covered under our copyeditor <Link to="/nda">Non-Disclosure Agreement</Link> by default.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature feature-4 boxed boxed--lg boxed--border editing-features">
              <img className="icon--svg" width="42" height="42" alt="Header" src="/icons/File-Refresh.svg"></img>
                <h4>Unlimited Revisions</h4>
                <hr />
                <p>
                  Made some changes and need the document looked at again? We'll review it again for free as many times as you need, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="switchable feature-large switchable--switch">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6"> <img alt="Writing" className="border--round box-shadow-wide" src="/img/writer.jpg"></img> </div>
            <div className="col-md-6 col-lg-5">
              <div className="switchable__text">
                <h2>Write flawlessly</h2>
                <p className="lead">With delivery in as little as 24 hours, professional copyediting and proofreading has never been easier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space--xs">
        <div className="container hidden-xs">
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
                    <div className="btn btn--primary type--uppercase">
                      <div className="btn__text">
                        Order Now
                      </div>
                    </div>
                  </LinkContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row visible-xs">
          <div className="col-md-12">
            <div className="text-center-xs row justify-content-center">
              <div className="col-lg-4 col-md-3 text-center">
                <LinkContainer to="/order">
                  <div className="btn btn--primary type--uppercase">
                    <div className="btn__text">
                      Order Now
                    </div>
                  </div>
                </LinkContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
