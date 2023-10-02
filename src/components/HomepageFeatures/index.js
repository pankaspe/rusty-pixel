import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Impara a programmare da subito',
    Svg: require('@site/static/img/impara-a-programmare.svg').default,
    description: (
      <>
        Rusty Pixel offre un approccio didattico intuitivo e accessibile alla programmazione. 
        Imparerai i concetti fondamentali del coding in modo semplice e divertente, senza complicazioni. 
        Che tu sia un principiante assoluto o un appassionato di tecnologia, qui troverai un ambiente accogliente per coltivare le tue abilità di programmazione.
      </>
    ),
  },
  {
    title: 'Sviluppa la capacità del pensiero logico',
    Svg: require('@site/static/img/pensiero-logico.svg').default,
    description: (
      <>
        Oltre a imparare a programmare, Rusty Pixel ti aiuta a comprendere il mondo digitale che ti circonda. 
        Scoprirai come funzionano le tecnologie di base, acquisendo una consapevolezza critica delle sfide e delle opportunità nel mondo tecnologico di oggi. 
        Sviluppare una comprensione informata è essenziale nell'era digitale in cui viviamo.
      </>
    ),
  },
  {
    title: 'Diventa consapevole della Tecnologia',
    Svg: require('@site/static/img/consapevolezza.svg').default,
    description: (
      <>
        La programmazione non riguarda solo il codice, ma anche la capacità di pensare in modo logico e risolvere problemi in modo creativo. 
        Attraverso esercizi interattivi e progetti stimolanti, Rusty Pixel ti aiuterà a sviluppare un pensiero critico e logico che sarà prezioso in ogni aspetto della tua vita, dalla programmazione al problem solving quotidiano.
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
