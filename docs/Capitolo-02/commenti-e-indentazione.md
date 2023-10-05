---
sidebar_position: 7
---
# 2.6 I commenti e l'indentazione
## Commenti
I commenti sono annotazioni nel codice sorgente di un programma che vengono ignorate dall'esecuzione del programma stesso. In altre parole, sono note scritte nel codice che aiutano gli sviluppatori a capire cosa fa una determinata parte di codice. I commenti in Rust sono preceduti dai simboli `//` per i commenti in una sola riga e da `/* */` per i commenti multilinea.

## Indentazione
L'indentazione si riferisce alla pratica di spostare leggermente verso destra il codice all'interno di blocchi logici del programma. In molti linguaggi di programmazione, inclusi Rust, l'indentazione è una pratica comune per rendere il codice più leggibile. I blocchi di codice all'interno di funzioni, cicli o condizioni vengono solitamente indentati per indicare la loro struttura gerarchica.


## Esempio
```rust
fn main() {
    // Inizializziamo una variabile per memorizzare la somma
    let mut somma = 0;  // Questo è un commento su una sola riga

    // Ciclo per sommare i numeri da 1 a 10
    for numero in 1..=10 {
        somma += numero;  // Aggiungiamo il numero corrente alla somma
    }

    /* 
    Questo è un commento multilinea che spiega cosa sta facendo il codice
    Nella prossima riga, stampiamo il risultato della somma
    */
    println!("La somma dei numeri da 1 a 10 è: {}", somma);
}
```
In questo esempio

- Abbiamo utilizzato commenti su una sola riga (preceduti da `//`) per fornire spiegazioni brevi nel codice.
- Abbiamo utilizzato un commento multilinea (racchiuso tra `/*` e `*/`) per fornire spiegazioni più dettagliate.
- Il codice è indentato per mostrare chiaramente la struttura del programma. Ad esempio, il blocco di codice all'interno della funzione `main()` è indentato per indicare la sua appartenenza alla funzione principale.

## Perché sono utili
1. **Leggibilità:** I commenti aiutano a spiegare il codice in un linguaggio umano. Questo è particolarmente utile quando altri sviluppatori (o persino il futuro te stesso) leggono il tuo codice, aiutandoli a capire il tuo ragionamento e la tua logica.
2. **Manutenzione:** Quando torni a un pezzo di codice dopo un po' di tempo, i commenti possono ricordarti il motivo per cui hai scritto il codice in un certo modo, semplificando la manutenzione del software.
3. **Collaborazione:** Quando lavori in squadra, i commenti consentono di comunicare le intenzioni del codice agli altri membri del team, facilitando la collaborazione e la comprensione reciproca.
4. **Debugging:** Se incontri problemi nel tuo codice, i commenti possono aiutarti a tracciare il problema e a comprendere meglio cosa sta accadendo in un certo punto del programma.

L'indentazione, d'altra parte, suddivide il codice in blocchi chiari, facilitando la comprensione della struttura del programma. Aiuta anche a individuare errori di sintassi più facilmente, poiché i blocchi mal indentati sono immediatamente visibili.
In breve, commenti e indentazione rendono il codice più comprensibile, manutenibile e collaborativo. Sono pratiche fondamentali nella scrittura del codice che rendono il processo di sviluppo del software più agevole per tutti coloro che lavorano su di esso.

