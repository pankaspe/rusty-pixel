import React from 'react';
import Layout from '@theme/Layout';
import CratesIoComponent from '../components/CratesIoComponent';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <div style={{ width: '100%' }}>
          <CratesIoComponent /> 
        </div>
      </div>
    </Layout>
  );
}