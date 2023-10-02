---
sidebar_position: 2
---
# 2.2 I tipi di Dato
I tipi di dati in Rust definiscono il tipo di valore che una variabile può contenere. Sono fondamentali per comprendere come i dati vengono memorizzati e manipolati nel tuo programma. In questo capitolo, esploreremo i diversi tipi di dati disponibili in Rust.

## Numerici interi

In Rust, i tipi di dati interi possono essere signed (con segno) o unsigned (senza segno). Vediamo cosa significa e fornisco un esempio per chiarire meglio.
1. **Signed (Con Segno):**
   - `i8`: Rappresenta un intero con segno su 8 bit.
   - `i16`: Rappresenta un intero con segno su 16 bit.
   - `i32`: Rappresenta un intero con segno su 32 bit.
   - `i64`: Rappresenta un intero con segno su 64 bit.
   - `i128`: Rappresenta un intero con segno su 128 bit.
   - `isize`: Numero intero con segno che può rappresentare l'indice di un'area di memoria (architettura-specifico).

2. **Unsigned (Senza Segno):**
   - `u8`: Rappresenta un intero senza segno su 8 bit.
   - `u16`: Rappresenta un intero senza segno su 16 bit.
   - `u32`: Rappresenta un intero senza segno su 32 bit.
   - `u64`: Rappresenta un intero senza segno su 64 bit.
   - `u128`: Rappresenta un intero senza segno su 128 bit.
   - `usize`: Numero intero senza segno che può rappresentare l'indice di un'area di memoria (architettura-specifico). 

**Esempio:**

```rust
fn main() {
    // Tipi di dati con segno
    let intero_con_segno: i32 = -42; // Un intero con segno su 32 bit
    println!("Intero con segno: {}", intero_con_segno);

    // Tipi di dati senza segno
    let intero_senza_segno: u64 = 172653; // Un intero senza segno su 64 bit
    println!("Intero senza segno: {}", intero_senza_segno);
}
```
In questo esempio, abbiamo creato variabili di tipo `i32` e `u64`. `i32` rappresenta un intero con segno su 32 bit, mentre `u64` rappresenta un intero senza segno su 64 bit. Puoi vedere come i valori possono variare in base al tipo di dato utilizzato. I tipi di dati con segno possono rappresentare sia numeri positivi che negativi, mentre i tipi senza segno rappresentano solo numeri positivi o zero.

:::info
In informatica, i **bit** sono l'unità fondamentale di informazione e rappresentano il valore più piccolo in un sistema di numerazione binario. Il termine **bit** deriva dalla contrazione di "*binary digit*" (cifra binaria in italiano) e può essere in uno dei due stati: 0 o 1.

Ogni dispositivo informatico, dal tuo computer al tuo smartphone, manipola e archivia dati utilizzando combinazioni di **bit**. Queste sequenze di **bit** vengono interpretate per rappresentare numeri, caratteri, istruzioni di programma e molto altro. Il concetto di **bit** è alla base di tutta l'informatica moderna e della rappresentazione digitale dei dati.

Le combinazioni di **bit** possono rappresentare valori numerici utilizzando il sistema di numerazione binario, in cui ogni posizione rappresenta una potenza di 2. Ad esempio, il numero binario "1010" rappresenta il numero 10 in decimale, poiché corrisponde a 1x2^3 + 0x2^2 + 1x2^1 + 0x2^0.

I **bit** sono fondamentali anche per l'aritmetica booleana, un'area della logica matematica che gestisce operazioni logiche come *AND, OR e NOT*. Queste operazioni sono alla base del funzionamento dei circuiti digitali e dei calcoli logici nei computer.
:::

## Numerici a virgola mobile
I tipi di dati a virgola mobile in Rust sono utilizzati per rappresentare numeri con decimali. Ci sono due tipi principali di dati a virgola mobile in Rust: `f32` e `f64`, che rappresentano numeri in virgola mobile a 32 bit e 64 bit rispettivamente. La differenza principale tra loro è la precisione: `f64` ha una maggiore precisione rispetto a `f32`, ma occupa più spazio in memoria.

**Esempio:**
```rust
fn main() {
    let numero_f32: f32 = 3.14; // Numero a virgola mobile a 32 bit
    let numero_f64: f64 = 3.141592653589793; // Numero a virgola mobile a 64 bit

    println!("Numero a virgola mobile a 32 bit: {}", numero_f32);
    println!("Numero a virgola mobile a 64 bit: {}", numero_f64);
}
```
In questo esempio, `numero_f32` è un numero a virgola mobile a 32 bit e `numero_f64` è un numero a virgola mobile a 64 bit. Quando si lavora con calcoli che richiedono alta precisione, è consigliabile utilizzare `f64`. Tuttavia, se si ha bisogno solo di una precisione limitata e si desidera risparmiare memoria, `f32` può essere utilizzato. La scelta tra i due tipi dipende dalle esigenze specifiche dell'applicazione.

## Carattere
In Rust, il tipo di dato `char` è utilizzato per rappresentare un singolo carattere Unicode. Un carattere Unicode può essere una lettera, un numero, un segno di punteggiatura o un altro simbolo speciale.

Ecco come dichiarare una variabile di tipo `char` e assegnarle un valore:

```rust
fn main() {
    let carattere: char = 'A';
    println!("Il carattere è: {}", carattere);
}
```

In questo esempio, `carattere` è una variabile di tipo `char` che contiene il carattere `'A'`. Quando si stampa `carattere`, verrà visualizzato `'A'`.

Puoi anche utilizzare caratteri Unicode più complessi, come emoji o caratteri speciali. Ad esempio:

```rust
fn main() {
    let cuore: char = '❤';
    let stella: char = '★';
    println!("Emoji cuore: {}", cuore);
    println!("Stella: {}", stella);
}
```

In questo caso, `cuore` contiene l'emoji cuore e `stella` contiene il carattere di stella. Rust supporta completamente Unicode, il che significa che puoi utilizzare una vasta gamma di caratteri da diverse lingue e culture nel tuo codice.

## Booleani
I tipi di dato booleani in Rust sono molto semplici ma fondamentali. Un tipo di dato booleano può avere solo due valori: `true` o `false`. Questi valori sono utilizzati per rappresentare le condizioni logiche nel tuo programma. Ad esempio, puoi usare un valore booleano per determinare se una condizione è vera o falsa.

Ecco un esempio di come puoi utilizzare i tipi di dato booleani in Rust:

```rust
fn main() {
    // Definizione di variabili booleane
    let vero = true;
    let falso = false;

    // Esempio di confronto che restituisce un valore booleano
    let numero1 = 10;
    let numero2 = 5;
    let maggiore = numero1 > numero2; // maggiore conterrà il valore booleano true

    // Esempio di espressione condizionale basata su un valore booleano
    if maggiore {
        println!("Il numero1 è maggiore di numero2.");
    } else {
        println!("Il numero2 è maggiore o uguale a numero1.");
    }
}
```

In questo esempio, `vero` e `falso` sono variabili booleane che possono essere `true` o `false` rispettivamente. La variabile `maggiore` è una variabile booleana che contiene il risultato del confronto tra `numero1` e `numero2`. Nel blocco `if`, il programma stampa un messaggio diverso a seconda che `maggiore` sia vero o falso.

I tipi di dato booleani sono ampiamente utilizzati nelle espressioni condizionali, nei loop e in molte altre situazioni in cui è necessario valutare le condizioni nel tuo programma.

## Dati composti
I tipi di dati composti in Rust sono strutture dati che possono contenere più valori di tipi diversi.  
Le due principali forme di dati composti in Rust sono le *tuple* e gli *array*. Ma una menzione va fatta alle *stringhe*, approfondiremo nel dettaglio nel paragrafo 3.2.

### Tuple
Una tupla è una sequenza ordinata di elementi, che possono essere di tipi diversi. Le tuple consentono di raggruppare variabili in un unico valore.
Ecco un esempio di una tupla in Rust:

```rust
fn main() {
    let tupla: (i32, f64, char) = (42, 3.14, 'a');

    // Accesso agli elementi della tupla
    let (x, y, z) = tupla;

    println!("Il valore di y è: {}", y);
}
```

In questo esempio, `tupla` è una tupla che contiene un intero (`i32`), un numero in virgola mobile (`f64`), e un carattere (`char`). Puoi accedere agli elementi della tupla utilizzando la destrutturazione come mostrato nella variabile `(x, y, z)`.

### Array
Un array è una collezione di elementi dello stesso tipo, con una lunghezza fissa determinata durante la dichiarazione dell'array.
Ecco un esempio di un array in Rust:

```rust
fn main() {
    let numeri: [i32; 5] = [1, 2, 3, 4, 5];

    // Accesso agli elementi dell'array
    println!("Il terzo numero nell'array è: {}", numeri[2]);
}
```

In questo esempio, `numeri` è un array di interi (`i32`) con una lunghezza di 5 elementi. Puoi accedere agli elementi dell'array utilizzando l'indice, ad esempio, `numeri[2]` rappresenta il terzo elemento dell'array (l'indice è 0-based).

### Stringhe
Tra tutti i tipi di dati in Rust, le stringhe (sequenza di caratteri) rappresentano un aspetto particolarmente interessante e complesso. A differenza di molti altri linguaggi di programmazione, le stringhe in Rust sono gestite in modo unico per garantire sia la flessibilità che la sicurezza del programma.

Rust ha due principali tipi di dati per le stringhe: `String` e `&str`.

#### Stringhe di proprietà (`String`):
- **`String` è un tipo di dato dinamico che rappresenta una stringa di testo modificabile.** Puoi pensarla come una scatola che può contenere e modificare una sequenza di caratteri.

##### Esempio:
```rust
let mut mio_nome = String::from("Alice");
mio_nome.push_str(" in Wonderland");
println!("{}", mio_nome); // Output: Alice Wonderland
```
In questo esempio, `String::from` crea una nuova stringa di proprietà che può essere modificata con l'aggiunta di più testo usando il metodo `push_str`.

#### Stringhe di riferimento (`&str`):
- **`&str` è un tipo di dato che rappresenta una stringa di testo immutabile.** Puoi pensarla come un'etichetta che fa riferimento a una sequenza di caratteri. Le stringhe di riferimento sono solitamente utilizzate per puntare a porzioni di stringhe esistenti.

##### Esempio:
```rust
let saluto: &str = "Ciao, mondo!";
println!("{}", saluto); // Output: Ciao, mondo!
```
In questo esempio, `&str` è un riferimento a una stringa di testo fissa, e non può essere modificato.

Rust utilizza questi due tipi di stringhe per offrire un equilibrio tra flessibilità e sicurezza. Le `String` consentono la modifica dinamica del testo, mentre le `&str` consentono di riferirsi a porzioni di stringhe esistenti in modo efficiente e sicuro.

*Continua a leggere nel Capitolo 3.2 per esplorare più a fondo il mondo delle stringhe in Rust!*