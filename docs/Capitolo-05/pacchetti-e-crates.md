---
sidebar_position: 2
---
# 5.1 Pacchetti & Crates
## Crates
Come abbiamo detto in precedenza, in Rust, un **crate** è un'unità di compilazione. Può contenere *moduli*, che a loro volta contengono *variabili, funzioni, e strutture dati*. Un **crate** può essere sia una libreria riutilizzabile che un'applicazione completa.

:::info
Un'**unità di compilazione** in Rust, rappresenta un singolo file o un gruppo di file contenenti codice Rust. Ogni **unità** può contenere variabili, funzioni e strutture dati. Queste unità fungono da blocchi di base per l'organizzazione del codice, consentendo la modularità e il riutilizzo. Un **unità di compilazione** (come un Crate) può essere una libreria riutilizzabile o un'applicazione autonoma. 

Grazie all'approccio modulare di Rust, le unità di compilazione offrono un'organizzazione logica per il codice e agevolano la gestione dei progetti complessi.
:::

### Creare un Crate
Creare un crate è semplice. Utilizzando il comando `cargo new nome-crate`, Rust crea una struttura di progetto con tutti i file necessari. All'interno del crate, possiamo definire moduli per organizzare il nostro codice in unità logiche.

```
nome-crate
│
├── Cargo.toml
└── src
    └── main.rs
```

Nel dettaglio:

- `Cargo.toml` è un file di configurazione per il tuo progetto. Qui puoi specificare le dipendenze del crate, i metadati del progetto e altre configurazioni.
- `src` è una directory che contiene il codice sorgente del tuo progetto Rust.
- `main.rs` è un file Rust di default all'interno della directory `src`. Questo è il punto di ingresso del tuo programma.


### Importare funzioni da altri Crates
Una delle bellezze dei crates in Rust è la possibilità di importare funzioni e moduli da altri crates. Utilizzando la dichiarazione `use`, possiamo rendere disponibili le funzionalità di un crate nel nostro codice.

```rust
// Importa il crate esterno chiamato 'nome_crate'.
extern crate nome_crate;  

// Usa la funzione 'mia_funzione' dal modulo 'modulo' del crate 'nome_crate'.
use nome_crate::modulo::mia_funzione; 
```

## Pacchetti
I pacchetti in Rust rappresentano un modo efficiente per organizzare e distribuire il codice. Sono collezioni di uno o più crates. L'utilizzo di pacchetti consente di gestire progetti complessi e favorisce il riutilizzo del codice in diversi contesti.

### Struttura del Pacchetto
Un pacchetto Rust segue una struttura ben definita. Contiene un file `Cargo.toml` che descrive le dipendenze e la configurazione del progetto. All'interno del pacchetto, ci sono directories contenenti i crates e i relativi moduli. Questa organizzazione modulare facilita la manutenzione del codice.

### Creazione di un Pacchetto
Per creare un pacchetto, si inizia creando una nuova directory contenente il file `Cargo.toml`. All'interno di questa directory, si possono aggiungere crates e moduli come necessario. Usando comandi come `cargo build` e `cargo publish`, è possibile compilare il pacchetto e condividerlo sulla piattaforma di gestione dei pacchetti di Rust, Crates.io.

### Gestione delle Dipendenze
Un aspetto chiave dei pacchetti sono le dipendenze. Utilizzando il file `Cargo.toml`, è possibile specificare le librerie esterne necessarie per il progetto. Cargo, lo strumento di gestione dei pacchetti di Rust, si occupa automaticamente del download e della gestione delle dipendenze, semplificando così il processo di sviluppo.

### Vantaggi dei Pacchetti
L'utilizzo di pacchetti offre diversi vantaggi. Promuove la modularità, consentendo la separazione del codice in componenti gestibili. Inoltre, semplifica la distribuzione del software, permettendo agli sviluppatori di condividere facilmente il proprio lavoro con la community. Questo approccio favorisce anche l'ecosistema Rust nel suo complesso, incoraggiando la creazione di librerie riutilizzabili.