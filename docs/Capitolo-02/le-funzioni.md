---
sidebar_position: 6
---
# 2.5 Le funzioni
Quando dovete ripetere lo stesso compito più e più volte nel vostro programma, questo può diventare noioso e disordinato, come se doveste preparare lo stesso piatto ogni giorno senza mai variare. Le **funzioni** vengono in vostro soccorso!  
Una funzione è un *blocco di codice* che ha un nome e può essere richiamato in qualsiasi momento nel vostro programma. È come avere una ricetta chiamata **PreparaPasta** che potete utilizzare ogni volta che volete cucinare pasta. 

## Sintassi
In Rust sono come le istruzioni dettagliate in una ricetta. Pensa a una **funzione** come una piccola istruzione o una serie di passaggi specifici che puoi eseguire nel tuo programma. Le **funzioni** rendono il tuo codice più organizzato e facilmente comprensibile. 

```rust
fn nome_funzione(parametro1: Tipo, parametro2: Tipo) -> TipoRitorno {
    // Corpo della funzione
    // Istruzioni e calcoli vanno qui
    // La funzione può restituire un valore usando la parola chiave `return`
}
```

- `fn`: Questa è la parola chiave per dichiarare una funzione in Rust.
- `nome_funzione`: Sostituisci questo con il nome che vuoi dare alla tua funzione.
- `parametro1`, `parametro2`: Questi sono i parametri che la tua funzione accetta. Puoi avere più di un parametro se necessario.
- `Tipo`: Specifica il tipo di dato per ciascun parametro e per il valore di ritorno.
- `TipoRitorno`: Questo specifica quale tipo di dato la tua funzione restituirà.


## Valori di ritorno 
In Rust, il valore di ritorno in una funzione rappresenta il risultato che la funzione restituirà quando viene chiamata. Quando definisci una funzione in Rust, puoi specificare il tipo di dato del valore di ritorno utilizzando la freccia (`->`). Questo tipo di dato definisce il tipo di valore che la funzione produrrà. Ad esempio, una funzione che calcola la somma di due numeri potrebbe restituire un valore di tipo `i32` (integer a 32 bit).

Definire un tipo di ritorno è importante perché aiuta a indicare chiaramente cosa aspettarsi quando si chiama la funzione e consente al compilatore di Rust di eseguire controlli di tipo accurati durante la compilazione del codice.

## Esempi
### Funzione somma
Ecco un esempio di una funzione in Rust che calcola la `somma` tra due numeri interi

```rust
// Definiamo una funzione chiamata somma che prende due parametri di tipo i32 e restituisce un i32.
fn somma(a: i32, b: i32) -> i32 {
    // Calcoliamo la somma di a e b.
    let risultato = a + b;
    // Restituiamo il risultato della somma.
    risultato // La parola chiave "return" non è necessaria in Rust.
}

fn main() {
    // Chiamiamo la funzione somma e assegniamo il risultato alla variabile risultato.
    let risultato = somma(5, 3);

    // Stampiamo il risultato.
    println!("La somma è: {}", risultato);
}
```

**Spiegazione del Codice:**
1. `fn somma(a: i32, b: i32) -> i32 { ... }`: Qui definiamo una funzione chiamata `somma` che prende due parametri `a` e `b` di tipo `i32` e restituisce un valore di tipo `i32`.
2. `let risultato = a + b;`: Dentro la funzione, calcoliamo la somma di `a` e `b` e assegniamo il risultato alla variabile `risultato`.
3. `risultato`: Poiché Rust è un linguaggio di espressioni, l'ultima espressione in una funzione è implicitamente considerata il valore di ritorno. Quindi, `risultato` è il valore di ritorno della funzione `somma`.
4. Nella funzione `main()`, chiamiamo `somma(5, 3)` e assegniamo il risultato alla variabile `risultato`. Successivamente, stampiamo il risultato, che sarà "La somma è: 8".

### Funzione PreparaPasta
Ecco un esempio più completo della nostra cara funzione `PreparaPasta` in Rust:

```rust
// Questa è la definizione della nostra funzione `PreparaPasta`.
// Accetta due stringhe (`tipo_pasta` e `condimento`) e un intero (`minuti_cottura`).
// Restituisce una stringa con il messaggio preparato.
fn prepara_pasta(tipo_pasta: &str, condimento: &str, minuti_cottura: i32) -> String {
    // Creiamo una variabile `messaggio` per costruire il messaggio di output.
    let mut messaggio = String::new();
    
    // Aggiungiamo il tipo di pasta e il condimento al messaggio.
    messaggio.push_str("Hai preparato una deliziosa pasta ");
    messaggio.push_str(tipo_pasta);
    messaggio.push_str(" con ");
    messaggio.push_str(condimento);
    messaggio.push_str(".\n");

    // Aggiungiamo i dettagli sulla cottura.
    messaggio.push_str("Cuoci la pasta per ");
    messaggio.push_str(&minuti_cottura.to_string());
    messaggio.push_str(" minuti e poi scolala.\n");

    // Restituiamo il messaggio completo.
    messaggio
}

fn main() {
    // Chiamiamo la nostra funzione con valori di esempio.
    let tipo_pasta = "spaghetti";
    let condimento = "sugo di pomodoro";
    let minuti_cottura = 10;

    // Chiamiamo la funzione `prepara_pasta` e otteniamo il messaggio di output.
    let messaggio_preparazione = prepara_pasta(tipo_pasta, condimento, minuti_cottura);

    // Stampiamo il messaggio di output.
    println!("{}", messaggio_preparazione);
}
```

In questa funzione, `tipo_pasta`, `condimento` e `minuti_cottura` sono parametri della funzione. La funzione costruisce un messaggio descrivendo come preparare la pasta con i dettagli forniti e restituisce il messaggio come una stringa.

:::tip
In Rust, `&str` è un riferimento a una sequenza di caratteri. Nella funzione `prepara_pasta`, `&str` viene utilizzato per accettare riferimenti alle stringhe di input senza possederne la memoria. Puoi manipolare e accedere alle stringhe senza copiare dati inutili, rendendo l'operazione più efficiente. In breve, `&str` è un modo di riferirsi a una stringa senza possederla direttamente.

*Nel capitolo 3.4 studieremo gli **slice**(`&str`), continua a leggere*
:::