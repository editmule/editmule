import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import './NotFound.css';

export function NotFound(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="main-container">
      <section className="height-80 text-center">
        <div className="container pos-vertical-center">
          <div className="row justify-content-around">
            <div className="col-xs-6 col-md-4">
              <img className="pb-5" alt="Writing" src="/img/not_found.svg"></img>
              <h1 className="h1--large">404</h1>
              <p className="lead">
                Sorry, page not found!
              </p>
              <Link to="/">Go back to home page</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
