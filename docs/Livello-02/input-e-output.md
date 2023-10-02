---
sidebar_position: 4
---
# 2.4 Input e Output
In questo capitolo, esploreremo come interagire con gli utenti attraverso l'input e l'output nei programmi Rust. Imparerete come ottenere informazioni dagli utenti e come restituire dati ai loro schermi.

## Introduzione 
L'input e l'output rappresentano una parte fondamentale di molti programmi. È ciò che consente ai programmi di essere interattivi e di adattarsi alle esigenze degli utenti. In Rust, ci sono diverse librerie e funzionalità incorporate che rendono questo processo facile e intuitivo.

### Lettura dell'Input Utente
Per leggere l'input utente da tastiera, possiamo utilizzare la libreria standard di Rust `std::io`. Ecco un esempio di come leggere una stringa da tastiera:

```rust
use std::io;

fn main() {
    println!("Inserisci qualcosa:");
    
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Errore durante la lettura dell'input");
    
    println!("Hai inserito: {}", input);
}
```

In questo esempio, `io::stdin().read_line(&mut input)` legge una riga di testo dall'input utente e la memorizza nella variabile `input`. Notate l'uso di `&mut input` per consentire la modifica della variabile `input`.

### Scrittura dell'Output
Per stampare output sulla console, utilizziamo la macro `println!()`. Ecco un esempio:

```rust
fn main() {
    let nome = "Alice";
    let eta = 30;
    
    println!("Ciao, mi chiamo {} e ho {} anni.", nome, eta);
}
```

In questo esempio, `{}` vengono sostituiti dai valori di `nome` e `eta` all'interno della stringa di output.

### Esempio Completo: Calcolatrice Interattiva
Per mettere insieme ciò che abbiamo imparato, ecco un esempio di una semplice calcolatrice interattiva:

```rust
use std::io;

fn main() {
    println!("Benvenuto nella Calcolatrice Rust!");
    println!("Inserisci il primo numero:");
    
    let mut num1 = String::new();
    io::stdin().read_line(&mut num1).expect("Errore durante la lettura dell'input");
    let num1: f64 = num1.trim().parse().expect("Inserisci un numero valido");
    
    println!("Inserisci il secondo numero:");
    
    let mut num2 = String::new();
    io::stdin().read_line(&mut num2).expect("Errore durante la lettura dell'input");
    let num2: f64 = num2.trim().parse().expect("Inserisci un numero valido");
    
    let somma = num1 + num2;
    
    println!("Il risultato della somma è: {}", somma);
}
```

In questo esempio, il programma chiede all'utente di inserire due numeri e poi calcola la loro somma, stampando il risultato.