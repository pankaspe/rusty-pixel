// CommitHistory.js
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const CommitHistory = () => {
  const [commitHistory, setCommitHistory] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/repos/pankaspe/rusty-pixel/commits';
    const accessToken = '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';

    // Effettua la richiesta GET utilizzando fetch
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      // Controlla se la richiesta è stata eseguita correttamente
      if (!response.ok) {
        throw new Error('Errore nella richiesta API di GitHub');
      }
      // Converte la risposta in formato JSON
      return response.json();
    })
    .then(data => {
      // Aggiorna lo stato con la cronologia delle commit ottenuta dalla risposta
      setCommitHistory(data);
    })
    .catch(error => {
      console.error('Errore durante il recupero della cronologia delle commit:', error);
    });
  }, []);

  const ultimi20Commit = commitHistory.slice(0, 20);

  return (
    <div>
      <h2>Ultimi 20 commit</h2>
        <pre>
          <ul className={styles.commitList}>
            {ultimi20Commit.map(commit => (
              <li key={commit.sha}>
                <span className={styles.message}>{commit.commit.message}</span> - <span className={styles.dateLabel}>{new Date(commit.commit.author.date).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
              </li>
            ))}
          </ul>
        </pre>
    </div>
  );
};

export default CommitHistory;
