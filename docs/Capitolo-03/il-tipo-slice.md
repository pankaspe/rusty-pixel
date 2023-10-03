---
sidebar_position: 4
---
# 3.4 Il tipo Slice
In Rust, lo **slice** è un *riferimento* a una parte contigua di una struttura dati come un array o una stringa. Gli **slice** consentono di lavorare con una porzione specifica di dati senza dover copiare tutto l'array o la stringa originale. Questo è utile per operazioni che richiedono solo una parte dei dati, come l'analisi di sottostringhe o l'ordinamento di parti di un array.

### Creare uno Slice:
Per creare un **slice**, specifica l'indice iniziale e quello finale della sequenza che desideri estrarre. Ad esempio, se abbiamo un array di numeri:

```rust
let numeri = [1, 2, 3, 4, 5];
let mio_slice = &numeri[1..4];
```

In questo esempio, `mio_slice` è un riferimento a una porzione dell'array `numeri` che va dall'indice 1 (incluso) all'indice 4 (escluso), quindi contiene `[2, 3, 4]`.

### Utilizzo degli Slice:
I **slice** possono essere utilizzati in funzioni per operare solo su parti specifiche dei dati senza dover passare l'intera sequenza. Ad esempio, se vogliamo calcolare la somma degli elementi di un certo intervallo in un array:

```rust
fn somma_intervallo(valori: &[i32]) -> i32 {
    let mut somma = 0;
    for &numero in valori {
        somma += numero;
    }
    somma
}

fn main() {
    let numeri = [1, 2, 3, 4, 5];
    let mio_slice = &numeri[1..4];
    
    let risultato = somma_intervallo(mio_slice);
    println!("La somma degli elementi nel mio_slice è: {}", risultato);
}
```

In questo esempio, `somma_intervallo` accetta un **slice** come parametro e calcola la somma degli elementi all'interno di questo intervallo.

Gli **slice** in Rust sono strumenti versatili che permettono di lavorare con dati in modo flessibile ed efficiente. Spero che questa introduzione ti dia un'idea chiara di cosa siano e come utilizzarli nel tuo codice Rust!