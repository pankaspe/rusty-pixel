// src/components/CookieBanner.js
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accetto"
      cookieName="myCookieConsent"
      style={{ background: '#333', color: '#fff' }}
      buttonStyle={{ background: '#e67e22', color: '#fff', fontSize: '14px' }}
      expires={365}
    >
        Questo sito web utilizza i cookie per migliorare l'esperienza dell'utente.{" "}
        <a href="/privacy-policy" style={{ color: '#e67e22', textDecoration: 'underline' }}>
          Leggi la nostra politica sulla privacy
        </a>
    </CookieConsent>
  );
};

export default CookieBanner
