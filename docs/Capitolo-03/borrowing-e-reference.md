---
sidebar_position: 3
---
# 3.3 Prestiti e Riferimenti
Nel mondo di Rust, il concetto di **Prestito** (borrowing) e **Riferimento** (reference) è fondamentale. Questi concetti, che spesso vengono utilizzati in modo intercambiabile (ma possono avere sfumature di significato leggermente diverse a seconda del contesto), consentono ai programmatori di accedere ai dati senza doverne diventare proprietari, mantenendo la sicurezza e l'affidabilità del codice. In questo capitolo, esploreremo cosa sono e come vengono utilizzati questi strumenti, ma prima vediamo come funziona la memoria di un compute e come il *processore* lavora su di essa.

:::tip
Gli *indirizzi* di memoria rappresentano posizioni specifiche nella memoria di un computer. Ogni byte di memoria ha un proprio indirizzo univoco, e questi indirizzi consentono al processore di accedere e manipolare i dati in memoria. Per comprendere meglio come funzionano gli indirizzi di memoria, possiamo esplorare ulteriori dettagli:

### Struttura della memoria:
Pensa alla memoria del computer come un'enorme sequenza di caselle numerate, ognuna contenente un byte di dati. Ogni casella ha un proprio numero di indirizzo. Ad esempio, la prima casella potrebbe avere l'indirizzo 0, la seconda l'indirizzo 1, e così via.

### Uso degli indirizzi da parte del processore:
Quando il processore deve accedere a un dato in memoria, utilizza l'indirizzo specifico della casella che contiene quel dato. Il processore invia questo indirizzo al controller di memoria, il quale reindirizza la richiesta alla casella di memoria corrispondente. Il dato viene quindi recuperato dalla memoria e può essere utilizzato dal processore per eseguire operazioni come letture, scritture o calcoli.

### In maniera semplice:
Immagina un paese in cui ogni casa ha un numero civico unico. Ogni casa rappresenta una *cella di memoria*, e il numero civico è l'*indirizzo di memoria*. Quando qualcuno nel paese (il processore) ha bisogno di recapitare una lettera (un dato) a una casa specifica, guarda il numero civico (l'indirizzo di memoria) sulla lettera e la consegna alla casa corrispondente.

### Importanza del controllo degli indirizzi:
È fondamentale che il *sistema operativo* e le *applicazioni* gestiscano correttamente gli *indirizzi di memoria* per evitare errori come l'*accesso a dati* non autorizzati o la *sovrascrittura accidentale di dati importanti*. Un uso errato degli indirizzi può portare a gravi problemi, come crash del programma o *vulnerabilità* di *sicurezza*.
:::

## Prestito
Il concetto di **prestito** (borrowing in inglese) in Rust si riferisce alla possibilità di prendere in prestito *temporaneamente* il **riferimento** a un valore senza diventarne il proprietario. Questo significa che puoi accedere ai dati senza copiarli o possederli direttamente. Il prestito è fondamentale in Rust per garantire la sicurezza del sistema, evitando i problemi di accesso concorrente e di gestione della memoria.

Ci sono due tipi di prestito:
- **Prestito immutabile**: Permette a una parte del codice di leggere il valore, ma non di modificarlo.
- **Prestito mutabile**: Permette a una sola parte del codice di modificare il valore.

### Riferimento
In Rust, un **riferimento** (reference in inglese) **è una forma di prestito**, è un tipo di variabile che contiene l'**indirizzo di memoria** di un'altra variabile. I **riferimenti** permettono di accedere ai dati senza prendere pieno possesso di essi, rispettando le regole dell'**ownership** di Rust.  
Ci sono due tipi principali di reference: i riferimenti immutabili (immutable references) e i riferimenti mutabili (mutable references).

#### Riferimenti immutabili (`&`):
I riferimenti immutabili permettono di leggere i dati ma non di modificarli. Più riferimenti immutabili possono esistere contemporaneamente, ma non possono coesistere con un riferimento mutabile.

#### Esempio Pratico:
```rust
fn main() {
    let numero = 42;
    let riferimento_immutabile = &numero; // Riferimento immutabile al valore di "numero", ovvero 42.
    println!("Il valore è: {}", riferimento_immutabile);
}
```

In questo esempio, `riferimento_immutabile` è un **reference immutabile** a `numero` (grazie al simbolo `&`) quindi può essere utilizzato solo per leggere il valore di `numero`.

#### Riferimenti mutabili (`&mut`):
I riferimenti mutabili permettono di modificare i dati, ma può esistere **solo un riferimento** mutabile alla volta per evitare *data races*.

#### Esempio Pratico:
```rust
fn main() {
    let mut numero = 42;
    let riferimento_mutabile = &mut numero; // Riferimento Mutabile.
    *riferimento_mutabile += 1; // Modifica il valore tramite il riferimento mutabile.
    println!("Il valore è ora: {}", numero);
}
```

In questo esempio, `riferimento_mutabile` è un reference mutabile a `numero` (grazie alla parola chiave `&mut`) consentendo così la modifica diretta del valore.

:::info
L'asterisco (`*`) è chiamato **operatore di dereferenziazione**.  
Nei riferimenti mutabili, è necessario utilizzare l'asterisco (`*`) per accedere o modificare il valore a cui il riferimento punta.

Quando crei un *riferimento mutabile* in Rust usando `&mut`, stai essenzialmente creando un "*puntatore*" a un valore in memoria.  
Questo riferimento mutabile ti dà l'accesso al valore, ma per accedere effettivamente ai dati (leggerli o modificarli), devi usare l'asterisco (`*`).

L'asterisco (`*`) è come una chiave che sblocca la casella in cui sono conservati i dati. Senza l'asterisco, il riferimento sarebbe solo un numero (l'indirizzo di memoria) che non ti permetterebbe di vedere o modificare ciò che c'è dentro.
:::

#### Limitazioni dei Riferimenti:
- Un riferimento mutabile non può coesistere con altri riferimenti (mutabili o immutabili) nello stesso scope per evitare situazioni di concorrenza non sicure.
- Un riferimento immutabile non permette modifiche dirette ai dati.

## Conclusioni
In breve, **ogni riferimento è un prestito**, ma **ogni prestito non è un riferimento**. I riferimenti sono una delle principali forme di prestito in Rust e sono implementati attraverso l'operatore & per riferimenti immutabili e &mut per riferimenti mutabili.

In pratica, quando si parla di *passaggio temporaneo* di accesso a un valore in Rust, spesso ci si riferisce specificamente a un **riferimento**, poiché i riferimenti sono una delle principali forme di prestito utilizzate in Rust per garantire l'affidabilità e la sicurezza del codice.
