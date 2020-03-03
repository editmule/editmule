import React from 'react';

import './App.css';

import { Nav } from 'modules/nav';
import Routes from 'Routes';

function App(props: any) {
  return (
    <div>
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
