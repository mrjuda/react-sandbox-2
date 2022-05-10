// wQuote.js

import './styles/wQuote.css';
import React, { useState, useEffect } from 'react';

function WebQuote() {
  const [email, setEmail] = useState(() => window.localStorage.getItem('hooksEmail') || '');
  const [password, setPassword] = useState(() => window.localStorage.getItem('hooksPassword') || '');
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  useEffect(() => {
    window.localStorage.setItem('hooksEmail', email);
    window.localStorage.setItem('hooksPassword', password);
  });
  return (
    <div className="divQuote">
      <span className="quote">
        Math used to be awesome.
        Then, they invented Calculus I and II. - Judá Teixeira, 2010
      </span>
      <input value={email} onChange={handleEmailChange} />
      <input value={password} onChange={handlePasswordChange} />
      <p>
        Logged in as:
        <span>{email}</span>
      </p>
    </div>
  );
}

export default WebQuote;
