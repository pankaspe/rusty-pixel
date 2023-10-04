---
sidebar_position: 1
---
# 2.1 Le variabili
Nel mondo della programmazione, le variabili fungono da contenitori per memorizzare dati. In Rust, una lingua di programmazione moderna, flessibile e sicura, l'uso delle variabili è particolarmente versatile. In questo capitolo, esploreremo in dettaglio i diversi tipi di variabili disponibili in Rust, comprendendo come utilizzarle per manipolare dati nei nostri programmi.

## Variabili immutabili
In Rust, per default, le variabili sono immutabili, il che significa che il loro valore non può essere modificato una volta assegnato. Ad esempio:

```rust
let eta = 30; // Variabile immutabile chiamata "eta" con il valore 30.
```

Se proviamo a cambiare il valore della variabile `eta`, cargo ci restituirà un errore:

```rust
let eta = 30; // Variabile immutabile chiamata "eta" con il valore 30.
eta = 55;
```
```rust
^^^^^^^^ cannot assign twice to immutable variable
```

:::info
`let` la parola chiave let viene utilizzata per dichiarare variabili. Il termine "let" è un'abbreviazione di "let binding" e rappresenta l'associazione di un nome di variabile a un valore o a un'espressione. Quando usi let per dichiarare una variabile, stai essenzialmente creando un legame (binding) tra un identificatore (il nome della variabile) e un valore. Questo legame ti consente di utilizzare e manipolare quel valore attraverso l'identificatore della variabile.
:::

## Variabili mutabili
Tuttavia, se vogliamo la possibilità di modificare il valore di una variabile dopo l'assegnazione, possiamo dichiararla come mutabile utilizzando la parola chiave `mut`:

```rust
let mut punteggio = 100; // Variabile mutabile chiamata "punteggio" con il valore 100.
punteggio = 150; // Ora possiamo cambiare il valore di "punteggio" perché è mutabile.
```

## Variabili shadowed
In Rust, è anche possibile "oscurare" una variabile precedentemente dichiarata utilizzando nuovamente la parola chiave `let`. Questo è noto come shadowing. Ad esempio:

```rust
fn main() {
    let nome = "Alice";
    let nome = nome.len(); // La variabile "nome" ora contiene la lunghezza della stringa originale.
    println!("La lunghezza del nome è: {}", nome);
}
```

Nell'esempio sopra, la variabile `nome` viene inizialmente assegnata a una stringa ("Alice") e poi viene "oscurata" (shadowed) da un nuovo valore, la lunghezza della stringa. Questo è possibile perché abbiamo dichiarato nuovamente `nome` utilizzando `let`. In questo modo, la variabile `nome` è stata effettivamente riassegnata a un valore diverso, ma con lo stesso nome.

## Differenza tra variabili shadowed e variabili mutabili
- **Variabili Mutabili:** Quando una variabile è dichiarata come mutabile (`let mut variabile`), è possibile modificare direttamente il suo valore. Questo significa che il valore può essere cambiato senza dover dichiarare una nuova variabile.
- **Variabili Shadowed:** Le variabili shadowed, d'altra parte, creano una nuova variabile con lo stesso nome, permettendoci di cambiare il tipo o il valore della variabile originale. Ogni variabile shadowed è indipendente dalla variabile con lo stesso nome dichiarata in precedenza.

In breve, le variabili shadowed ci permettono di reutilizzare il nome di una variabile per un nuovo scopo all'interno dello stesso `scope{}`, senza dover usare variabili mutabili. Questa tecnica è utile quando vogliamo mantenere il nostro codice leggibile e mantenibile, evitando l'uso eccessivo di variabili mutabili.

## Costanti
Inoltre, Rust ci permette di definire costanti, il cui valore non può essere cambiato durante l'esecuzione del programma. Le costanti vengono dichiarate utilizzando la parola chiave `const`. Ecco un esempio:

```rust
const PI: f64 = 3.14159; // Dichiarazione di una costante chiamata "PI" con valore 3.14159.
```

## Conclusione
Le variabili in Rust offrono un'ampia gamma di flessibilità, consentendoci di scegliere tra immutabilità, mutabilità, shadowing e costanti a seconda delle nostre esigenze specifiche. Queste caratteristiche ci permettono di scrivere codice robusto e sicuro, aprendo la strada a un mondo di possibilità nella programmazione con Rust. Nel prossimo capitolo, esploreremo come utilizzare queste variabili in operazioni matematiche e condizioni, espandendo così le nostre capacità nel linguaggio di programmazione Rust.

:::info
In programmazione, uno `scope{}` si riferisce alla parte di un programma in cui una variabile o una funzione può essere utilizzata o è visibile. Immagina uno `scope{}` come una stanza: tutto ciò che si trova dentro la stanza può essere visto e utilizzato da chi è dentro, ma non da chi è fuori.

Nel contesto di uno `scope{}`, una variabile definita all'interno di uno scope specifico è detta **variabile locale**. Questo significa che può essere utilizzata solo all'interno di quel determinato blocco di codice o di quella funzione in cui è stata dichiarata. Quando esci da quell'ambito, la variabile non è più disponibile e non può essere utilizzata.

Ad esempio, se hai una variabile chiamata `numero` definita all'interno di una funzione, puoi usarla solo all'interno di quella funzione. Se provi ad accedere a `numero` fuori dalla funzione, otterrai un errore perché quella variabile è limitata allo scope della funzione in cui è stata dichiarata.

Lo scope aiuta a mantenere il tuo codice organizzato e previene l'uso accidentale di variabili da parte di altre parti del programma. In poche parole, è una sorta di confine che delimita l'accesso alle variabili e alle funzioni in un programma, contribuendo a evitare confusione e errori.
:::
