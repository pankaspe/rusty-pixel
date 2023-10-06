---
sidebar_position: 3
---
# 5.3 Moduli
Nel mondo della programmazione, l'organizzazione del codice è fondamentale per la comprensione e la manutenzione del software. In Rust, l'organizzazione avviene attraverso l'uso intelligente dei **moduli**. Un modulo è un blocco di codice che raggruppa variabili, funzioni, strutture e altri elementi correlati.

I moduli in Rust sono come cartelle in cui metti file simili insieme. Ti aiutano a tenere separati concetti diversi nel tuo programma. Ad esempio, se stai costruendo un gioco, potresti avere un modulo per i personaggi, uno per i livelli e uno per i suoni. Questo rende più facile capire dove cercare quando vuoi modificare una parte specifica del tuo programma.

## Creare un Modulo
Per creare un modulo, basta utilizzare la keyword `mod`

```rust
mod personaggio {
    pub struct Personaggio {
        // definizione del personaggio
    }

    pub fn crea_personaggio() -> Personaggio {
        // logica per creare un personaggio
    }
}
```
In questo esempio, abbiamo creato un modulo chiamato `personaggio` che contiene una struttura `Personaggio` e una funzione `crea_personaggio`.

## Visibilità dei Moduli
Puoi controllare quali parti del tuo modulo sono visibili all'esterno usando la keyword `pub`. I membri contrassegnati come `pub` sono accessibili da altri moduli e crate. Questo ti dà il controllo su quali parti del tuo codice possono essere utilizzate da altri.

:::info
In Rust, i due punti doppi `::` vengono utilizzati per accedere a elementi all'interno di moduli, tipi, trait o costanti all'interno del proprio spazio dei nomi. Ecco come vengono utilizzati in diversi contesti:

1. **Accesso ai Moduli**: I due punti doppi vengono utilizzati per accedere a moduli nidificati o moduli esterni. Ad esempio, se hai un modulo `mio_modulo` e all'interno di esso c'è un modulo `sottomodulo`, puoi accedere a una funzione `mia_funzione` all'interno del `sottomodulo` usando `mio_modulo::sottomodulo::mia_funzione`.

2. **Accesso ai Tipi e alle Costanti**: Puoi utilizzare `::` per accedere a tipi definiti all'interno di un modulo. Ad esempio, se hai un tipo `MioTipo` all'interno di `mio_modulo`, puoi accedervi usando `mio_modulo::MioTipo`.

3. **Implementazione di Metodi**: I due punti doppi vengono utilizzati anche per definire metodi associati a un tipo o a un trait. Ad esempio, se hai un trait `MioTrait` e desideri implementare il metodo `mia_funzione` per quel trait, la sintassi sarebbe `impl MioTrait for MioTipo { ... }`, dove `::` è utilizzato per associare il metodo al trait.

4. **Accesso a Costanti**: Se hai dichiarato una costante all'interno di un modulo, puoi accedervi usando `::`. Ad esempio, se hai una costante `MIA_COSTANTE` all'interno di `mio_modulo`, puoi accedere ad essa usando `mio_modulo::MIA_COSTANTE`.

In generale, l'uso di `::` in Rust è fondamentale per navigare attraverso i moduli, accedere a tipi e definizioni, e associare implementazioni di metodi a tipi e trait.
:::

## Incorporare i Moduli in altri Moduli
Quando vuoi utilizzare un modulo all'interno di un altro modulo, puoi utilizzare la keyword `use`

```rust
mod gioco {
    use personaggio::crea_personaggio;

    pub fn avvia_gioco() {
        let mio_personaggio = crea_personaggio();
        // logica per avviare il gioco con il personaggio creato
    }
}
```

Qui stiamo utilizzando la funzione `crea_personaggio` dal modulo `personaggio` all'interno del nostro modulo `gioco`.

## Organizzazione gerarchica
Puoi anche organizzare i moduli in una struttura gerarchica, creando sottodirectory e utilizzando file separati per mantenere il codice pulito e ben organizzato.

L'uso intelligente dei moduli in Rust ti consente di scrivere codice comprensibile, manutenibile e facilmente estendibile. Organizzando il tuo codice in moduli, puoi gestire progetti complessi in modo più efficiente e renderli più accessibili a te stesso e agli altri sviluppatori.

Immaginiamo di dover sviluppare un gioco in Rust chiamato *SpaceAdventures*. Abbiamo bisogno di organizzare il nostro codice in una struttura gerarchica di moduli per mantenere il progetto ordinato e comprensibile. Ecco come potrebbe apparire la gerarchia dei moduli:

```plaintext
space_adventures/
├── main.rs
├── gioco/
│   ├── gioco.rs
│   ├── personaggio/
│   │   ├── personaggio.rs
│   │   └── nemici.rs
│   └── oggetti/
│       ├── arma.rs
│       └── power_up.rs
└── grafica/
    ├── schermate.rs
    └── animazioni.rs
```

In questo esempio:

- `main.rs` è il file principale del nostro programma Rust.
- Il modulo `gioco` è separato in file distinti: `gioco.rs` contiene la logica del gioco generale.
- Il modulo `personaggio` ha ulteriori moduli interni per `personaggio.rs` che definisce la struttura del personaggio e `nemici.rs` che gestisce la logica dei nemici nel gioco.
- Il modulo `oggetti` contiene moduli specifici per oggetti nel gioco, come `arma.rs` per definire armi e `power_up.rs` per i power-up.
- Il modulo `grafica` contiene moduli che gestiscono l'aspetto visivo del gioco, come `schermate.rs` per le diverse schermate del gioco e `animazioni.rs` per le animazioni.

Questa struttura organizzativa dei moduli rende il codice del nostro gioco comprensibile e facilmente estendibile. Ogni modulo si concentra su un aspetto specifico del gioco, facilitando la manutenzione e l'aggiunta di nuove funzionalità in futuro.

## Esempio completo
Ecco come potrebbe apparire il codice di *SpaceAdventures*

file `personaggio.rs`
```rust
// Contenuto del file personaggio.rs nel modulo personaggio
pub struct Personaggio {
    pub nome: String,
    pub punti_vita: i32,
}

impl Personaggio {
    pub fn nuova() -> Personaggio {
        Personaggio {
            nome: String::from("Eroe"),
            punti_vita: 100,
        }
    }
}
```

file `grafica.rs`
```rust
// Contenuto del file grafica.rs nel modulo grafica
pub mod grafica {
    pub fn disegna_personaggio(personaggio: &super::Personaggio) {
        println!("Disegna {} con {} punti vita.", personaggio.nome, personaggio.punti_vita);
    }
}
```
:::info
In Rust, `&super` viene utilizzato nei moduli per risalire alla gerarchia dei moduli e accedere ai loro elementi padre. Questo è particolarmente utile quando si sta lavorando con moduli annidati e si vuole accedere a elementi definiti nel modulo superiore.

Nel contesto dell'esempio fornito:

```rust
pub mod grafica {
    pub fn disegna_personaggio(personaggio: &super::Personaggio) {
        println!("Disegna {} con {} punti vita.", personaggio.nome, personaggio.punti_vita);
    }
}
```

In questo frammento di codice, `super` viene utilizzato per indicare il modulo padre rispetto al modulo corrente (`grafica`). Quando `super::Personaggio` viene utilizzato come tipo, sta accedendo alla struttura `Personaggio` definita nel modulo padre del modulo `grafica`. Ciò consente di utilizzare `Personaggio` all'interno del modulo `grafica` senza dover dichiarare nuovamente la sua definizione, semplificando il codice e mantenendo una chiara struttura modulare.
:::

file `main.rs`
```rust
// Contenuto del file main.rs
mod personaggio;
mod grafica;

use personaggio::Personaggio;
use grafica::grafica;

fn main() {
    // Crea un nuovo personaggio usando la funzione dal modulo personaggio
    let eroe = Personaggio::nuova();

    // Usa la funzione dal modulo grafica per disegnare il personaggio
    grafica(&eroe);
}
```

In questo esempio:

1. Nel modulo `personaggio`, definiamo una struttura `Personaggio` e una funzione `nuova` per crearne uno nuovo.
2. Nel modulo `grafica`, definiamo una funzione `disegna_personaggio` che accetta un riferimento a un `Personaggio` e lo stampa a schermo.
3. Nel file `main.rs`, includiamo i moduli `personaggio` e `grafica`. Creiamo un nuovo personaggio utilizzando la funzione `nuova` dal modulo `personaggio` e quindi chiamiamo la funzione `disegna_personaggio` dal modulo `grafica` per visualizzarlo.

Questa organizzazione modulare consente di separare chiaramente le responsabilità del codice. Il modulo `main` funge da punto di ingresso principale, interagendo con i moduli specializzati per svolgere compiti specifici. Questa struttura facilita la manutenzione, l'estensione e la comprensione del codice nel tempo.