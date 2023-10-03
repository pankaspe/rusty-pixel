---
sidebar_position: 1
---
# Cos'è l'Ownership?
L'ownership è uno dei concetti fondamentali di Rust ed è essenziale per capire come Rust gestisce la memoria e previene i problemi come i data race. 

:::info
Il termine "data race" (tradotto letteralmente in italiano come "corsa dati") si riferisce a un tipo specifico di problema che può verificarsi in un programma informatico multithreaded o concorrente. Per capire cosa sia una "data race", consideriamo un semplice esempio quotidiano.

Immagina di avere due persone (A e B) che condividono un computer. Entrambe vogliono modificare un documento di testo. Ora, se entrambe le persone tentano di modificare lo stesso documento nello stesso momento, potrebbero sovrascrivere le modifiche l'una dell'altra, creando confusione nel documento. Questa situazione è analoga a una "data race" in programmazione.

Nel contesto del software, una data race si verifica quando due o più thread di esecuzione in un programma accedono simultaneamente alla stessa area di memoria (come variabili o strutture dati) senza adeguata sincronizzazione. Se almeno uno di questi accessi è una scrittura, possono verificarsi risultati imprevedibili. I dati possono finire per essere letti o scritti in modo inconsistente, portando a comportamenti errati e imprevedibili del programma.

Rust è progettato per prevenire data race fornendo meccanismi di sicurezza come l'ownership e il borrowing, che impediscono più thread di accedere simultaneamente ai dati mutabili. Questi meccanismi assicurano che i dati vengano manipolati in modo coerente, riducendo il rischio di errori dovuti a data race.
:::

In Rust, ogni valore ha una variabile chiamata **proprietario**. Un valore può avere **un solo proprietario** alla volta. Quando il **proprietario** esce dallo `scope` (ovvero, quando il suo blocco di codice termina), il valore viene automaticamente *deallocato*, liberando la memoria.

:::info
Immagina la memoria del computer come una serie di caselle. Quando il tuo programma ha bisogno di memorizzare qualcosa, ottiene una casella (cioè, una porzione di memoria) e la riempie con i dati di cui ha bisogno. Quando non ha più bisogno di quella casella di memoria, deve liberarla in modo che possa essere utilizzata per altre cose. Questo atto di "liberare" o "restituire" la casella di memoria è ciò che intendiamo per deallocazione della memoria.
:::

Immagina di avere una bicicletta. Quella bicicletta è *tua*, quindi sei il **proprietario**. Puoi usarla per andare in giro, parcheggiarla dove vuoi e farci quello che desideri. Se decidi di prestare la bicicletta a un amico, sei ancora tu il **proprietario**, ma stai condividendo *temporaneamente* l'uso di essa con il tuo amico.

Tuttavia, se decidi di vendere la bicicletta a qualcun altro, quella persona diventerà il nuovo **proprietario**. Ora, la bicicletta appartiene a lui, e può farne ciò che vuole: guidarla, personalizzarla o persino venderla a loro volta.

Nel contesto della programmazione Rust, puoi pensare alla variabile che contiene un valore come al **proprietario** di quel valore. Solo il **proprietario** può modificarlo o decidere cosa farne. Quando la variabile esce dallo scope o viene *deallocata*, il valore torna libero per essere utilizzato da altre parti del programma, proprio come quando vendi o presti la tua bicicletta.  
Questa idea di **ownership** è un elemento chiave della sicurezza e della gestione della memoria in Rust.

### Un solo proprietario alla volta
Devi pensare alla variabile come al proprietario del suo valore. Puoi avere più variabili che contengono lo stesso valore, ma solo una di esse è il proprietario.

```rust
let mio_numero = 42; // "mio_numero" è il proprietario del valore 42.
let altro_numero = mio_numero; // "altro_numero" ora è il proprietario del valore 42.
```
In questo esempio, `mio_numero` cede il suo valore a `altro_numero`.

### Deallocazione automatica
Quando il proprietario esce dallo scope (la porzione di codice in cui è dichiarato), Rust *dealloca* automaticamente il valore.   
È come quando lasci una stanza: tutto ciò che possedevi all'interno rimane lì, ma quando esci, è libero per chiunque altro.

```rust
fn main() {
    let mio_nome = String::from("Alice"); // "mio_nome" è il proprietario della stringa "Alice".
    // Il blocco di codice termina qui.
} // Quando il blocco termina, la stringa viene deallocata automaticamente.
```

In questo esempio, quando `main()` termina, la stringa "Alice" viene deallocata automaticamente.

L'ownership in Rust ci aiuta a scrivere codice più sicuro. Sapendo chi è il **proprietario** di un valore, Rust può evitare situazioni come la *doppia deallocazione* (tentativo di deallocare lo stesso valore due volte) o l'uso di valori *deallocati*, garantendo così la sicurezza del nostro programma.

Continueremo ad esplorare l'ownership in modo più dettagliato, ma questa è una panoramica di base che ci aiuta a capire come Rust gestisce i valori e la memoria in modo sicuro e affidabile.