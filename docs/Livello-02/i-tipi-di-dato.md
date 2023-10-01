---
sidebar_position: 2
---
# 2.2 I tipi di Dato
I tipi di dato in Rust rappresentano il tipo di valore che una variabile può contenere. In altre parole, indicano quale tipo di informazione può essere immagazzinato in una variabile. Ad esempio, un tipo di dato può essere un *numero intero*, un numero in *virgola mobile*, una *lettera* o persino una struttura di dati più complessa come una *tupla* o un *vettore*.

Quindi, immaginate i tipi di dato come "etichette" che aiutano il computer a capire quali operazioni può eseguire su un certo valore. Se un valore è di tipo *intero*, il computer sa che può eseguire operazioni matematiche come l'addizione o la sottrazione su quel valore. Se è di tipo testo, può eseguire operazioni come la concatenazione (unire diverse stringhe di testo insieme).

Immaginiamo di essere a scuola e di risolvere un problema semplice.  
Supponiamo di avere una scatola di matite e vogliamo sapere **quanti sono i diversi colori di matite** che possiamo trovare nella scatola.

In questo contesto:
- **Variabile:** La "variabile" è come il contenitore in cui mettiamo le nostre risposte. Ad esempio, chiamiamola "NumeroColori" e diciamo che è una variabile di tipo intero, perché vogliamo contare i colori, che sono numeri interi.
- **Tipi di Dato:** I "tipi di dato" sono come le categorie di matite. Le matite possono essere rosse, verdi, blu, ecc. Ognuna di queste categorie è un tipo di dato diverso. Nella programmazione, abbiamo tipi di dato come numeri interi, numeri in virgola mobile, testo e così via.
- **Assegnamento:** Quando diciamo che "NumeroColori" è uguale a 6, stiamo assegnando un valore alla nostra variabile. È come dire che nella nostra scatola di matite ci sono 6 colori diversi.
- **Operazioni:** Possiamo eseguire operazioni matematiche con le nostre variabili. Ad esempio, possiamo dire che se aggiungiamo 2 a "NumeroColori", otteniamo il totale dei colori dopo aver aggiunto due matite nuove alla scatola.

#### Tradotto nel linguaggio di Rust
```rust
fn main() {
    // Dichiarazione della variabile mutabile NumeroColori di tipo i32 (intero a 32 bit)
    let mut NumeroColori: i32 = 6; // Inizialmente ci sono 6 colori nella scatola
    
    // Aggiungiamo due nuovi colori alla scatola
    NumeroColori = NumeroColori + 2;
    
    // Stampiamo il numero totale di colori nella scatola
    println!("Numero totale di colori nella scatola: {NumeroColori}");
}
```

In questo codice:
- Abbiamo dichiarato la variabile `NumeroColori` come mutabile (`mut`), poiché cambieremo il suo valore.
- Abbiamo assegnato il valore 6 alla variabile `NumeroColori`.
- Abbiamo aggiunto 2 alla variabile `NumeroColori`.
- Abbiamo stampato il numero totale di colori nella scatola utilizzando la macro `println!()`.

Quando esegui questo programma, visualizzerà "Numero totale di colori nella scatola: 8" perché abbiamo aggiunto 2 ai 6 colori originali.

### Quali sono i tipi di Dato in Rust
Elenco dei principali tipi di dati in Rust:

| Tipo di Dato | Descrizione                                                  |
|--------------|--------------------------------------------------------------|
| `i8`         | Numero intero a 8 bit con segno (-128 a 127).                |
| `i16`        | Numero intero a 16 bit con segno (-32,768 a 32,767).         |
| `i32`        | Numero intero a 32 bit con segno (-2,147,483,648 a 2,147,483,647). |
| `i64`        | Numero intero a 64 bit con segno (-9,223,372,036,854,775,808 a 9,223,372,036,854,775,807). |
| `i128`       | Numero intero a 128 bit con segno (da -2^127 a 2^127 - 1).    |
| `u8`         | Numero intero a 8 bit senza segno (0 a 255).                 |
| `u16`        | Numero intero a 16 bit senza segno (0 a 65,535).             |
| `u32`        | Numero intero a 32 bit senza segno (0 a 4,294,967,295).      |
| `u64`        | Numero intero a 64 bit senza segno (0 a 18,446,744,073,709,551,615). |
| `u128`       | Numero intero a 128 bit senza segno (da 0 a 2^128 - 1).      |
| `f32`        | Numero in virgola mobile a 32 bit (virgola mobile a precisione singola). |
| `f64`        | Numero in virgola mobile a 64 bit (virgola mobile a precisione doppia). |
| `bool`       | Tipo booleano che rappresenta vero o falso.                   |
| `char`       | Tipo di carattere Unicode, rappresenta un singolo carattere.  |
| `str`        | Sequenza di caratteri Unicode, spesso chiamata "stringa" in Rust. |
| `tuple`      | Struttura dati che può contenere più tipi di dati diversi.   |
| `array`      | Sequenza di elementi dello stesso tipo e dimensione fissa.    |
| `slice`      | Vista di una sequenza di dati (può essere un array o un vettore). |
| `Vec`        | Struttura dati dinamica che rappresenta un vettore.           |
| `Option`     | Tipo di dati che rappresenta un valore opzionale o l'assenza di un valore. |
| `Result`     | Tipo di dati che rappresenta il risultato di un'operazione che può avere successo o fallire. |
| `arch`       | Tipo speciale che rappresenta l'architettura del sistema (ad esempio, x86_64 o arm). |
| `isize`      | Numero intero con segno che può rappresentare l'indice di un'area di memoria (architettura-specifico). |
| `usize`      | Numero intero senza segno che può rappresentare l'indice di un'area di memoria (architettura-specifico). |

Ogni tipo di dato ha un'utilità specifica e può essere utilizzato per rappresentare diversi tipi di informazioni nel tuo programma Rust.

### Tipo di Dato intero
I tipi di dati interi con segno (*signed*) e senza segno (*unsigned*) in Rust rappresentano numeri interi, ma con alcune differenze importanti:
- **Interi con Segno - signed (come `i8`, `i16`, `i32`, `i64`, `i128`):** Questi tipi di dati possono rappresentare sia numeri positivi che negativi. Ad esempio, `i8` può rappresentare numeri da -128 a 127, mentre `i32` può rappresentare numeri da -2,147,483,648 a 2,147,483,647. L'indicatore di segno indica se il numero è positivo o negativo.
- **Interi Senza Segno - unsigned (come `u8`, `u16`, `u32`, `u64`, `u128`):** Questi tipi di dati rappresentano solo numeri positivi o zero. Ad esempio, `u8` può rappresentare numeri da 0 a 255. Questi numeri non hanno segno perché sono sempre positivi.
In breve, se hai bisogno di rappresentare solo numeri positivi, usa i tipi di dati senza segno. Se hai bisogno di rappresentare sia numeri positivi che negativi, usa i tipi di dati con segno. La scelta tra interi con segno e senza segno dipende dal contesto del tuo programma e dai valori che devi rappresentare.
Certo, aggiungiamo `isize` e `usize` alla spiegazione:
- **`isize`:** Questo tipo di dato intero è specifico per l'architettura del sistema. Significa che può rappresentare numeri interi con segno che sono grandi abbastanza da indicizzare l'intera area di memoria del sistema. Quindi, su una piattaforma a 64 bit, `isize` può rappresentare valori da -2^63 a 2^63 - 1. È utile quando devi manipolare indici di memoria o contare elementi in grandi strutture di dati.
- **`usize`:** Questo tipo di dato intero senza segno è anche specifico per l'architettura del sistema. Può rappresentare solo numeri interi positivi o zero. Come `isize`, la dimensione di `usize` è determinata dall'architettura del sistema. Quindi, su una piattaforma a 64 bit, `usize` può rappresentare valori da 0 a 2^64 - 1. È spesso utilizzato per indicizzare strutture di dati e rappresentare dimensioni di array o vettori.

:::tip
I nomi come `i8`, `i16`, `u32`, `u64`, ecc., si riferiscono alla quantità di bit che ciascun tipo di dato può immagazzinare in memoria. Ad esempio, `i8` è un intero con segno a 8 bit, il che significa che può rappresentare 2^8 (256) valori distinti che vanno da -128 a 127.
:::