---
sidebar_position: 1
---
# Strutture e Enumerazioni
Nel vasto mondo della programmazione, le informazioni vengono spesso organizzate e manipolate attraverso dati strutturati. In Rust, due costrutti fondamentali per questa organizzazione dei dati sono le **strutture** e le **enumerazioni**. In questo capitolo, esploreremo questi concetti in dettaglio.

## Strutture (Structs)
Le **strutture** ci permettono di creare nuovi tipi di dati personalizzati raggruppando insieme diversi tipi di dati esistenti. Ogni elemento all'interno di una **struttura** è chiamato *campo*, e queste strutture sono particolarmente utili quando vogliamo rappresentare oggetti complessi con diverse *proprietà*. Con l'utilizzo delle **strutture**, possiamo organizzare dati come nomi, età, punti in un gioco, o qualsiasi combinazione di dati che ha senso per il nostro programma.

### Definizione di una Struttura

```rust
struct Persona {
    nome: String,
    eta: u32,
    punteggio: u64,
}
```
Nel codice sopra, abbiamo definito una struttura chiamata `Persona` con tre campi: `nome` di tipo `String`, `eta` di tipo `u32` e `pounteggio` di tipo `u64`.

### Utilizzo di una Struttura
```rust
fn main() {
    let persona1 = Persona {
        nome: String::from("Alice"),
        eta: 30,
        punteggio: 711,
    };

    println!("Nome: {}, Età: {}, Punteggio: {}", persona1.nome, persona1.eta, persona1.punteggio);
}
```

## Enumerazioni (Enums)
Le enumerazioni ci permettono di definire un tipo di dato che può avere diversi valori. Sono utili quando vogliamo rappresentare una variabile che può essere solo uno tra diversi stati possibili.

### Definizione di un'Enumerazione

```rust
enum Stato {
    Attivo,
    Inattivo,
    Pausa,
}
```
Nel codice sopra, abbiamo definito un'enumerazione chiamata `Stato` con tre varianti: `Attivo`, `Inattivo` e `Pausa`.

### Utilizzo di un'Enumerazione
```rust
fn main() {
    let stato_corrente = Stato::Attivo;

    match stato_corrente {
        Stato::Attivo => println!("Il sistema è attivo."),
        Stato::Inattivo => println!("Il sistema è inattivo."),
        Stato::Pausa => println!("Il sistema è in pausa."),
    }
}
```

## Esempio di un programma Calcolatrice
In questa versione, calcoleremo il risultato direttamente nel blocco `match`:

```rust
// Definiamo un'enumerazione per rappresentare le operazioni della calcolatrice
enum Operazione {
    Addizione,
    Sottrazione,
    Moltiplicazione,
    Divisione,
    Modulo,
}

// Definiamo una struttura per immagazzinare l'operazione e i due operandi
struct Calcolatrice {
    operazione: Operazione,
    operando1: f64,
    operando2: f64,
}

fn main() {
    // Creiamo una nuova istanza di Calcolatrice
    let calcolatrice = Calcolatrice {
        operazione: Operazione::Addizione,
        operando1: 10.0,
        operando2: 5.0,
    };

    // Eseguiamo il calcolo basato sull'operazione selezionata
    let risultato = match calcolatrice.operazione {
        Operazione::Addizione => calcolatrice.operando1 + calcolatrice.operando2,
        Operazione::Sottrazione => calcolatrice.operando1 - calcolatrice.operando2,
        Operazione::Moltiplicazione => calcolatrice.operando1 * calcolatrice.operando2,
        Operazione::Divisione => calcolatrice.operando1 / calcolatrice.operando2,
        Operazione::Modulo => calcolatrice.operando1 % calcolatrice.operando2,
    };

    // Stampiamo il risultato del calcolo
    println!("Il risultato del calcolo è: {}", risultato);
}
```
In questa versione, il blocco `match` viene utilizzato direttamente nel blocco `main()`, eliminando la necessità di un metodo separato. Il programma funziona in modo simile alla versione precedente, calcolando il risultato in base all'operazione selezionata e stampandolo a schermo. I commenti sono inclusi nel codice per spiegare le diverse parti del programma.

## I metodi
I metodi sono come le funzioni, ma hanno una differenza chiave. Li dichiariamo con `fn`, come le funzioni, e possono accettare parametri e restituire un valore. La cosa speciale dei metodi è che sono legati a una struttura, un'enumerazione o un oggetto di un trait (che vedremo più avanti nel corso del nostro apprendimento). 

La differenza principale è il primo parametro di un metodo, che è sempre `self`. Questo `self` rappresenta l'istanza della struttura o dell'oggetto su cui il metodo viene chiamato. In altre parole, i metodi sono funzioni associate a una specifica struttura e possono accedere e modificare i dati di quella struttura in modo organizzato. Questo li rende molto utili per organizzare il codice in modo più coerente e comprensibile.

### Implementazione metodi nel programma Calcolatrice
```rust
// Definiamo un'enumerazione per rappresentare le operazioni della calcolatrice
enum Operazione {
    Addizione,
    Sottrazione,
    Moltiplicazione,
    Divisione,
    Modulo,
}

// Definiamo una struttura per immagazzinare l'operazione e i due operandi
struct Calcolatrice {
    operazione: Operazione,
    operando1: f64,
    operando2: f64,
}

// Implementiamo un metodo per la struttura Calcolatrice per eseguire l'operazione
impl Calcolatrice {
    fn esegui_calcolo(&self) -> f64 {
        match self.operazione {
            Operazione::Addizione => self.operando1 + self.operando2,
            Operazione::Sottrazione => self.operando1 - self.operando2,
            Operazione::Moltiplicazione => self.operando1 * self.operando2,
            Operazione::Divisione => self.operando1 / self.operando2,
            Operazione::Modulo => self.operando1 % self.operando2,
        }
    }
}

fn main() {
    // Creiamo una nuova istanza di Calcolatrice
    let calcolatrice = Calcolatrice {
        operazione: Operazione::Addizione,
        operando1: 10.0,
        operando2: 5.0,
    };

    // Eseguiamo il calcolo e stampiamo il risultato
    let risultato = calcolatrice.esegui_calcolo();
    println!("Il risultato del calcolo è: {}", risultato);
}
```

#### Definizione dell'Enumerazione `Operazione`
```rust
enum Operazione {
    Addizione,
    Sottrazione,
    Moltiplicazione,
    Divisione,
    Modulo,
}
```
Qui abbiamo definito un'enumerazione chiamata `Operazione` che rappresenta le operazioni della calcolatrice.

#### Definizione della Struttura `Calcolatrice`
```rust
struct Calcolatrice {
    operazione: Operazione,
    operando1: f64,
    operando2: f64,
}
```
Abbiamo creato una struttura chiamata `Calcolatrice` con tre campi: `operazione` di tipo `Operazione`, `operando1` e `operando2` di tipo `f64`.

#### Implementazione del Metodo per la Struttura `Calcolatrice`
```rust
impl Calcolatrice {
    fn esegui_calcolo(&self) -> f64 {
        match self.operazione {
            Operazione::Addizione => self.operando1 + self.operando2,
            Operazione::Sottrazione => self.operando1 - self.operando2,
            Operazione::Moltiplicazione => self.operando1 * self.operando2,
            Operazione::Divisione => self.operando1 / self.operando2,
            Operazione::Modulo => self.operando1 % self.operando2,
        }
    }
}
```
Qui abbiamo implementato un metodo `esegui_calcolo()` per la struttura `Calcolatrice`. Questo metodo viene chiamato sull'istanza di `Calcolatrice` su cui viene chiamato e non prende alcun parametro aggiuntivo (`&self` è un riferimento all'istanza su cui viene chiamato).

#### Utilizzo del Metodo nel blocco `main()`
```rust
fn main() {
    let calcolatrice = Calcolatrice {
        operazione: Operazione::Addizione,
        operando1: 10.0,
        operando2: 5.0,
    };

    let risultato = calcolatrice.esegui_calcolo();
    println!("Il risultato del calcolo è: {}", risultato);
}
```
Nel blocco `main()`, creiamo un'istanza di `Calcolatrice`, specificando l'operazione e gli operandi. Quindi chiamiamo il metodo `esegui_calcolo()` su questa istanza utilizzando la sintassi `istanza.metodo()`. Il risultato viene quindi stampato a schermo.

In questo esempio, il metodo `esegui_calcolo()` è associato all'istanza di `Calcolatrice` su cui viene chiamato, e può accedere ai campi `operazione`, `operando1` e `operando2` della stessa istanza. Questo concetto è fondamentale nella programmazione orientata agli oggetti, in cui i metodi operano sui dati dell'istanza a cui appartengono.

## Conclusione
Le strutture e le enumerazioni sono potenti strumenti che Rust ci offre per organizzare e rappresentare i dati nel nostro programma. Utilizzandoli correttamente, possiamo scrivere codice più chiaro, comprensibile e flessibile. Continua a esplorare e sperimentare con queste costruzioni per diventare un programmatore Rust più competente! Buona programmazione!