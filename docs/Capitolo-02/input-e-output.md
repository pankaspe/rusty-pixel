---
sidebar_position: 7
---
# 2.5 Input e Output
In questo capitolo, esploreremo come ottenere l'input dall'utente e come mostrare l'output nel linguaggio di programmazione Rust. L'input e l'output sono fondamentali per qualsiasi programma, consentendo agli utenti di interagire con il software e visualizzare i risultati delle operazioni.

## Input Utente
Per ottenere l'input dall'utente, possiamo utilizzare la funzione `std::io::stdin()` insieme al metodo `read_line()`. Ecco un esempio:

```rust
use std::io; // Importa il modulo di input/output standard di Rust

fn main() {
    // Stampa un messaggio chiedendo all'utente di inserire qualcosa
    println!("Inserisci qualcosa:"); 
    
    // Crea una nuova stringa vuota per immagazzinare l'input
    let mut input = String::new(); 

    // Legge l'input dell'utente e lo memorizza nella variabile "input".
    // "expect()" viene utilizzato per gestire eventuali errori di input/output.
    io::stdin().read_line(&mut input).expect("Errore durante la lettura dell'input");
    
    // Stampa l'input dell'utente sulla console
    println!("Hai inserito: {}", input); 
}
```
1. `use std::io;`: Questa riga importa il modulo di input/output standard di Rust (`std::io`) nel tuo programma. Questo modulo contiene le funzioni e i tipi di dato necessari per l'input/output.
2. `fn main() { ... }`: Questo è il punto di ingresso del programma Rust. Tutte le istruzioni nel programma verranno eseguite a partire da qui.
3. `println!("Inserisci qualcosa:");`: Questa riga stampa un messaggio sulla console, chiedendo all'utente di inserire qualcosa.
4. `let mut input = String::new();`: Questa riga dichiara una variabile chiamata `input` che è di tipo `String` e la inizializza come una nuova stringa vuota (`String::new()`). La parola chiave `mut` indica che la variabile è mutabile, il che significa che il suo valore può cambiare.
5. `io::stdin().read_line(&mut input).expect("Errore durante la lettura dell'input");`: Questa riga legge l'input dell'utente dalla console e lo memorizza nella variabile `input`. La funzione `read_line()` prende un riferimento mutabile (`&mut input`) alla variabile `input` e legge l'input dell'utente. La funzione `expect()` viene utilizzata per gestire eventuali errori di input/output. Se si verifica un errore, il programma terminerà e stamperà il messaggio di errore specificato.
6. `println!("Hai inserito: {}", input);`: Questa riga stampa l'input dell'utente sulla console utilizzando la macro `println!()`. Il `{}` è un segnaposto che verrà sostituito con il valore di `input` quando verrà stampato.

Con questo codice, il programma attende l'input dell'utente, memorizza l'input nella variabile `input` e quindi stampa l'input sulla console.

## Output
Per mostrare l'output, utilizziamo la macro `println!()` per stampare testo sulla console:

```rust
fn main() {
    let nome = "Alice";
    let eta = 30;
    
    println!("Ciao, {}! Hai {} anni.", nome, eta);
}
```
In questo esempio, `{}` sono segnaposto per i valori delle variabili `nome` e `eta`.

:::info
In Rust, `println!()` è una *macro* che consente di stampare testo sulla console. Una *macro* in Rust è un modo per scrivere codice che genera altre porzioni di codice durante la compilazione.

Nel caso di `println!()`, è un costrutto speciale che ti permette di creare stringhe di output formattate in modo dinamico. La '**ln**' in `println!()` sta per "linea nuova", il che significa che la *macro* aggiungerà automaticamente una nuova linea dopo il testo che stampa, quindi il prossimo output apparirà su una nuova riga nella console.

La parte **!()** indica che `println` è una *macro* e non una funzione ordinaria. Quando usi una *macro* in Rust, devi usare il punto esclamativo ! per indicare che stai chiamando una *macro*.
:::

## Formattazione dell'Output
Rust offre una formattazione dell'output avanzata attraverso il macro `format!()`. Ecco un esempio:

```rust
fn main() {
    let pi = 3.14159;
    let risultato_formattato = format!("{:.2}", pi);  // Limita a 2 decimali
    
    println!("Il valore di Pi approssimato è: {}", risultato_formattato);
}
```
In questo esempio, `"{:.2}"` indica di formattare `pi` con due cifre decimali.

:::info
La macro `format!()` in Rust è simile a `println!()`, ma anziché stampare il testo sulla console, restituisce una nuova stringa formattata. È utile quando vuoi creare una stringa formattata senza stamparla immediatamente. Puoi poi decidere di stamparla o usarla in altri contesti del tuo programma.
:::

## Conclusioni
L'input e l'output sono aspetti essenziali della programmazione. In Rust, possiamo ottenere l'input dall'utente, mostrare l'output sulla console e formattare i risultati in modo preciso. Queste operazioni sono fondamentali per creare programmi interattivi e informativi. Con la conoscenza di queste tecniche, siamo pronti per creare applicazioni Rust più interattive e utili.