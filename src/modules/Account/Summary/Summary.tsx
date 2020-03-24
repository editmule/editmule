import React from 'react';

import '../Account.css';
import './Summary.css';

export default function Summary(props: any) {

  return (
    <div className="Account">
      <div className="Account summary">
        <div className="pb-2 mt-4 mb-2 border-bottom">
          Summary
        </div>
        <p>This is your account summary</p>
      </div>
    </div>
  );
}
