import React from 'react'

import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Navbar/>
      {/* cards */}
      <Cards/>
      {/* swipeButtons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
