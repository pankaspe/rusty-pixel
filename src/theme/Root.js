// src/theme/Root.js
import React from 'react';
import CookieBanner from '../components/CookieBanner';
import { inject } from '@vercel/analytics';

const Root = ({ children }) => {
  return (
    <>
      <CookieBanner />
      {children}
      {inject()}
    </>
  );
};

export default Root;
