---
sidebar_position: 4
---
# 7.4 Gestione errori personalizzati
In Rust, puoi definire i tuoi tipi di errori personalizzati utilizzando un enum. Questo ti consente di creare una rappresentazione chiara e specifica degli errori che il tuo programma potrebbe incontrare.

## Definizione di un Enum per gli errori personalizzati:
```rust
enum MioErrore {
    ErroreGenerico,
    ErroreSpecifico(String),
}
```
Nel codice sopra, `MioErrore` è un enum che può assumere due varianti: `ErroreGenerico`, che rappresenta un errore generico senza dettagli specifici, e `ErroreSpecifico`, che contiene un messaggio di errore di tipo `String`.

## Restituire un Result con gli errori personalizzati:
Quando una funzione può generare un errore personalizzato, può restituire un `Result` contenente il tipo del risultato di successo e il tuo tipo di errore personalizzato.
```rust
fn esempio_funzione(input: &str) -> Result<(), MioErrore> {
    if input.is_empty() {
        return Err(MioErrore::ErroreSpecifico("L'input non può essere vuoto.".to_string()));
    }
    // Altre operazioni...
    Ok(())
}
```
Nel codice sopra, la funzione `esempio_funzione` restituisce un `Result` con tipo `()` per indicare che non restituisce un valore in caso di successo e `MioErrore` in caso di errore. Se l'input è vuoto, viene restituito un errore personalizzato di tipo `MioErrore::ErroreSpecifico` con un messaggio specifico.

Nel blocco `main` o in qualsiasi altro contesto in cui chiami questa funzione, puoi gestire gli errori utilizzando `match`:
```rust
fn main() {
    let input = " ";
    match esempio_funzione(input) {
        Ok(_) => println!("Operazione riuscita!"),
        Err(errore) => match errore {
            MioErrore::ErroreGenerico => println!("Si è verificato un errore generico."),
            MioErrore::ErroreSpecifico(messaggio) => println!("Errore specifico: {}", messaggio),
        },
    }
}
```

oppure con l'operatore `?` per propagare l'errore:
```rust
fn main() -> Result<(), MioErrore> {
    let input = " ";
    esempio_funzione(input)?;
    println!("Operazione riuscita!");
    Ok(())
}
```
In questo modo, puoi creare, restituire e gestire i tuoi errori personalizzati in Rust, fornendo dettagliate informazioni sugli errori specifici che il tuo programma potrebbe incontrare.

:::info
In Rust, l'operatore `?` è un potente strumento per gestire gli errori in modo conciso e leggibile. Quando viene utilizzato all'interno di una funzione che restituisce un `Result`, come ad esempio `Result<T, E>`, l'operatore `?` semplifica la gestione degli errori. Se l'espressione a destra di `?` è un `Err(E)`, l'errore viene automaticamente restituito dalla funzione che contiene l'operatore `?`. In caso contrario, se l'espressione è `Ok(T)`, il valore viene estratto e può essere utilizzato nel codice successivo. Questo permette di evitare una catena di `match` o `unwrap`, rendendo il codice più pulito e leggibile. L'operatore `?` è particolarmente utile quando si lavora con funzioni che possono generare errori, semplificando il processo di propagazione degli errori attraverso le funzioni senza dover scrivere molte linee di codice per gestirli manualmente. Questa semplice sintassi contribuisce a rendere il codice Rust più elegante ed efficiente nella gestione degli errori.
:::