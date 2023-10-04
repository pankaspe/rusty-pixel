---
sidebar_position: 5
---
# 2.5 Cicli di looping
I cicli di looping in Rust sono fondamentali per l'iterazione, cioè per eseguire ripetutamente un blocco di codice finché una condizione specifica viene soddisfatta o fino a quando un certo numero di iterazioni è raggiunto. Ci sono tre tipi principali di cicli di looping in Rust: il ciclo `loop`, il ciclo `while` e il ciclo `for`.

## Ciclo `loop`
Il ciclo `loop` esegue un blocco di codice all'infinito fino a quando non viene esplicitamente interrotto da un'istruzione `break`. È utile quando non si conosce in anticipo il numero di iterazioni necessarie.

```rust
loop {
    println!("Questo verrà stampato all'infinito!");
    // Per interrompere il ciclo, usa l'istruzione 'break'
    break;
}
```

## Ciclo `while`
Il ciclo `while` esegue un blocco di codice fintanto che una condizione specifica è vera. Questo ciclo è utile quando si desidera eseguire un blocco di codice finché una condizione è valida.

```rust
let mut contatore = 0;
while contatore < 5 {
    println!("Il contatore è: {}", contatore);
    contatore += 1;
}
```

## Ciclo `for`
Il ciclo `for` in Rust è utilizzato per iterare attraverso una sequenza di elementi. Può essere utilizzato per iterare su un intervallo numerico o sugli elementi di una collezione.

### Esempio con un intervallo numerico
```rust
for numero in 1..=5 {
    println!("Numero: {}", numero);
}
```
In questo caso, il ciclo `for` itera attraverso l'intervallo da 1 a 5 inclusi, stampando il valore di `numero` ad ogni iterazione.

### Esempio con una collezione
```rust
let lista = vec![1, 2, 3, 4, 5];
for elemento in lista.iter() {
    println!("Elemento: {}", elemento);
}
```
In questo esempio, il ciclo `for` itera attraverso gli elementi della lista, stampando ciascun elemento.

:::info
`vec!` in Rust è una macro utilizzata per creare nuovi `Vec` (Vettori), che sono collezioni dinamiche di elementi omogenei. Queste collezioni possono crescere o diminuire di dimensione durante l'esecuzione del programma.

Nel capitolo 4.1, esploreremo come utilizzare questa macro per creare, modificare e accedere agli elementi di un `Vec`,
:::

Questi sono i principali tipi di cicli di looping in Rust. Sono strumenti potenti per controllare il flusso di esecuzione del programma e vengono utilizzati ampiamente nella programmazione Rust per eseguire operazioni ripetute.