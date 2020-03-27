import React, { useEffect } from 'react';

import './Thanks.css';

export default function Thanks(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Home">
      <div className="lander">
        <h1>Thanks!</h1>
        <p>Your order number is {props.match.params.order}</p>
      </div>
    </div>
  );
}
