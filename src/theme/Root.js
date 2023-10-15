import React, { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';
import { inject } from '@vercel/analytics';

const Root = ({ children }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnalyticsScript = async () => {
      try {
        await inject();
      } catch (err) {
        setError(err);
      }
    };

    loadAnalyticsScript();
  }, []); // Assicurati di passare un array vuoto come dipendenza per eseguire l'effetto solo una volta

  return (
    <>
      <CookieBanner />
      {error ? (
        <div>Errore durante il caricamento dello script di analisi: {error.message}</div>
      ) : (
        children
      )}
    </>
  );
};

export default Root;
