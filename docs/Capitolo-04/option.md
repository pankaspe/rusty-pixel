---
sidebar_position: 4
---
# 4.4 Option
`Option<T>` è un *tipo di dato* in Rust che rappresenta la possibilità di avere o non avere un valore. Questo è particolarmente utile quando si lavora con situazioni in cui il valore può essere assente o non ancora definito. In Rust, `Option<T>` è un **enum** che può avere uno di due valori:

- `Some(T)`: Rappresenta un valore di tipo `T`.
- `None`: Rappresenta l'assenza di un valore, simile a un valore nullo in altri linguaggi di programmazione.

## Quando usarlo?
`Option<T>` è utile quando si vuole indicare esplicitamente che un valore potrebbe essere assente o quando si desidera gestire casi in cui un valore non è ancora disponibile o non esiste.

### Esempio di Utilizzo:

```rust
fn main() {
    // Definiamo una funzione che restituisce un Option<i32>
    fn divide(a: i32, b: i32) -> Option<i32> {
        if b != 0 {
            Some(a / b)
        } else {
            None
        }
    }

    // Esempio di utilizzo di Option<T>
    let numerator = 10;
    let denominator = 2;

    // Ottieni il risultato della divisione come Option<i32>
    let result = divide(numerator, denominator);

    // Gestisci il risultato usando match
    match result {
        Some(value) => println!("Il risultato è: {}", value),
        None => println!("Impossibile dividere per zero!"),
    }
}
```

In questo esempio, la funzione `divide` restituisce un `Option<i32>`. Se il denominatore è diverso da zero, restituisce `Some(value)`, altrimenti `None`.

## Vantaggi di Option:
1. **Sicurezza e affidabilità**: Evita errori comuni come i null pointer dereference.
2. **Espressività del codice**: Indica chiaramente la possibilità di valori assenti nel tuo codice.
3. **Forza a trattare i casi speciali**: Costringe a gestire esplicitamente i casi in cui un valore potrebbe essere mancante.

In breve, `Option<T>` è uno strumento potente per gestire i valori potenzialmente assenti in modo sicuro e conciso, migliorando la sicurezza e l'affidabilità del tuo codice Rust.

## Funzione and_then()
`and_then` è un metodo fornito da Rust per lavorare con il tipo `Option<T>`. In modo semplice, `and_then` viene utilizzato per eseguire una catena di operazioni su un valore `Option<T>` solo se quel valore è `Some(T)`. Se il valore è `None`, `and_then` restituisce `None` senza eseguire le operazioni.

Rifacciamo l'esempio della funzione `divide` utilizzando `and_then`:

```rust
fn main() {
    // Definiamo una funzione che restituisce un Option<i32>
    fn divide(a: i32, b: i32) -> Option<i32> {
        if b != 0 {
            Some(a / b)
        } else {
            None
        }
    }

    // Esempio di utilizzo di Option<T> con and_then
    let numerator = Some(10);
    let denominator = Some(2);

    // Calcola il risultato solo se entrambi i valori sono Some
    let result = numerator.and_then(|a| denominator.and_then(|b| divide(a, b)));

    // Stampa il risultato
    match result {
        Some(value) => println!("Il risultato è: {}", value),
        None => println!("Impossibile dividere per zero o valori mancanti!"),
    }
}
```

In questo esempio, `numerator` e `denominator` sono `Option<i32>` invece di semplici `i32`. Utilizziamo `and_then` per catenare le operazioni `divide` solo se entrambi i valori sono `Some(T)`. Se uno dei valori è `None`, `result` sarà `None`.

Nota che `and_then` può essere utilizzato per eseguire operazioni complesse su valori `Option<T>`, garantendo che l'operazione venga eseguita solo se tutti i valori sono presenti (non `None`). Questo contribuisce a una gestione più sicura dei casi speciali nel tuo codice.

:::info
In programmazione, è possibile chiamare una funzione all'interno di un'altra funzione. Questo concetto è noto come **callback**. Quando una funzione viene chiamata all'interno di un'altra funzione, il flusso di controllo si sposta alla funzione chiamata e poi ritorna alla funzione chiamante quando la chiamata è completata.

Immagina di avere due funzioni: `funzioneA` e `funzioneB`. Se chiami `funzioneB` all'interno di `funzioneA`, il programma eseguirà prima le istruzioni di `funzioneA`, poi passerà a `funzioneB`, eseguirà le sue istruzioni, e infine tornerà a `funzioneA` dopo aver completato `funzioneB`. Questo processo può ripetersi quante volte vuoi, consentendo di organizzare il codice in modo modulare e leggibile.

Ecco un esempio:

```rust
// Definiamo la funzione B
fn funzioneB() {
    println!("Sono nella funzione B!");
}

// Definiamo la funzione A che chiama funzioneB
fn funzioneA() {
    println!("Sono nella funzione A!");
    funzioneB(); // Chiamiamo funzioneB da dentro funzioneA
    println!("Ora sono di nuovo in funzione A dopo aver chiamato funzioneB!");
}

fn main() {
    funzioneA(); // Chiamiamo funzioneA per avviare il programma
}
```

In questo esempio, `funzioneA` chiama `funzioneB`, e il programma stampa i messaggi nel seguente ordine:

```
Sono nella funzione A!
Sono nella funzione B!
Ora sono di nuovo in funzione A dopo aver chiamato funzioneB!
```

Come puoi vedere, `funzioneB` è chiamata all'interno di `funzioneA`, e il flusso del programma segue questa sequenza di chiamate di funzioni. Questa è una pratica comune nella programmazione per organizzare il codice in modo più comprensibile e modulare.
:::