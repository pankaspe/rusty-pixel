---
sidebar_position: 3
---
# 4.3 Hash Map
Le **Hash Map** sono una delle strutture dati più utilizzate in programmazione, in quanto consentono di memorizzare dati in forma di coppie **chiave-valore**.   
n Rust, le Hash Map sono implementate attraverso il tipo `HashMap` fornito dalla libreria standard. Questo capitolo esplorerà cosa sono le Hash Map, come crearle e come utilizzarle efficacemente nei tuoi programmi Rust.

## Creare una Hash Map
Per utilizzare le Hash Map in Rust, è necessario importare la libreria `std::collections`.

```rust
use std::collections::HashMap;
```
:::info
In Rust, `std::collections` è un modulo che fa parte della libreria standard (`std`) del linguaggio. Contiene diverse strutture dati utili per organizzare e manipolare i dati nel tuo programma. Uno di questi è `HashMap`, che è una struttura dati di tipo tabella hash che associa chiavi a valori.

La riga di codice `use std::collections::HashMap;` sta importando la struttura dati `HashMap` dal modulo `std::collections` in modo che possiamo utilizzarla nel nostro programma senza dover sempre specificare il percorso completo del modulo.
:::

Una volta importata la libreria, puoi creare una nuova Hash Map vuota con la seguente sintassi:

```rust
fn main() {
    let mut mia_hashmap: HashMap<&str, i32> = HashMap::new();
}
```
Qui, stiamo dichiarando una nuova variabile chiamata `mia_hashmap` e stiamo assegnando ad essa una nuova Hash Map.   
La `HashMap`, come abbiamo detto, è una struttura dati che associa le **chiavi** ai **valori**. In questo caso, le **chiavi** saranno di tipo `&str` (riferimenti a stringhe) e i **valori** saranno di tipo `i32` (numeri interi a 32 bit).

La parola chiave `mut` prima del nome della variabile (`mia_hashmap`) indica che la Hash Map può essere modificata. Possiamo aggiungere, rimuovere o modificare elementi all'interno della Hash Map perché è mutabile.

`HashMap::new()` è un metodo che crea una nuova Hash Map vuota. Stiamo usando questo metodo per inizializzare la nostra `mia_hashmap` in modo che sia pronta per l'uso.

### Inserire elementi
Puoi inserire coppie chiave-valore all'interno di una Hash Map utilizzando il metodo `insert()`. Ecco un esempio:

```rust
fn main() {
    let mut mia_hashmap: HashMap<&str, i32> = HashMap::new();
    
    // Inserire coppie chiave-valore nella Hash Map
    mia_hashmap.insert("uno", 1);
    mia_hashmap.insert("due", 2);
    mia_hashmap.insert("tre", 3);
}
```

In questo esempio, abbiamo inserito tre coppie chiave-valore nella Hash Map `mia_hashmap`. La chiave è una stringa (`&str`) e il valore è un intero (`i32`).

### Accedere agli elementi
Puoi accedere ai valori all'interno di una Hash Map utilizzando le chiavi. Se conosci la chiave, puoi ottenere il valore associato.+

```rust
fn main() {
    let mut mia_hashmap: HashMap<&str, i32> = HashMap::new();

    // Inserire coppie chiave-valore nella Hash Map
    mia_hashmap.insert("uno", 1);
    mia_hashmap.insert("due", 2);
    
    // Accedere ai valori utilizzando le chiavi
    if let Some(valore) = mia_hashmap.get("uno") {
        println!("Il valore associato a 'uno' è: {}", valore);
    } else {
        println!("Chiave non trovata nella Hash Map.");
    }
}
```

In questo esempio, stiamo utilizzando il metodo `get("uno")` per ottenere il valore associato alla chiave `"uno"`. Il metodo restituirà `Some(valore)` se la chiave è presente nella Hash Map e `None` se non lo è.

### Rimuovere elementi
Puoi rimuovere elementi da una Hash Map utilizzando il metodo `remove()`. Ecco come farlo:

```rust
fn main() {
    let mut mia_hashmap: HashMap<&str, i32> = HashMap::new();

    mia_hashmap.insert("uno", 1);
    mia_hashmap.insert("due", 2);
    
    // Rimuovere un elemento dalla Hash Map
    mia_hashmap.remove("due");
}
```
In questo esempio, stiamo utilizzando il metodo `remove("due")` per rimuovere l'elemento con chiave `"due"` dalla Hash Map `mia_hashmap`. Dopo la rimozione, l'elemento associato alla chiave `"due"` non sarà più presente nella Hash Map.

## Iterare sugli elementi `for` & `iter()`
Puoi iterare sugli elementi di una Hash Map utilizzando un ciclo `for` ma è possibiler farlo, come per i Vettori, anche con la funzione `iter()`.
Questo codice accorpa entrambe i metodi

```rust
use std::collections::HashMap;

fn main() {
    // Creare una nuova HashMap vuota con chiavi di tipo &str e valori di tipo i32
    let mut mia_hashmap: HashMap<&str, i32> = HashMap::new();

    // Inserire coppie chiave-valore nella HashMap
    mia_hashmap.insert("uno", 1);
    mia_hashmap.insert("due", 2);

    // Iterare sugli elementi della HashMap utilizzando un ciclo for
    println!("Iterazione con ciclo for:");
    for (chiave, valore) in &mia_hashmap {
        println!("Chiave: {}, Valore: {}", chiave, valore);
    }

    // Iterare sugli elementi della HashMap utilizzando il metodo iter()
    println!("Iterazione con il metodo iter():");
    for (chiave, valore) in mia_hashmap.iter() {
        println!("Chiave: {}, Valore: {}", chiave, valore);
    }
}
```
In questo esempio, stiamo utilizzando un ciclo `for` per iterare su tutte le coppie chiave-valore nella Hash Map `mia_hashmap`. Durante ogni iterazione, `chiave` contiene la chiave corrente e `valore` contiene il valore corrispondente.

## Aggiungere una chiave e un valore solo se la chiave non è presente
Quando desideri aggiungere un elemento a una Hash Map solo se la chiave specificata non è già presente, puoi utilizzare il metodo `entry()` sulla Hash Map. Questo metodo restituisce un tipo di dato chiamato `Entry`, che rappresenta una voce nella Hash Map. Puoi chiamare il metodo `or_insert()` sull'oggetto `Entry` per inserire un valore solo se la chiave non è già presente nella Hash Map.

Ecco un esempio che mostra come farlo:

```rust
use std::collections::HashMap;

fn main() {
    // Creare una Hash Map di stringhe a interi
    let mut mia_hashmap: HashMap<String, i32> = HashMap::new();

    // Chiave e valore che vogliamo inserire
    let chiave = String::from("nome");
    let valore = 42;

    // Utilizzare il metodo entry() per verificare se la chiave è già presente nella Hash Map
    mia_hashmap.entry(chiave.clone()).or_insert(valore);

    // Stampa la Hash Map
    println!("{:?}", mia_hashmap); // Output: {"nome": 42}

    // Tentativo di inserire un'altra volta con la stessa chiave
    mia_hashmap.entry(chiave.clone()).or_insert(99);

    // Stampa la Hash Map dopo il secondo inserimento
    println!("{:?}", mia_hashmap); // Output: {"nome": 42}
}
```

In questo esempio, stiamo cercando di inserire la chiave `"nome"` con il valore `42` nella Hash Map `mia_hashmap`. Poiché la chiave non è già presente, viene inserita nella Hash Map. Successivamente, tentiamo di inserire nuovamente la stessa chiave con un valore diverso (`99`). Tuttavia, poiché la chiave è già presente nella Hash Map, il secondo inserimento non ha alcun effetto.

Utilizzando `entry()` e `or_insert()`, puoi gestire con facilità l'inserimento condizionale di chiavi e valori nella tua Hash Map in Rust.

Le Hash Map sono estremamente versatili e possono essere utilizzate in una vasta gamma di situazioni. Con la loro capacità di associare chiavi a valori, le Hash Map offrono un modo efficiente per organizzare e recuperare dati nel tuo programma Rust. Sperimenta con gli esempi forniti e scopri come le Hash Map possono migliorare l'organizzazione e l'accesso ai dati nei tuoi progetti Rust. Buon coding!