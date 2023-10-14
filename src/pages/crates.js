import React from 'react';
import Layout from '@theme/Layout';
import CratesIoComponent from '../components/CratesIoComponent';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <div style={{ width: '100%' }}>
          <h3 style={{ textAlign: 'center', fontWeight: 'normal' }}>
            Questa sezione di Rusty-Pixel offre un'accesso diretto e intuitivo all'ecosistema di librerie Rust tramite l'API di Crates.io. 
          </h3>
          <h4 style={{ textAlign: 'center', fontWeight: 'normal', paddingBottom: 16 }}>
          Trova facilmente librerie, controlla le versioni più recenti e arricchisci i tuoi progetti Rust con le ultime soluzioni. Esplora Crates.io senza sforzo, tutto in un unico luogo su Rusty-Pixel.
          </h4>
          <CratesIoComponent /> 
        </div>
      </div>
    </Layout>
  );
}