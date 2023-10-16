// src/components/CratesIoComponent.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; // Importa le classi CSS

const CratesIoComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handleSearch = () => {
      setLoading(true);
      // Esegui la chiamata API con la query di ricerca
      fetch(`https://crates.io/api/v1/crates?q=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          setData(data.crates); // Ottieni l'array di crates dalla risposta API
          setLoading(false);
          console.log(data)
        });
    };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Inserisci il nome del crate..."
          style={{ width: 'calc(100% - 100px)', marginRight: '10px' }}
        />
        <button className={styles.searchButton} onClick={handleSearch} disabled={loading}>
          Cerca
        </button>
      </div>

      {loading && <p>Eseguo la ricerca...</p>} {/* Visualizza "Sto cercando..." durante la ricerca */}

      {data && data.length > 0 ? (
        <div className={styles.resultList}>
          {data.map(crate => (
            <div key={crate.id} className={`${styles.searchResult} ${styles.card}`}>
              <div className={styles.resultItem}>
                <label>Nome:</label>
                <p>{crate.name}</p>
              </div>
              <div className={styles.resultItem}>
                <label>Versione più recente:</label>
                <p>{crate.max_version}</p>
              </div>
              {crate.updated_at && (
                <div className={styles.resultItem}>
                    <label>Ultima Modifica:</label>
                    <p>
                    {new Date(crate.updated_at).getDate()}/
                    {(new Date(crate.updated_at).getMonth() + 1)}/
                    {new Date(crate.updated_at).getFullYear()}
                    </p>
                </div>
                )}
              <div className={styles.resultItem}>
                <label>Descrizione:</label>
                <p>{crate.description}</p>
              </div>
              <div className={styles.resultItem}>
                <label>Repository:</label>
                <p><a href={crate.repository} target="_blank" rel="noopener noreferrer">{crate.repository}</a></p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>{data && data.length === 0 ? "Nessun crate trovato." : " "}</p>
      )}
    </div>
  );
};

export default CratesIoComponent;
