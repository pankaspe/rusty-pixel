---
sidebar_position: 2
---
# 6.2 Traits
I traits in Rust sono come regole sociali nella vita quotidiana. Immagina un trait come un "Ruolo" che una persona può avere nella società. Ad esempio, il trait "Guida" potrebbe definire il comportamento di chi può guidare un'auto. Ora, diverse persone nella tua vita quotidiana possono aderire al trait "Guida" in modi diversi: tuo padre può guidare l'auto di famiglia, mentre un autista di autobus guida un veicolo pubblico. Queste persone sono come strutture nel mondo reale. Una struttura può essere vista come un individuo specifico (come tuo padre) che aderisce a determinati ruoli (traits) nella società.

Ora, pensa ai metodi associati a questi traits come azioni specifiche legate a un ruolo. Il trait "Guida" potrebbe avere un metodo "Guida Sicura", che indica come ciascun guidatore deve comportarsi sulla strada, indipendentemente dal tipo di veicolo che guidano. Questi metodi sono come comportamenti che tutte le persone che aderiscono al trait devono seguire.

Nel mondo reale, i traits permettono una comunicazione standardizzata e condivisa tra diversi ruoli. Se sai che qualcuno aderisce al trait "Guida", sai che questa persona seguirà regole specifiche sulla strada, indipendentemente da chi sia.

Rust utilizza i traits allo stesso modo. Possono definire comportamenti comuni che diverse strutture possono implementare. Ad esempio, un trait "Stampabile" può definire un metodo "Stampa" che tutte le strutture devono implementare. Questo consente una comunicazione uniforme tra diverse strutture nel codice, rendendo il software più modulare, flessibile e facile da mantenere, proprio come le regole sociali standardizzate semplificano la vita quotidiana nella società. I traits in Rust sono come le regole sociali nella vita di tutti i giorni: offrono un modo per comunicare in modo coerente e standardizzato tra diverse parti di un sistema, rendendo il codice più organizzato e comprensibile.

## Definizione di un Trait
Per definire un trait, usiamo la parola chiave `trait` seguita dal nome del trait e i metodi che deve contenere:

```rust
trait Salutabile {
    fn saluta(&self) -> String;
}
```

Nell'esempio sopra, abbiamo definito un trait chiamato `Salutabile` con un metodo `saluta()`.

## Implementazione di un Trait
Le strutture possono implementare i traits. Implementiamo il trait `Salutabile` per una struttura `Persona`:

```rust
struct Persona {
    nome: String,
}

impl Salutabile for Persona {
    fn saluta(&self) -> String {
        format!("Ciao, sono {}!", self.nome)
    }
}
```

Ora, `Persona` aderisce al trait `Salutabile` e deve implementare il metodo `saluta()`.

## Utilizzo dei Traits
Ora possiamo usare il trait implementato:

```rust
fn presenta<T: Salutabile>(oggetto: T) {
    println!("{}", oggetto.saluta());
}

fn main() {
    let alice = Persona { nome: String::from("Alice") };
    presenta(alice); // Stampa: "Ciao, sono Alice!"
}
```

Nell'esempio sopra, `presenta()` è una funzione generica che accetta qualsiasi cosa che sia `Salutabile`. Possiamo passare un'istanza di `Persona` perché `Persona` implementa `Salutabile`.

## Tipo dinamico `&dyn`
In Rust, `&dyn` è una sintassi utilizzata per dichiarare un riferimento a un tipo dinamico (o dynamic type). Questo significa che il tipo del valore a cui il riferimento punta può essere determinato a tempo di esecuzione, in modo dinamico. Questo è particolarmente utile quando si lavora con traits (interfacce) e polimorfismo.

La combinazione di `&dyn` viene spesso utilizzata con i traits. Un trait in Rust definisce un comportamento comune per un tipo di dato. Quando si crea un riferimento a un trait (`&dyn Trait`), si sta creando un riferimento a un tipo che implementa quel trait specifico.

Ad esempio, considera il seguente trait:

```rust
trait Salutabile {
    fn saluta(&self) -> String;
}
```

Possiamo creare una funzione che accetta un riferimento a qualsiasi tipo che implementa il trait `Salutabile`:

```rust
fn saluta_oggetto(salutabile: &dyn Salutabile) {
    println!("{}", salutabile.saluta());
}
```

In questo caso, `&dyn Salutabile` è un riferimento a un tipo dinamico che implementa il trait `Salutabile`. Questo significa che la funzione `saluta_oggetto` può accettare qualsiasi cosa che aderisca al trait `Salutabile` come argomento, consentendo polimorfismo grazie all'utilizzo di `&dyn Salutabile`.
