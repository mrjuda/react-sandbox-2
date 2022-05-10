// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import WebHeader from './components/wHeader';
import WebHome from './components/wHome';
import WebCalc from './components/wCalc';
import WebQuote from './components/wQuote';
import WebRedux from './components/wRedux';

function App() {
  return (
    <div className="container">
      <WebHeader />
      <Routes>
        <Route exact path="/" element={<WebHome />} />
        <Route exact path="/mathmg" element={<WebHome />} />
        <Route path="/WebCalc" element={<WebCalc />} />
        <Route path="/WebQuote" element={<WebQuote />} />
        <Route path="/WebRedux" element={<WebRedux />} />
      </Routes>
    </div>
  );
}

export default App;
