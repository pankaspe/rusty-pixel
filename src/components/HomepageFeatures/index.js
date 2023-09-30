import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile da usare',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Rusty Guardians è progettato per essere intuitivo e accessibile. 
        Con un'interfaccia utente semplice e istruzioni chiare, anche i principianti possono imparare facilmente i concetti della programmazione con Rust.
      </>
    ),
  },
  {
    title: 'Tutorial',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        La sezione tutorial offre una guida completa alle fondamenta della programmazione. 
        Dai concetti di base alle strutture dati avanzate, i tutorial coprono tutto ciò di cui hai bisogno per iniziare a programmare in modo efficace e sicuro.
      </>
    ),
  },
  {
    title: 'Powered by ChatGPT & Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Ogni testo in Rusty Guardians è stato accuratamente revisionato da ChatGPT seguendo le mie indicazioni, garantendo così contenuti precisi e affidabili.
        Organizzato come una dettagliata enciclopedia interattiva grazie all'efficiente utilizzo di Docusaurus.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
