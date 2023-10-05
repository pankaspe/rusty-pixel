import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          Benvenuto in <strong>Rusty Pixel</strong>, dove esplorerai il criptico universo della programmazione e a diventare un genio tecnologico... o forse solo a camminare sull'orlo della follia. <br/>
          Qui imparerai a scrivere codici, e di conseguenza a sviluppare il pensiero critico/logico del programmatore, che ti porterà ad acquisire consapevolezza nel mondo dell'informatica. 
          Abbandona ogni speranza, o audace esploratore, e preparati a unirti alla nostra squadra di <em>pensatori logici</em>... o forse di folli programmatori! 🚀        
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
             Inizia il corso
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Rusty-pixel, una guida di programmazione in Rust per artisti digitali. Corsi interattivi, progetti pratici, e tecniche avanzate di Arte del Codice.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
