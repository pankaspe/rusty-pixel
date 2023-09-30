---
sidebar_position: 1
---
# 2.1 Le variabili
Le variabili in programmazione sono come scatole o contenitori virtuali che possono memorizzare informazioni. Immagina di avere una scatola etichettata con un nome, ad esempio "età", e all'interno di questa scatola puoi mettere un numero, come "10". Quindi, la variabile "età" contiene il valore "10". Puoi cambiare il valore all'interno della scatola quando ne hai bisogno.  
Le variabili sono utili perché consentono ai programmi di memorizzare e manipolare dati. Ad esempio, potresti avere una variabile chiamata "punteggio" che tiene traccia del punteggio in un gioco o una variabile chiamata "nome" che memorizza il nome di una persona. Le variabili rendono i programmi flessibili e in grado di adattarsi a diverse situazioni.

### Le variabili in Rust
Le variabili sono contenitori che immagazzinano dati nel computer. Puoi creare variabili per memorizzare numeri, testi, strutture di dati e altri tipi di informazioni. Ecco come dichiarare e utilizzare variabili in Rust:

1. **Dichiarare una variabile:**
   Per dichiarare una variabile in Rust, usi la parola chiave `let`, seguita dal nome della variabile e dal valore che vuoi memorizzare.

   ```rust
   let nome = "Alice"; // Dichiarazione di una variabile di tipo stringa
   let eta = 30; // Dichiarazione di una variabile di tipo intero
   ```
   In Rust, le variabili sono **immutabili** per impostazione predefinita, il che significa che, una volta che assegni un valore a una variabile, non puoi modificarlo. Questa caratteristica contribuisce alla sicurezza e alla prevenzione degli errori nel codice.  
   La variabile `nome` e la variabile `eta` sono immutabili, non puoi assegnare a loro un nuovo valore in un secondo momento. Se provi a farlo, il compilatore di Rust ti darà un errore.

   ```
   ^^^^^^^^ cannot assign twice to immutable variable
   ```

2. **Variabili mutabili:**
   Per rendere una variabile modificabile, devi dichiararla come mutabile utilizzando la parola chiave `mut`.

   ```rust
   let mut contatore = 0; // Dichiarazione di una variabile mutabile
   contatore = 1; // Ora puoi modificare il valore di contatore
   ```
   Adesso la variabile `contatore` può mutare il suo valore. In questo modo, Rust ti offre un controllo preciso sulla mutabilità delle variabili nel tuo codice, contribuendo a creare programmi più sicuri e affidabili.

:::tip
`let` la parola chiave let viene utilizzata per dichiarare variabili. Il termine "let" è un'abbreviazione di "let binding" e rappresenta l'associazione di un nome di variabile a un valore o a un'espressione. Quando usi let per dichiarare una variabile, stai essenzialmente creando un legame (binding) tra un identificatore (il nome della variabile) e un valore. Questo legame ti consente di utilizzare e manipolare quel valore attraverso l'identificatore della variabile.
:::

### Lo shadowing in Rust
Lo shadowing è una tecnica che consente di dichiarare una nuova variabile, utilizzando sempre la parola chiave `let`, con lo stesso nome di una variabile esistente nello stesso scope. Questo processo "ombra" o "copre" la variabile precedente, rendendola inaccessibile fino a quando la nuova variabile non esce dallo scope.

Lo shadowing è utile per diverse ragioni:

1. **Cambiamento del tipo:** Puoi cambiare il tipo di dato di una variabile durante il processo di shadowing. Questo può essere utile se hai bisogno di cambiare il tipo di una variabile ma vuoi mantenere lo stesso nome. (*vedremo nel prossimo livello cosa sono i tipi*)

   ```rust
   let x = 5; // Variabile di tipo intero
   let x = "hello"; // Ora x è una stringa
   ```

2. **Rinominare variabili in modo leggibile:** Puoi usare lo shadowing per rendere i nomi delle variabili più descrittivi all'interno di uno stesso scope.

   ```rust
   let lunghezza = 5;
   let lunghezza = lunghezza * 2; // Ombreggia la variabile lunghezza con un nuovo valore
   ```

In generale, lo shadowing in Rust offre una flessibilità significativa nella gestione delle variabili all'interno di uno stesso scope, consentendo una maggiore chiarezza nel codice e una migliore gestione delle risorse.

:::tip
In programmazione, lo *scope* (ambito o contesto) si riferisce alla porzione di codice in cui una variabile è definita e può essere utilizzata. In altre parole, lo scope definisce la visibilità e la durata di una variabile all'interno di un programma. Una variabile può essere accessibile solo all'interno del suo scope `{}`.
:::

### Le costanti in Rust

Le costanti sono dichiarate con la parola chiave `const`. A differenza delle variabili immutabili, le costanti devono sempre avere un tipo annotato e non possono essere derivate da calcoli o funzioni. Inoltre, le costanti possono essere dichiarate in qualsiasi scope, compreso il livello globale. Ecco un esempio:

```rust
const PI: f64 = 3.14; // Costante con tipo e valore definiti
```

### Differenze chiave:

1. **Valore durante l'esecuzione:** Le variabili immutabili vengono valutate durante l'esecuzione del programma e possono essere calcolate o ottenute da funzioni. Le costanti devono avere valori noti a tempo di compilazione e non possono essere derivate da funzioni.

2. **Scoping:** Le variabili immutabili hanno uno scope limitato, sono definite all'interno di una funzione o di un blocco di codice. Le costanti possono avere uno scope globale e possono essere accessibili da qualsiasi parte del programma.

3. **Tipo:** Le variabili immutabili possono essere di qualsiasi tipo e il loro tipo può essere inferito dal compilatore. Le costanti devono avere un tipo annotato esplicitamente.

In breve, le variabili immutabili e le costanti in Rust offrono modi diversi per garantire l'immutabilità dei valori, ciascuno con le proprie caratteristiche e applicazioni specifiche nel codice Rust.

### Esempio completo
Ecco un esempio di calcolo della circonferenza di un cerchio utilizzando variabili e costanti in Rust, creiamo un nuovo progetto con cargo:

```rust
cargo new calcolo_circonferenza
```
Ora, accedi alla cartella del progetto appena creata utilizzando il comando `cd calcolo_circonferenza` e modifica il file `src/main.rs`

```rust
// Costante globale per il valore di pi greco, posizionata fuori dallo scope main {}
const PI: f64 = 3.14159;

fn main() {

   // Variabile per il raggio del cerchio
   let raggio: f64 = 5.0; 

   // Calcolo della circonferenza utilizzando la formula: C = 2 * pi * raggio
   let circonferenza: f64 = 2.0 * PI * raggio;

    println!("La circonferenza del cerchio con raggio {raggio} è: {circonferenza}");
}
```
:::tip
La funzione `main()` in Rust è il punto di ingresso principale di un programma. Quando esegui un programma Rust, il sistema operativo avvia l'esecuzione proprio dalla funzione `main()`. All'interno di `main()`, puoi scrivere il codice che vuoi che il programma esegua. Quindi, è fondamentale perché rappresenta il punto di partenza del tuo programma Rust, definendo cosa farà il programma quando verrà eseguito.
:::

Eseguite il progetto `calcolo_circonferenza`, sempre posizionati nella directory date il comando:
```bash
$ cargo run

Finished dev [unoptimized + debuginfo] target(s) in 0.00s
Running `target\debug\calcolo_circonferenza.exe`
La circonferenza del cerchio con raggio 5 è: 31.4159
```
In questo esempio:

- `PI` è una costante dichiarata con il valore approssimato di π (pi greco).
- `raggio` è una variabile che rappresenta il raggio del cerchio (nel nostro caso, 5.0).
- `circonferenza` è una variabile che contiene il risultato del calcolo `2 * PI * raggio`.

Il programma calcola la circonferenza del cerchio utilizzando la formula matematica `C = 2 * π * raggio` e stampa il risultato a schermo.  
Puoi modificare il valore di `raggio` per calcolare la circonferenza per cerchi con raggio diverso. La costante `PI` è utilizzata come una variabile immutabile (costante) nel calcolo, garantendo che non venga modificata accidentalmente durante l'esecuzione del programma.

:::info
Commentare il codice e usare un'indentazione ordinata è utile per migliorare la comprensibilità del codice. I commenti forniscono spiegazioni sul significato del codice, mentre l'indentazione crea una struttura visuale che facilita la lettura. Entrambi sono pratiche utili perché:
- **Commenti**: Aggiungono chiarimenti al codice. Quando altri programmatori o anche tu stesso rileggi il codice in futuro, i commenti aiutano a capire cosa fa una certa parte di codice, perché è stata scritta in quel modo o quali sono gli obiettivi di un particolare blocco di codice. I commenti rendono il codice più comprensibile per te e per gli altri.
- **Indentazione ordinata**: Rende la struttura del codice visivamente chiara. L'indentazione mostra i blocchi di codice annidati e aiuta a capire quale parte del codice è all'interno di un ciclo, di una condizione o di una funzione. Un'indentazione ordinata facilita il riconoscimento delle strutture di controllo del programma e migliora la leggibilità.
:::

Nel prossimo livello andremo a capire bene cosa sono i tipi di dato (`f64`) in rust e perchè sono importanti