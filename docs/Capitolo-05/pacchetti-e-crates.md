---
sidebar_position: 2
---
# 5.2 Pacchetti & Crates
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

Ecco un esempio di struttura di un pacchetto Rust:

```
my_package
├── Cargo.toml
├── src
│   ├── main.rs
│   ├── lib.rs
│   └── utils.rs
├── tests
│   ├── integration_test.rs
│   └── unit_test.rs
└── examples
    └── example.rs
```

- **`Cargo.toml`**: Il file di configurazione del pacchetto, contenente le informazioni sul progetto e le dipendenze.
- **`src`**: La directory principale che contiene il codice sorgente.
  - **`main.rs`**: Il file principale del programma (per gli eseguibili).
  - **`lib.rs`**: Il file principale della libreria (per le crate).
  - **`utils.rs`**: Un modulo separato con funzioni di utilità.
- **`tests`**: La directory contenente i test del pacchetto.
  - **`integration_test.rs`**: Test di integrazione.
  - **`unit_test.rs`**: Test delle singole unità di codice.
- **`examples`**: La directory contenente esempi d'uso del pacchetto.
  - **`example.rs`**: Un esempio di utilizzo del pacchetto.

In questo esempio, il pacchetto è organizzato in modo modulare, consentendo una migliore gestione del codice e dei test. Questa struttura facilita anche la collaborazione con altri sviluppatori e la pubblicazione del pacchetto su Crates.io.

### Creazione di un Pacchetto
Per creare un pacchetto, si inizia creando una nuova directory contenente il file `Cargo.toml`. All'interno di questa directory, si possono aggiungere crates e moduli come necessario. Usando comandi come `cargo build` e `cargo publish`, è possibile compilare il pacchetto e condividerlo sulla piattaforma di gestione dei pacchetti di Rust, Crates.io.

### Gestione delle Dipendenze
Un aspetto chiave dei pacchetti sono le dipendenze. Utilizzando il file `Cargo.toml`, è possibile specificare le librerie esterne necessarie per il progetto. Cargo, lo strumento di gestione dei pacchetti di Rust, si occupa automaticamente del download e della gestione delle dipendenze, semplificando così il processo di sviluppo.

### Vantaggi dei Pacchetti
L'utilizzo di pacchetti offre diversi vantaggi. Promuove la modularità, consentendo la separazione del codice in componenti gestibili. Inoltre, semplifica la distribuzione del software, permettendo agli sviluppatori di condividere facilmente il proprio lavoro con la community. Questo approccio favorisce anche l'ecosistema Rust nel suo complesso, incoraggiando la creazione di librerie riutilizzabili.

:::info
In Rust, i concetti di "crates" e "pacchetti" sono fondamentali ma distinti. Una "crate" rappresenta un'unità di compilazione in Rust, che può contenere moduli, funzioni e tipi di dati. Una crate può essere un'applicazione, una libreria o un modulo, e viene compilata separatamente dal compilatore Rust. Una "pacchetto" (package) si riferisce invece all'intero progetto Rust, che può includere una o più crates, insieme ai file di configurazione necessari come Cargo.toml. Un pacchetto può consistere in una singola crate (ad esempio, un'applicazione) o in più crates (per esempio, una libreria principale e varie sottocrates). 

La differenza principale è che una crate è un'unità compilabile, mentre un pacchetto è un progetto complessivo che può comprendere più crates. La gestione delle dipendenze, la configurazione di compilazione e altre informazioni cruciali sono specificate nel file Cargo.toml del pacchetto. 
:::