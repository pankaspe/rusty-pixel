---
sidebar_position: 3
---
# 2.3 Operazioni matematiche e operatori
Nel mondo della programmazione, spesso è necessario eseguire operazioni matematiche per manipolare dati e risolvere problemi. In questo capitolo, esploreremo le varie operazioni matematiche che puoi eseguire in Rust insieme agli operatori utilizzati per eseguirle.

## Operatori Aritmetici

Gli operatori aritmetici vengono utilizzati per eseguire operazioni matematiche su numeri. Ecco gli operatori aritmetici principali in Rust:

- **`+` (Addizione):** Aggiunge due numeri.
- **`-` (Sottrazione):** Sottrae il secondo numero dal primo.
- **`*` (Moltiplicazione):** Moltiplica due numeri.
- **`/` (Divisione):** Divide il primo numero per il secondo.
- **`%` (Resto):** Restituisce il resto della divisione tra il primo e il secondo numero.

Esempio di operazioni aritmetiche in Rust:
```rust
fn main() {
    let a = 10;
    let b = 3;
    let somma = a + b;
    let differenza = a - b;
    let prodotto = a * b;
    let divisione = a / b;
    let resto = a % b;

    println!("Somma: {}", somma);
    println!("Differenza: {}", differenza);
    println!("Prodotto: {}", prodotto);
    println!("Divisione: {}", divisione);
    println!("Resto: {}", resto);
}
```

## Operatori di Assegnazione

Gli operatori di assegnazione vengono utilizzati per assegnare valori alle variabili. Ecco gli operatori di assegnazione in Rust:

- **`=` (Assegnazione):** Assegna il valore a destra alla variabile a sinistra.
- **`+=`, `-=`, `*=`, `/=`, `%=` (Operatore di Assegnazione Combinato):** Esegue l'operazione indicata e assegna il risultato alla variabile a sinistra.

Esempio di operatori di assegnazione in Rust:
```rust
fn main() {
    let mut x = 5;
    x += 3; // Ora x è 8
    x -= 2; // Ora x è 6
    x *= 4; // Ora x è 24
    x /= 3; // Ora x è 8
    x %= 5; // Ora x è 3
}
```

## Operatori di Confronto

Gli operatori di confronto vengono utilizzati per confrontare valori. Restituiscono un valore booleano che indica se la condizione è vera o falsa. Ecco gli operatori di confronto in Rust:

- **`==` (Uguaglianza):** Restituisce `true` se i due valori sono uguali.
- **`!=` (Differenza):** Restituisce `true` se i due valori sono diversi.
- **`<`, `>`, `<=`, `>=` (Confronto):** Confrontano i valori e restituiscono `true` se la relazione è vera.

Esempio di operatori di confronto in Rust:
```rust
fn main() {
    let a = 5;
    let b = 10;
    println!("a è uguale a b? {}", a == b); // Stampa: false
    println!("a è diverso da b? {}", a != b); // Stampa: true
    println!("a è minore di b? {}", a < b); // Stampa: true
    println!("a è maggiore o uguale a b? {}", a >= b); // Stampa: false
}
```