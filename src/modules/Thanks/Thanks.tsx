import React from 'react';
import { Link } from 'react-router-dom';

import './Thanks.css';

export default function Thanks(props: any) {

  return (
    <div className="Home">
      <div className="lander">
        <h1>Thanks!</h1>
        <p>Your order number is {props.match.params.order}</p>
      </div>
    </div>
  );
}
