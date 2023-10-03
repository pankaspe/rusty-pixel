---
sidebar_position: 6
---
# 2.5 Le funzioni
Quando dovete ripetere lo stesso compito più e più volte nel vostro programma, questo può diventare noioso e disordinato, come se doveste preparare lo stesso piatto ogni giorno senza mai variare. Le **funzioni** vengono in vostro soccorso!  
Una funzione è un *blocco di codice* che ha un nome e può essere richiamato in qualsiasi momento nel vostro programma. È come avere una ricetta chiamata **PreparaPasta** che potete utilizzare ogni volta che volete cucinare pasta. 

## Sintassi
In Rust sono come le istruzioni dettagliate in una ricetta. Pensa a una **funzione** come una piccola istruzione o una serie di passaggi specifici che puoi eseguire nel tuo programma. Le **funzioni** rendono il tuo codice più organizzato e facilmente comprensibile. 

### Esempio:
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

:::info
I **valori di ritorno** in una *funzione* in Rust sono i dati che la *funzione* restituisce quando viene chiamata. Quando crei una *funzione*, puoi specificare quale tipo di dato restituirà quando verrà eseguita. Questo tipo di dato è il **valore di ritorno**.  
Quando la *funzione* termina l'esecuzione, può inviare un valore di ritorno al punto del programma in cui è stata chiamata. Questo **valore di ritorno** può essere utilizzato per ulteriori operazioni nel programma principale.
:::

### Esempio concreto
Immaginiamo di voler scrivere una funzione che somma due numeri interi:

```rust
// Definiamo una funzione chiamata "somma" 
// che accetta due parametri di tipo intero (i32) e restituisce un valore intero (i64).
fn somma(a: i32, b: i32) -> i64 {

    // All'interno della funzione, 
    // dichiariamo una variabile chiamata "risultato" 
    // e calcoliamo la somma dei parametri "a" e "b".
    let risultato = a + b;

    // Restituiamo il valore della variabile "risultato". 
    // In Rust, l'ultima espressione in una funzione viene considerata come il valore di ritorno implicito.
    risultato
}

// Funzione main
fn main() {
    
    // Dichiarazione di due variabili intere: "numero1" e "numero2".
    let numero1 = 5;
    let numero2 = 10;

    // Chiamiamo la funzione "somma" passando le variabili "numero1" e "numero2" come argomenti 
    // e memorizziamo il risultato nella variabile "risultato".
    let risultato = somma(numero1, numero2);

    // Stampiamo il risultato utilizzando println!, 
    // inserendo i valori delle variabili "numero1", "numero2" e "risultato" nel messaggio di output.
    println!("La somma di {} e {} è: {}", numero1, numero2, risultato);
}

```

In questo esempio, la funzione `somma` accetta due numeri interi come input, li somma e restituisce il risultato.

Le funzioni in Rust sono un modo potente per organizzare il tuo codice e renderlo riutilizzabile. Con queste istruzioni, puoi creare compiti specifici nel tuo programma senza dover ripetere lo stesso codice più volte. Buon divertimento a esplorare il mondo delle funzioni in Rust!

## Esempio funzione PreparaPasta:
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