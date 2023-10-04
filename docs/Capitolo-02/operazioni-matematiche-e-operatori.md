---
sidebar_position: 3
---
# 2.3 Operatori e operazioni
Nel mondo della programmazione, spesso è necessario eseguire **operazioni matematiche** per manipolare dati e risolvere problemi. In questo capitolo, esploreremo le varie operazioni matematiche che puoi eseguire in Rust insieme agli **operatori** utilizzati per eseguirle.

## Operatori aritmetici
Gli operatori aritmetici vengono utilizzati per eseguire operazioni matematiche su numeri. Ecco gli operatori aritmetici principali in Rust:

- **`+` (Addizione):** Aggiunge due numeri.
- **`-` (Sottrazione):** Sottrae il secondo numero dal primo.
- **`*` (Moltiplicazione):** Moltiplica due numeri.
- **`/` (Divisione):** Divide il primo numero per il secondo.
- **`%` (Resto):** Restituisce il resto della divisione tra il primo e il secondo numero.

Esempio di operazioni aritmetiche in Rust:
```rust
fn main() {
    let a: i32 = 10;
    let b: i32 = 3;
    let somma: i32 = a + b;
    let differenza: i32 = a - b;
    let prodotto: i32 = a * b;
    let divisione: i32 = a / b;
    let resto: i32 = a % b;

    println!("Somma: {}", somma);
    println!("Differenza: {}", differenza);
    println!("Prodotto: {}", prodotto);
    println!("Divisione: {}", divisione);
    println!("Resto: {}", resto);
}
```

## Operatori di assegnazione
Gli operatori di assegnazione vengono utilizzati per assegnare valori alle variabili. Ecco gli operatori di assegnazione in Rust:

- **`=` (Assegnazione):** Assegna il valore a destra alla variabile a sinistra.
- **`+=`, `-=`, `*=`, `/=`, `%=` (Operatore di assegnazione combinato):** Esegue l'operazione indicata e assegna il risultato alla variabile a sinistra.

Esempio di operatori di assegnazione in Rust:
```rust
fn main() {
    let mut x: i32 = 5;
    x += 3; // Ora x è 8
    x -= 2; // Ora x è 6
    x *= 4; // Ora x è 24
    x /= 3; // Ora x è 8
    x %= 5; // Ora x è 3
}
```

## Operatori di confronto
Gli operatori di confronto vengono utilizzati per confrontare valori. Restituiscono un valore booleano che indica se la condizione è vera o falsa. Ecco gli operatori di confronto in Rust:

- **`==` (Uguaglianza):** Restituisce `true` se i due valori sono uguali.
- **`!=` (Differenza):** Restituisce `true` se i due valori sono diversi.
- **`<`, `>`, `<=`, `>=` (Confronto):** Confrontano i valori e restituiscono `true` se la relazione è vera.

Esempio di operatori di confronto in Rust:
```rust
fn main() {
    let a: i32 = 5;
    let b: i32 = 10;
    println!("a è uguale a b? {}", a == b); // Stampa: false
    println!("a è diverso da b? {}", a != b); // Stampa: true
    println!("a è minore di b? {}", a < b); // Stampa: true
    println!("a è maggiore o uguale a b? {}", a >= b); // Stampa: false
}
```

## Operatori logici
Gli operatori logici sono usati per combinare condizioni e valutare l'espressione complessiva come vera o falsa. Ci sono tre principali operatori logici:

- **`&&` (AND)**: Questo operatore restituisce `true` solo se entrambe le condizioni a sinistra e a destra dell'operatore sono vere. Ad esempio, `condizione1 && condizione2` sarà vero solo se sia `condizione1` che `condizione2` sono vere.
- **`||` (OR)**: Questo operatore restituisce `true` se almeno una delle condizioni a sinistra o a destra dell'operatore è vera. Ad esempio, `condizione1 || condizione2` sarà vero se almeno una tra `condizione1` o `condizione2` è vera.
- **`!` (NOT)**: Questo operatore viene utilizzato per invertire il valore di verità di una condizione. Se una condizione è vera, `!condizione` sarà falsa e viceversa.

Ecco un esempio di come vengono utilizzati gli operatori logici in Rust:
```rust
fn main() {
    let vero: bool = true;
    let falso: bool = false;

    // Operatore AND
    println!("AND: {}", vero && falso); // Stampa false perché una delle condizioni è falsa

    // Operatore OR
    println!("OR: {}", vero || falso); // Stampa true perché almeno una delle condizioni è vera

    // Operatore NOT
    println!("NOT: {}", !vero); // Stampa false perché !vero inverte il valore da true a false
}
```

In questo esempio, `&&` e `||` sono usati per combinare condizioni, mentre `!` inverte il valore di verità di una condizione. Questi operatori logici sono fondamentali per controllare il flusso del programma in base a condizioni specifiche.