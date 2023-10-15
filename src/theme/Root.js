// src/theme/Root.js
import React from 'react';
import CookieBanner from '../components/CookieBanner';

const Root = ({ children }) => {
  return (
    <>
      <CookieBanner />
      {children}
    </>
  );
};

export default Root;
