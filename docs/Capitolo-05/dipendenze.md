---
sidebar_position: 4
---
# 5.4 Dipendenze
In Rust, le **dipendenze** sono come i mattoni di un edificio: ti permettono di costruire il tuo software senza dover reinventare la ruota. Grazie a Cargo, il gestore dei pacchetti di Rust, aggiungere e gestire le dipendenze nel tuo progetto è semplice e intuitivo.

## Come Aggiungere una Dipendenza:
Per aggiungere una dipendenza, apri il file `Cargo.toml` nel tuo progetto. La sezione `[dependencies]` è il luogo dove specificare le librerie esterne necessarie al tuo progetto. Ad esempio, se vuoi aggiungere una libreria per la manipolazione di date, puoi fare:

```toml
[dependencies]
chrono = "0.4"
```
In questo esempio, `chrono` è il nome della libreria e `"0.4"` rappresenta la versione specifica che desideri utilizzare.

## Gestione delle versioni
Rust segue un sistema di versionamento semantico. Puoi specificare versioni esatte o range di versioni nelle tue dipendenze. Ad esempio, `"0.4"` indica la versione esatta, mentre `"^0.4"` significa che puoi utilizzare qualsiasi versione dalla `0.4` in su, ma inferiore alla `0.5`.

## Usare le dipendenze nel codice
Una volta aggiunte le dipendenze, puoi utilizzare il codice fornito dalle librerie nel tuo programma Rust. Usa l'operatore di ambito `::` per accedere alle funzioni e ai tipi forniti dalla dipendenza. Ad esempio, se `chrono` offre una funzione `data_oggi`, la chiameresti così:

```rust
extern crate chrono;

fn main() {
    let data = chrono::data_oggi();
    println!("Oggi è il {}", data);
}
```

Cargo si occupa automaticamente del download, della gestione delle versioni e della compilazione delle dipendenze, semplificando il processo e permettendoti di concentrarti sulla scrittura del tuo codice.

## Conclusione

Grazie a Cargo e al sistema di gestione delle dipendenze di Rust, puoi facilmente arricchire il tuo progetto con librerie esterne affidabili. Questo non solo risparmia tempo, ma garantisce anche la stabilità e l'affidabilità del tuo software. Quindi, non esitare a esplorare il vasto ecosistema di librerie Rust per migliorare le tue applicazioni!