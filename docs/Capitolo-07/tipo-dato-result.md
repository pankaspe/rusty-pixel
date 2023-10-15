---
sidebar_position: 2
---
# 7.2 Il tipo di dato Result
In Rust, `Result` è un tipo di dato fondamentale per gestire situazioni in cui un'operazione potrebbe avere successo o fallire. È un'enumerazione che può assumere due varianti: `Ok`, che contiene il risultato dell'operazione in caso di successo, e `Err`, che contiene informazioni sull'errore se l'operazione fallisce. Questa struttura offre un modo esplicito e robusto per gestire gli errori, costringendo i programmatori a considerare attentamente tutte le possibilità.

Quando una funzione potrebbe restituire un errore, dichiara il suo tipo di ritorno come `Result<T, E>`, dove `T` è il tipo di dato del risultato di successo e `E` è il tipo di dato dell'errore. Questo consente una gestione degli errori dettagliata e specifica. Ad esempio, una funzione che legge un file può restituire un `Result<String, Error>`: `Ok` con il contenuto del file se la lettura ha successo, o `Err` con un oggetto `Error` se si verifica un errore, come un file non trovato o un problema di autorizzazione.

L'utilizzo di `Result` rende il codice più robusto e comprensibile, in quanto obbliga i programmatori a considerare tutte le possibili situazioni di errore, migliorando la qualità e la sicurezza del software Rust.

## Utilizzo di `Result`
```rust
fn divisione_sicura(dividendo: i32, divisore: i32) -> Result<i32, String> {
    if divisore == 0 {
        return Err("Divisione per zero non consentita.".to_string());
    }
    Ok(dividendo / divisore)
}
```
In questo esempio, la funzione `divisione_sicura` restituisce un `Result`, indicando se l'operazione di divisione ha avuto successo (`Ok`) o se c'è stato un errore (`Err`).

## Gestione degli Errori
```rust
fn main() {
    let risultato = divisione_sicura(10, 2);
    match risultato {
        Ok(valore) => println!("Risultato: {}", valore),
        Err(messaggio) => println!("Errore: {}", messaggio),
    }
}
```
Qui, utilizziamo `match` per gestire i casi `Ok` e `Err`, consentendo un controllo dettagliato sugli esiti delle operazioni.

## Benefici di `Result`
- **Sicurezza e Robustezza:** Ogni possibile errore deve essere gestito in modo esplicito, evitando errori imprevisti.
- **Documentazione Chiara:** Gli utenti del codice sanno esattamente cosa aspettarsi e quali errori potrebbero verificarsi.
- **Composizione delle Funzioni:** Facilita la composizione di funzioni restituendo `Result`, consentendo operazioni complesse e sicure.

In conclusione, `Result` in Rust è uno strumento essenziale per garantire la gestione sicura e controllata degli errori, promuovendo l'affidabilità del codice e la tranquillità degli sviluppatori.