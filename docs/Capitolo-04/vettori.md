---
sidebar_position: 2
---
# 4.2 I Vettori
I **vettori** sono una *struttura dati* fondamentale in Rust e in molti altri linguaggi di programmazione. In Rust, i **vettori** sono usati per memorizzare una sequenza ordinata di elementi dello stesso tipo. Sono dinamici e possono crescere o diminuire di dimensione durante l'esecuzione del programma.

## Creare un Vettore
Creare un vettore in Rust è abbastanza semplice. Un vettore è una collezione dinamica di elementi dello stesso tipo.  
Puoi creare un vettore vuoto e successivamente aggiungere elementi ad esso, oppure un vettore già popolato con elementi con la macro `vec![]`

```rust
fn main() {
    // Creare un vettore vuoto di interi usando Vec::new()
    let mut numeri_vuoto: Vec<i32> = Vec::new();
    
    // Creare un vettore di interi usando vec![]
    let numeri_iniziali = vec![1, 2, 3, 4, 5];
    
    // Aggiungere elementi al vettore vuoto
    numeri_vuoto.push(6);
    numeri_vuoto.push(7);
    
    // Stampa i vettori
    println!("Numeri vuoto: {:?}", numeri_vuoto); // Output: [6, 7]
    println!("Numeri iniziali: {:?}", numeri_iniziali); // Output: [1, 2, 3, 4, 5]
}

```
Entrambe le linee di codice creano un vettore in Rust, ma ci sono alcune differenze chiave:

1. **Specificare il Tipo:**
   ```rust
   let mut numeri: Vec<i32> = Vec::new();
   ```
   In questa linea di codice, stiamo specificando esplicitamente che `numeri` sarà un vettore di interi (`Vec<i32>`). `Vec::new()` crea un vettore vuoto, e successivamente, specificando il tipo, indichiamo a Rust che il vettore conterrà interi (`i32`). Questo tipo di annotazione è noto come **annotazione di tipo esplicita**.

   ```rust
   let numeri = vec![1, 2, 3, 4, 5];
   ```
   Qui, stiamo utilizzando la macro `vec![]` per creare un vettore di interi. Rust deduce automaticamente il tipo degli elementi all'interno delle parentesi quadre. Questo è un esempio di **inferenza di tipo**, dove Rust deduce il tipo delle variabili basandosi sul valore che stai assegnando.

2. **Mutabilità:**
   ```rust
   let mut numeri: Vec<i32> = Vec::new();
   ```
   Nella prima riga, stiamo dichiarando `numeri` come mutabile (`mut`), il che significa che possiamo modificare il vettore aggiungendo o rimuovendo elementi.

   ```rust
   let numeri = vec![1, 2, 3, 4, 5];
   ```
   Nella seconda riga, il vettore è immutabile per impostazione predefinita, ma poiché non è stato dichiarato come mutabile, non possiamo modificare il vettore. Per esempio, non possiamo aggiungere o rimuovere elementi da `numeri` se non è dichiarato come mutabile.

In breve, la principale differenza è che la prima opzione fornisce un controllo più esplicito sul tipo e sulla mutabilità del vettore, mentre la seconda opzione è più concisa e fa affidamento sulla deduzione del tipo da parte di Rust. La scelta dipenderà dal contesto specifico del tuo programma e dalla tua preferenza per la chiarezza e la concisione nel codice.

### Accesso agli elementi
Per leggere gli elementi da un vettore in Rust, puoi utilizzare gli indici per accedere agli elementi specifici. Gli indici iniziano da zero. Ecco come puoi farlo usando l'esempio sopra:

```rust
fn main() {
    // Creare un vettore vuoto di interi usando Vec::new()
    let mut numeri_vuoto: Vec<i32> = Vec::new();
    
    // Creare un vettore di interi usando vec![]
    let numeri_iniziali = vec![1, 2, 3, 4, 5];
    
    // Aggiungere elementi al vettore vuoto
    numeri_vuoto.push(6);
    numeri_vuoto.push(7);
    
    // Accedere agli elementi dei vettori usando gli indici
    let primo_elemento = numeri_vuoto[0];
    let terzo_elemento = numeri_iniziali[2];
    
    // Stampa gli elementi letti dai vettori
    println!("Primo elemento di numeri_vuoto: {}", primo_elemento); // Output: 6
    println!("Terzo elemento di numeri_iniziali: {}", terzo_elemento); // Output: 3
}
```
In questo esempio, stiamo accedendo agli elementi dei vettori `numeri_vuoto` e `numeri_iniziali` usando gli indici `[0]` e `[2]`, rispettivamente. Ricorda che gli indici iniziano da zero, quindi `[0]` rappresenta il primo elemento del vettore.

Puoi utilizzare questa tecnica per accedere a qualsiasi elemento all'interno di un vettore, purché l'indice sia all'interno del range del vettore. Tieni presente che se provi ad accedere a un indice che non esiste nel vettore, il programma potrebbe comportarsi in modo imprevisto o addirittura andare in errore, quindi assicurati di accedere solo agli indici validi.

### Aggiungere elementi
Nel linguaggio Rust, puoi aggiungere elementi a un vettore utilizzando il metodo `push()`. Questo metodo consente di inserire un nuovo elemento alla fine del vettore. Nell'esempio sopra, abbiamo utilizzato il metodo `push()` per aggiungere elementi al vettore `numeri_vuoto`.

```rust
fn main() {
    // Creare un vettore vuoto di interi usando Vec::new()
    let mut numeri_vuoto: Vec<i32> = Vec::new();
    
    // Aggiungere elementi al vettore vuoto utilizzando il metodo push()
    numeri_vuoto.push(6);
    numeri_vuoto.push(7);
    
    // Stampa il vettore
    println!("Numeri vuoto: {:?}", numeri_vuoto); // Output: [6, 7]
}
```

1. **Creare un Vettore Vuoto:**
   ```rust
   let mut numeri_vuoto: Vec<i32> = Vec::new();
   ```
   Qui, abbiamo creato un nuovo vettore vuoto di interi utilizzando `Vec::new()`. L'uso di `mut` indica che il vettore è mutabile, il che significa che possiamo modificarlo aggiungendo o rimuovendo elementi.

2. **Aggiungere Elementi con `push()`:**
   ```rust
   numeri_vuoto.push(6);
   numeri_vuoto.push(7);
   ```
   Utilizziamo il metodo `push()` per aggiungere gli elementi `6` e `7` al vettore `numeri_vuoto`. Ogni chiamata a `push()` aggiunge un nuovo elemento alla fine del vettore.

3. **Stampa il Vettore:**
   ```rust
   println!("Numeri vuoto: {:?}", numeri_vuoto);
   ```
   Infine, stampiamo il vettore utilizzando la macro `println!()`. L'output sarà `[6, 7]` poiché questi sono gli elementi che abbiamo aggiunto al vettore.

Quindi, utilizzando il metodo `push()`, puoi facilmente aggiungere nuovi elementi a un vettore in Rust.

### Rimuovere elementi
Certamente! In Rust, puoi rimuovere gli elementi da un vettore in vari modi. Uno dei modi comuni per farlo è utilizzare il metodo `remove(index: usize)`, che rimuove l'elemento in una posizione specifica nell'array. Ecco come fare utilizzando l'esempio sopra:

```rust
fn main() {
    // Creare un vettore vuoto di interi usando Vec::new()
    let mut numeri_vuoto: Vec<i32> = Vec::new();
    
    // Creare un vettore di interi usando vec![]
    let mut numeri_iniziali = vec![1, 2, 3, 4, 5];
    
    // Aggiungere elementi al vettore vuoto
    numeri_vuoto.push(6);
    numeri_vuoto.push(7);
    
    // Rimuovere l'elemento in posizione 2 (indice 1) da numeri_iniziali
    let elemento_rimosso = numeri_iniziali.remove(1);
    
    // Stampa i vettori dopo la rimozione
    println!("Numeri vuoto: {:?}", numeri_vuoto); // Output: [6, 7]
    println!("Numeri iniziali dopo la rimozione: {:?}", numeri_iniziali); // Output: [1, 3, 4, 5]
    println!("Elemento rimosso: {:?}", elemento_rimosso); // Output: 2
}
```

In questo esempio, abbiamo utilizzato il metodo `remove(1)` per rimuovere l'elemento alla posizione 2 (indice 1) dal vettore `numeri_iniziali`. L'elemento rimosso (che è 2 in questo caso) viene restituito e assegnato alla variabile `elemento_rimosso`. Dopo la rimozione, il vettore `numeri_iniziali` non conterrà più l'elemento 2.

Ricorda che `remove(index)` elimina l'elemento nella posizione specificata e riduce la lunghezza del vettore. Gli indici iniziano da zero, quindi `remove(1)` rimuove l'elemento alla posizione 2 del vettore.

:::info
In Rust, `{:?}` è una formattazione utilizzata all'interno della macro `println!()` (e di altre macro di formattazione come `format!()`) per stampare il valore di una variabile in un formato detto "debug". Questo formato è utile quando vuoi stampare il valore di una variabile per scopi di debug o quando vuoi visualizzare il suo contenuto in modo dettagliato.

Quando utilizzi `{:?}`, Rust utilizzerà la trait `std::fmt::Debug` per formattare il valore della variabile. Questo significa che Rust cercherà di utilizzare un'implementazione di formattazione specifica per quel tipo di dato, se presente, oppure utilizzerà una formattazione di fallback se non è specificato alcun comportamento di formattazione personalizzato per quel tipo di dato.

Ecco un esempio di come utilizzare `{:?}` in un'espressione `println!()`:

```rust
fn main() {
    let numero = 42;
    let testo = "Ciao, Mondo!";
    let vettore = vec![1, 2, 3, 4, 5];

    println!("Numero: {:?}", numero);
    println!("Testo: {:?}", testo);
    println!("Vettore: {:?}", vettore);
}
```

In questo esempio, `{:?}` viene utilizzato per stampare il valore delle variabili `numero`, `testo` e `vettore`. Rust si occupa di formattare i valori in un modo che sia comprensibile per te durante la fase di debug. La formattazione specifica per ogni tipo di dato è gestita tramite l'implementazione di `std::fmt::Debug` per quel tipo. Questo approccio è flessibile e ti permette di formattare qualsiasi tipo di dato personalizzato implementando la trait `Debug` in modo appropriato per quel tipo.
:::

## Iterare sugli elementi
Puoi iterare sugli elementi di un vettore in Rust utilizzando un ciclo `for` o il metodo `iter()` del vettore. Ecco entrambi i modi:

### Utilizzando un Ciclo `for`
```rust
fn main() {
    let numeri = vec![1, 2, 3, 4, 5];

    // Iterare sugli elementi del vettore utilizzando un ciclo for
    for numero in &numeri {
        println!("{}", numero);
    }
}
```
In questo esempio, `&numeri` crea un riferimento al vettore originale. Il ciclo `for` itera su ogni elemento del vettore, e `numero` contiene il valore dell'elemento corrente durante ogni iterazione.

### Utilizzando il Metodo `iter()`
```rust
fn main() {
    let numeri = vec![1, 2, 3, 4, 5];

    // Iterare sugli elementi del vettore utilizzando il metodo iter()
    for numero in numeri.iter() {
        println!("{}", numero);
    }
}
```
In questo esempio, `numeri.iter()` restituisce un iteratore che puoi utilizzare per attraversare il vettore. Il ciclo `for` itera sugli elementi restituiti dall'iteratore.

Entrambi i metodi producono lo stesso risultato: stampare ogni elemento del vettore. Scegli il metodo che ti sembra più chiaro o che si adatta meglio al contesto del tuo programma. Entrambi i modi sono comuni e ampiamente utilizzati nella programmazione Rust.

## L'uso combinato dei Vettori e l'Enumerazioni
In Rust, puoi combinare l'utilizzo di enumerazioni (enum) con l'iterazione per gestire facilmente una serie di varianti di enum all'interno di un vettore o di un altro tipo di collezione. Questo è particolarmente utile quando hai una collezione di valori eterogenei rappresentati da diverse varianti di enum.

Supponiamo di avere un'enumerazione chiamata `Elemento` con diverse varianti:

```rust
enum Elemento {
    Intero(i32),
    Testo(String),
    Booleano(bool),
}
```

Ora creiamo un vettore che contiene diverse varianti di `Elemento`:

```rust
fn main() {
    let elementi: Vec<Elemento> = vec![
        Elemento::Intero(42),
        Elemento::Testo(String::from("Ciao")),
        Elemento::Booleano(true),
    ];

    // Itera sugli elementi del vettore e stampa il contenuto di ciascuna variante
    for elemento in &elementi {
        match elemento {
            Elemento::Intero(valore) => println!("Elemento Intero: {}", valore),
            Elemento::Testo(testo) => println!("Elemento Testo: {}", testo),
            Elemento::Booleano(valore) => println!("Elemento Booleano: {}", valore),
        }
    }
}
```

In questo esempio, abbiamo creato un vettore chiamato `elementi` che contiene tre varianti diverse di `Elemento`: `Intero(42)`, `Testo("Ciao")`, e `Booleano(true)`.

Successivamente, abbiamo utilizzato un ciclo `for` per iterare sugli elementi del vettore. All'interno del ciclo, abbiamo utilizzato una corrispondenza di modelli (`match`) per gestire ogni variante dell'enumerazione `Elemento`. A seconda della variante, stampiamo il contenuto associato alla variante.

Questo approccio ci consente di gestire facilmente diversi tipi di dati all'interno di un vettore utilizzando le varianti di un'enumerazione. Puoi estendere questa idea per gestire collezioni di dati eterogenei in modo più complesso all'interno del tuo programma Rust.

## Conclusioni
I vettori in Rust sono una struttura dati versatile che ti permette di gestire collezioni di elementi in modo efficiente. Sono dinamici, mutabili e offrono una serie di metodi utili per manipolare i dati al loro interno. Con una comprensione approfondita dei vettori, sarai in grado di gestire dati in modo più efficace nei tuoi programmi Rust.