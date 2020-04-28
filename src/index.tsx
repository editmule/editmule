// @ts-nocheck

import React from 'react';
import { hydrate, render } from "react-dom";
import './custom.scss';
import { App } from 'modules/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './config';
import ReactGA from 'react-ga';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "orders",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

ReactGA.initialize(config.google.GA_TRACKING_ID);
ReactGA.ga('require', config.google.OPT_CONTAINER_ID);
ReactGA.plugin.require('ecommerce');

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
 hydrate(
   <Router >
    <App />
    </Router>, rootElement);
} else {
 render(
   <Router >
     <App />
   </Router>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
