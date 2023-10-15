// src/theme/Root.js
import React from 'react';
import CookieBanner from '../components/CookieBanner';
import { Analytics } from '@vercel/analytics/react';

const Root = ({ children }) => {
  return (
    <>
      <CookieBanner />
      {children}
      <Analytics />
    </>
  );
};

export default Root;
