import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

function Nav() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="main-container">
      <section className="height-80 text-center">
        <div className="container pos-vertical-center">
          <div className="row">
            <div className="col-md-12">
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

export default Nav;
