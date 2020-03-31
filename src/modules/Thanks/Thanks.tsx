import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import './Thanks.css';

export default function Thanks(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(location.pathname + location.search);
  }, []);

  return (
    <div className="main-container">
      <section>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-12 col-lg-5">
              <div>
                <h1>Thanks!</h1>
                <p className="lead">
                  Check your email for your order information. We're already busy editing your documents. Hold tight and expect an email when we're done!
                </p>
                {
                  props.isAuthenticated &&
                  <Link to="/account/orders">
                    View your orders
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
