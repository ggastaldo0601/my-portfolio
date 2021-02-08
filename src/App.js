import React from 'react';
import { Header } from './components/common';
import { Footer } from './components/common';
import { Body } from './components/common';

import './App.css';

function App() {
  return (
    <div className="App">
      <div><Header /></div>
      <div><Body /></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
