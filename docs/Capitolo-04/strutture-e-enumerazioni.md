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

## L'istruzione `if let`
L'istruzione `if let` in Rust è un costrutto che semplifica la gestione di specifiche corrispondenze di pattern in modo più conciso rispetto a un blocco `match`. È particolarmente utile quando ci interessa solo un caso specifico e non vogliamo gestire tutti i possibili risultati come faremmo con `match`.

In modo più semplice, `if let` ci consente di:
1. **Semplificare la corrispondenza dei Pattern:** Con `if let`, possiamo controllare se un valore corrisponde a un pattern specifico, destrutturando e ottenendo i valori contenuti in modo diretto.
2. **Leggibilità del codice:** Aiuta a scrivere codice più leggibile ed elegante, specialmente quando si tratta di controllare valori in strutture dati complesse come enum o struct.
3. **Utilizzo specifico:** È particolarmente utile quando ci interessa solo un singolo caso e non dobbiamo gestire tutti gli altri casi possibili.

```rust
// Definizione di un'enumerazione per rappresentare lo stato
enum Stato {
    Accesso,
    Spento,
}

fn main() {
    // Variabile che tiene traccia dello stato attuale
    let stato_attuale = Stato::Accesso;

    // Utilizziamo if let per verificare e stampare lo stato attuale
    if let Stato::Accesso = stato_attuale {
        println!("Il dispositivo è acceso!");
        // Qui puoi eseguire azioni specifiche quando il dispositivo è acceso
    } else {
        println!("Il dispositivo è spento!");
        // Qui puoi eseguire azioni specifiche quando il dispositivo è spento
    }
}
```
In questo esempio:

1. Abbiamo definito un'enumerazione chiamata `Stato` con due varianti: `Accesso` e `Spento`.
2. Nella funzione `main()`, abbiamo creato una variabile `stato_attuale` che rappresenta lo stato attuale del dispositivo (nell'esempio, è impostato su `Stato::Accesso`).
3. Utilizziamo `if let` per controllare il valore di `stato_attuale`. Se `stato_attuale` è uguale a `Stato::Accesso`, stampiamo "Il dispositivo è acceso!". Altrimenti, se `stato_attuale` non è uguale a `Stato::Accesso`, stampiamo "Il dispositivo è spento!".

L'uso di `if let` in questo modo consente di gestire diversi stati in modo chiaro e leggibile, evitando la necessità di utilizzare un blocco `match` più complesso per una semplice verifica di uguaglianza.

## I metodi
I metodi sono come le funzioni, ma hanno una differenza chiave. Li dichiariamo con `fn`, come le funzioni, e possono accettare parametri e restituire un valore. La cosa speciale dei metodi è che sono legati a una struttura, un'enumerazione o un oggetto di un trait (che vedremo più avanti nel corso del nostro apprendimento). 

La differenza principale è il primo parametro di un metodo, che è sempre `self`. Questo `self` rappresenta l'istanza della struttura o dell'oggetto su cui il metodo viene chiamato. In altre parole, i metodi sono funzioni associate a una specifica struttura e possono accedere e modificare i dati di quella struttura in modo organizzato. Questo li rende molto utili per organizzare il codice in modo più coerente e comprensibile.

Immagina che abbiamo una struttura chiamata `Auto` che rappresenta le informazioni di un'automobile, come il modello e la velocità. Utilizzando l'istruzione `impl`, possiamo definire un metodo `mostra_info()` che stampa le informazioni dell'auto. Vediamo come funziona con l'utilizzo di `&self`:

```rust
// Definizione della struttura `Auto` con due campi: `modello` di tipo String e `velocita` di tipo u32
struct Auto {
    modello: String,
    velocita: u32,
}

// Implementazione dei metodi associati alla struttura `Auto`
impl Auto {
    // Metodo per mostrare le informazioni dell'auto
    fn mostra_info(&self) {
        // Stampa il modello dell'auto
        println!("Modello: {}", self.modello);
        // Stampa la velocità dell'auto seguita da "km/h"
        println!("Velocità: {} km/h", self.velocita);
    }
}

fn main() {
    // Creazione di un'istanza di `Auto` con un modello "SUV" e velocità 120 km/h
    let mia_auto = Auto {
        modello: String::from("SUV"),
        velocita: 120,
    };

    // Chiamata al metodo `mostra_info()` sull'istanza `mia_auto` usando `&self`
    mia_auto.mostra_info();
}
```

Nel codice sopra:

1. `struct Auto { ... }` definisce la struttura `Auto` con due campi: `modello` di tipo `String` e `velocita` di tipo `u32`.
2. `impl Auto { ... }` implementa i metodi associati alla struttura `Auto`.
3. `fn mostra_info(&self) { ... }` è un metodo che accetta un riferimento immutabile (`&self`) all'istanza di `Auto` chiamante. Questo metodo stampa il modello e la velocità dell'auto.
4. Nel blocco `main()`, creiamo un'istanza di `Auto` chiamata `mia_auto` con un modello "SUV" e velocità 120 km/h.
5. `mia_auto.mostra_info();` chiama il metodo `mostra_info()` sull'istanza `mia_auto` per visualizzare le informazioni dell'auto.
```

In questo esempio, `&self` rappresenta un riferimento all'istanza dell'oggetto chiamante. Quando chiamiamo il metodo `mostra_info()` su `mia_auto`, `&self` diventa un riferimento all'istanza di `mia_auto`.

Quando utilizziamo `&self`, il metodo può accedere ai campi dell'istanza tramite il riferimento, ma non può modificare l'istanza originale. In altre parole, `&self` indica che il metodo non prende la proprietà dell'oggetto, ma può accedere solo ai suoi dati in modo non mutabile.

Se avessimo usato `&mut self` invece di `&self`, il metodo avrebbe potuto modificare l'istanza originale. Tuttavia, in questo caso, poiché stiamo solo visualizzando le informazioni e non facendo alcuna modifica, `&self` è sufficiente e sicuro da utilizzare.

## Conclusione
Le strutture e le enumerazioni sono potenti strumenti che Rust ci offre per organizzare e rappresentare i dati nel nostro programma. Utilizzandoli correttamente, possiamo scrivere codice più chiaro, comprensibile e flessibile. Continua a esplorare e sperimentare con queste costruzioni per diventare un programmatore Rust più competente! Buona programmazione!