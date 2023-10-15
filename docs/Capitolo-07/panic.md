---
sidebar_position: 3
---
# 7.3 panic!
In Rust, `panic!` è una macro per la gestione degli errori drastica. Quando si verifica una situazione irreversibile o imprevista, `panic!` termina immediatamente l'esecuzione del programma e mostra un messaggio di errore all'utente. Questo meccanismo è pensato per affrontare errori che rendono impossibile continuare l'esecuzione in modo sicuro, come indirizzi di memoria invalidi o situazioni in cui l'integrità del programma è compromessa.

## Quando Usare `panic!`
1. **Situazioni Impossibili:** Quando il programma si trova in uno stato che non può essere gestito in modo sicuro.
2. **Bug del Programma:** Quando si verifica un comportamento che non dovrebbe mai accadere secondo il design del programma.
3. **Precondizioni Non Valide:** Quando una funzione riceve argomenti che non soddisfano le precondizioni del suo utilizzo.

### Esempio di Utilizzo
```rust
fn calcola_area_quadrato(lato: i32) -> i32 {
    if lato <= 0 {
        panic!("Lato non valido: {}", lato);
    }
    lato * lato
}
```
In questo esempio, se `lato` è negativo o zero, `panic!` viene chiamato, terminando l'esecuzione del programma.

## Gestione di `panic!`
In un contesto di produzione, `panic!` può essere catturato per fornire un'interfaccia utente più amichevole o per eseguire azioni di pulizia prima di terminare. Questo può essere fatto utilizzando la funzione `std::panic::catch_unwind`.

In breve, `panic!` è un meccanismo di emergenza in Rust che fornisce un modo per gestire situazioni critiche e irrecuperabili, garantendo che il programma termini in modo controllato quando si verificano errori imprevisti o gravi. Tuttavia, dovrebbe essere usato con cautela e solo per situazioni che compromettono gravemente l'integrità del programma.

:::info
In Rust, sia `Result` che `panic!` sono strumenti fondamentali per gestire gli errori, ma vengono utilizzati in contesti diversi per situazioni diverse.

La differenza chiave è che `Result` è usato per gestire errori recuperabili, consentendo al programmatore di prendere decisioni basate sugli errori, mentre `panic!` è utilizzato per situazioni in cui il programma è in uno stato così compromesso che non può continuare in modo sicuro. `panic!` è una misura estrema e dovrebbe essere utilizzato solo per errori gravi e irrecuperabili.

In breve, `Result` è per gli errori gestibili, `panic!` è per le situazioni catastrofiche. Utilizzando entrambi in modo appropriato, Rust permette agli sviluppatori di creare codice robusto e sicuro.
:::