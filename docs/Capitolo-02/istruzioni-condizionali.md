---
sidebar_position: 4
---
# 2.4 Istruzioni condizionali
Nella programmazione, le istruzioni condizionali sono fondamentali per prendere decisioni basate su condizioni specifiche. In Rust, ci sono diverse istruzioni condizionali che consentono di controllare il flusso del programma. Comprendere come utilizzare `if`, `else`, `else if` e `match` è essenziale per scrivere codice flessibile e reattivo.

### Istruzione `if`
L'istruzione `if` permette di eseguire un blocco di codice solo se una determinata condizione è vera.  
Ad esempio, immaginiamo di dover gestire un'app in cui gli utenti devono avere almeno 18 anni per accedere a determinate funzionalità:

```rust
fn main() {
    let eta: i32 = 20;

    if eta >= 18 {
        println!("Accesso consentito alle funzionalità riservate agli adulti.");
    } else {
        println!("Mi dispiace, devi avere almeno 18 anni per accedere a questa funzionalità.");
    }
}
```

### Istruzione `else`
L'istruzione `else` viene utilizzata in combinazione con `if` per gestire il caso in cui la condizione dell'`if` non è vera.  
Ad esempio, possiamo modificare l'esempio precedente per fornire un messaggio di errore più specifico:

```rust
fn main() {
    let eta: i32 = 15;

    if eta >= 18 {
        println!("Accesso consentito alle funzionalità riservate agli adulti.");
    } else {
        println!("Mi dispiace, devi avere almeno 18 anni per accedere a questa funzionalità. Ti mancano {} anni.", 18 - eta);
    }
}
```

### Istruzione `else if`
L'istruzione `else if` permette di gestire più condizioni in modo sequenziale. Supponiamo di dover gestire diverse fasce d'età:

```rust
fn main() {
    let eta: i32 = 25;

    if eta < 13 {
        println!("Sei un bambino.");
    } else if eta < 18 {
        println!("Sei un adolescente.");
    } else if eta < 30 {
        println!("Sei un giovane adulto.");
    } else {
        println!("Sei un adulto.");
    }
}
```

### Istruzione `match`
L'istruzione `match` è potente perché consente di confrontare un valore con una serie di pattern, offrendo un modo conciso per gestire diverse condizioni:

```rust
enum GiornoSettimana {
    Lunedi,
    Martedi,
    Mercoledi,
    Giovedi,
    Venerdi,
    Sabato,
    Domenica,
}

fn main() {
    let giorno = GiornoSettimana::Venerdi;

    match giorno {
        GiornoSettimana::Sabato | GiornoSettimana::Domenica => {
            println!("È il fine settimana! Tempo di relax.");
        }
        _ => {
            println!("È un giorno lavorativo. Al lavoro!");
        }
    }
}
```

Nel contesto di un'espressione `match` in Rust, `_ =>` è una clausola di fallback che viene eseguita quando nessuna delle altre clausole di pattern specificate nel blocco `match` viene soddisfatta.

Quindi, `match giorno { ... _ => { ... } }` indica che se il valore di `giorno` non corrisponde a `GiornoSettimana::Sabato` o `GiornoSettimana::Domenica`, la clausola `{ ... }` sottostante verrà eseguita. In altre parole, `_` rappresenta tutti gli altri casi che non sono stati specificamente menzionati nelle clausole precedenti del `match`.

In quest'ultimo esempio, se `giorno` è diverso da Sabato `OR` Domenica, verrà eseguita la clausola `println!("È un giorno lavorativo. Al lavoro!");`.

:::info
Nel capitolo 3.5, esploreremo un concetto potente di Rust chiamato "enum". Un enum, abbreviazione di "enumeration" (enumerazione), è un tipo di dato personalizzato che ci permette di definire un tipo che può avere diversi valori specifici. Gli enum in Rust sono particolarmente utili quando abbiamo un insieme limitato di valori possibili.
:::

### Conclusione
Le istruzioni condizionali sono un pilastro della programmazione, consentendo ai programmatori di scrivere codice che può adattarsi dinamicamente a diverse situazioni. Saper utilizzare `if`, `else`, `else if` e `match` in modo efficace è cruciale per creare applicazioni robuste e flessibili.