---
sidebar_position: 1
---
# 5.1 Introduzione
Immagina di costruire una casa. La **Casa** rappresenta il tuo progetto complessivo, il quale può essere suddiviso in parti più gestibili. Queste parti sono i **Crates**. Un *Crate* potrebbe essere il modulo per la costruzione del tetto, un altro *Crate* potrebbe occuparsi delle fondamenta, e così via. All'interno di ogni *Crate* ci sono **Moduli**. Per esempio, nel *Crate* del tetto, ci sono **moduli** specifici per le tegole, l'isolamento e le grondaie.

Ogni **modulo** contiene parti specifiche del compito. Nel **modulo** delle tegole, ci sono sezioni per le tegole stesse, le guarnizioni e i fissaggi. Ognuno di questi è un modulo figlio. Le tegole possono essere viste come le **funzioni**, che sono le parti più piccole e specifiche di un **modulo**.

**I Pacchetti**, in questo contesto, sono come i container di spedizione per i materiali. Quando vuoi condividere parte della tua casa con un amico, puoi mettere i materiali necessari in un pacchetto, includendo le istruzioni su come assemblarli. Così, il pacchetto contiene **Crates** correlati (come il tetto e le fondamenta), che a loro volta contengono **Moduli** (come tegole e isolamento). Il tuo amico può quindi importare questi pacchetti nella sua costruzione senza dover affrontare l'intera complessità della tua casa.

In questo modo, la struttura di **Crates**, **Moduli** e **Pacchetti** rende più gestibile la costruzione della tua casa, separando il lavoro in parti logiche e facilmente gestibili. Questo stesso concetto si applica alla programmazione in Rust, dove *Crates, Moduli e Pacchetti* organizzano il codice in unità comprensibili, facilitando la collaborazione e la condivisione di librerie e applicazioni.

:::info
Ecco un grafico che illustra la gerarchia corretta

```bash
Crate: Casa (Il tuo progetto principale)
│
├── Modulo: Tetto (nel Crate Casa)
│   ├── Sottomodulo: Tegole
│   ├── Sottomodulo: Isolamento
│   └── Sottomodulo: Grondaie
│
├── Modulo: Fondamenta (nel Crate Casa)
│   ├── Sottomodulo: Struttura
│   └── Sottomodulo: Isolamento Termico
│
├── Modulo: Cucina (nel Crate Casa)
│   ├── Sottomodulo: Fornelli
│   ├── Sottomodulo: Frigorifero
│   └── Sottomodulo: Lavello
│
└── Pacchetto: Camere_da_Letto (Contenente Crates e Moduli per le camere da letto)
    │
    ├── Crate: Camera_da_Letto_Principale
    │   ├── Modulo: Letto
    │   └── Modulo: Armadio
    │
    └── Crate: Camera_da_Letto_Ospiti
        ├── Modulo: Letto
        └── Modulo: Scrivania
```

In questo esempio, il Crate principale "Casa" contiene Moduli come "Tetto", "Fondamenta" e "Cucina". All'interno del Crate "Cucina", ci sono Sottomoduli come "Fornelli", "Frigorifero" e "Lavello". Il Pacchetto "Camere_da_Letto" contiene due Crates, ciascuno con i propri Moduli specifici.

Questa struttura illustra come i Crates contengano Moduli e come i Pacchetti possano includere più Crates e Moduli, organizzando così il progetto in una gerarchia chiara e facilmente comprensibile.
:::

## Moduli
All'interno dei moduli ci sono i dettagli del codice sorgente, inclusi variabili, funzioni, strutture e altri elementi del linguaggio di programmazione Rust. I moduli sono come contenitori logici che organizzano il codice in parti più gestibili e comprensibili. All'interno di questi moduli, puoi definire variabili, implementare funzioni e creare strutture dati specifiche per quel contesto particolare.

Ad esempio, nel modulo "Cucina" potresti avere variabili come "numeroDiFornelli" o "temperaturaForno", funzioni come "accendiFornelli()" o "spegniForno()", e strutture come "Ricetta" o "Ingredienti". Questi elementi possono essere accessibili solo all'interno del modulo "Cucina", a meno che non vengano esportati esplicitamente per l'uso in altri moduli o crates. Questo livello di organizzazione aiuta a mantenere il codice ordinato, facilitando la lettura e la manutenzione del progetto.

## Riassumendo

| **Terminologia** | **Descrizione** |
|------------------|------------------|
| **Crates**       | Sono unità di compilazione in Rust. Un crate può contenere uno o più moduli. Può essere una libreria o un'applicazione. |
| **Moduli**       | Sono blocchi di codice che contengono variabili, funzioni, strutture, o altri elementi. Aiutano a organizzare il codice all'interno di un crate. |
| **Pacchetti**    | Sono collezioni di uno o più crates. I pacchetti consentono di distribuire librerie e applicazioni Rust in modo gestibile e riutilizzabile. |

In breve, **crates** sono unità di compilazione, **moduli** organizzano il codice all'interno di un crate e **pacchetti** raccolgono uno o più crates per la distribuzione e il riutilizzo del codice. Questi concetti formano la struttura fondamentale di organizzazione e distribuzione nel mondo Rust.