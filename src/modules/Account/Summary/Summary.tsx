import React from 'react';

import { PageHeader } from 'react-bootstrap'
import '../Account.css';
import './Summary.css';

export default function Summary(props: any) {

  return (
    <div className="Account">
      <div className="Account summary">
        <PageHeader>Summary</PageHeader>
        <p>This is your account summary</p>
      </div>
    </div>
  );
}
