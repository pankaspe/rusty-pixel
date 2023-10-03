---
sidebar_position: 2
---
# 3.2 Le regole dell'Ownership
### 1. Ogni valore ha un proprietario
In Rust, come abbiamo detto nel capitolo precedente, il concetto chiave di ownership implica che ogni dato ha un'unica variabile associata, nota come "proprietario". Il proprietario è responsabile del ciclo di vita del dato, incluso il suo rilascio quando non è più necessario. Questa regola fondamentale aiuta a evitare situazioni di accesso concorrente non sicuro ai dati e assicura che la memoria venga gestita in modo coerente e affidabile.

#### Esempio
Considera una stringa di testo in Rust:

```rust
fn main() {
    let nome = String::from("Alice"); // "nome" è il proprietario della stringa.
    println!("Ciao, {}!", nome); // "nome" viene utilizzato qui.
} // Quando "nome" esce dallo scope, la stringa viene deallocata automaticamente.
```

Nell'esempio sopra, la variabile `nome` è il proprietario della stringa `"Alice"`. Può utilizzare la stringa come desidera. Quando il blocco di codice della funziona `main() {...}` termina, la variabile `nome` esce dallo scope e la stringa viene deallocata automaticamente.  
Se cercassimo di utilizzare la stringa dopo che `nome` è uscito dallo scope, otterremmo un errore. Questo è un comportamento voluto di Rust per evitare bug comuni come l'uso di dati deallocati.

### 2. Un solo proprietario alla volta
Questo è uno dei concetti fondamentali nell'ownership di Rust e sottolinea come un valore può avere solo un proprietario in un dato momento. Questo principio è cruciale per evitare situazioni complesse e problematiche di gestione della memoria. 

Quando un valore è assegnato a una variabile, quella variabile diventa il suo proprietario. Il proprietario è responsabile per la deallocazione del valore quando non è più necessario. In Rust, questa regola garantisce che ci sia sempre chiaramente definito quale parte del codice è responsabile del rilascio di un valore dalla memoria. Questo controllo rigoroso impedisce l'accesso simultaneo e non sicuro ai dati, contribuendo così alla sicurezza del linguaggio.

#### Esempio

```rust
fn main() {
    // Stringa "Alice" è assegnata a "nome", quindi "nome" è il proprietario.
    let nome = String::from("Alice"); 

    // Possiamo creare un riferimento (&) immutabile a "nome" senza diventarne proprietari.
    let riferimento = &nome; 
    
    // Assegnando "nome" a "altro_nome", il suo ownership è trasferito da "nome" a "altro_nome".
    let altro_nome = nome; 

    // Non possiamo più accedere a "nome" qui, perché il suo ownership è stato trasferito a "altro_nome".
    // Il riferimento a "nome" non è influenzato dal trasferimento di ownership e può essere usato tranquillamente.
    println!("Riferimento: {}", riferimento);
} 
// Quando il blocco termina, "altro_nome" esce dallo scope e dealloca automaticamente la memoria associata alla stringa "Alice".
```

In questo esempio, la stringa "Alice" viene assegnata a `nome`, quindi `nome` diventa il suo proprietario.  
Successivamente, un `riferimento` immutabile viene creato utilizzando `&nome`.  
Quindi, trasferiamo l'ownership della stringa da `nome` a `altro_nome` con l'assegnazione `let altro_nome = nome;`.  
Dopo questa assegnazione, `altro_nome` diventa il nuovo proprietario della stringa, mentre `nome` non può più accedervi perché ha perso l'ownership.   
Il riferimento immutabile `riferimento` può ancora essere utilizzato poiché non è influenzato dal trasferimento di ownership.

:::info
In Rust, il carattere `&` viene utilizzato per creare un **riferimento** a un **valore**, che è concettualmente simile a un *puntatore* in linguaggi come C o C++. Questi riferimenti sono chiamati "*riferimenti immutabili*", il che significa che non è possibile modificare il valore a cui fanno riferimento.

Tuttavia, a differenza dei puntatori in C o C++, i riferimenti in Rust sono sottoposti a un rigoroso sistema di regole che impedisce i problemi comuni legati ai *puntatori*, come i *dangling pointers* (puntatori a memoria che è stata deallocata) o i *data race* (accessi simultanei a dati mutabili).

*Studieremo i riferimenti nel prossimo capitolo, 3.3*
:::

### 3. La deallocazione della memoria
La "*deallocazione automatica*" in Rust è uno dei principali vantaggi del sistema di ownership. Questo significa che non è necessario preoccuparsi di liberare manualmente la memoria quando non serve più. Rust si occupa di deallocare automaticamente la memoria quando il suo proprietario esce dallo scope (il blocco di codice in cui è dichiarato). Questa caratteristica impedisce la perdita di memoria, un problema comune in altri linguaggi di programmazione.

Immagina di avere una scatola. In Rust, questa scatola è un *valore*, e quando non hai più bisogno del *valore* all'interno, la scatola (cioè, la variabile) la butti (esce dallo scope).

Quando ciò accade, Rust si assicura che il valore dentro la scatola venga automaticamente deallocato, rendendo lo spazio di memoria disponibile per altri scopi.

#### Esempio

```rust
fn main() {
    let frase = String::from("Ciao, mondo!"); // Rust alloca memoria per la stringa.
    println!("{}", frase); // Stampa la stringa.
} // Qui, la variabile 'frase' esce dallo scope e la memoria viene deallocata automaticamente.
```

Nell'esempio sopra, abbiamo una variabile `frase` che contiene una stringa. Quando il blocco `main()` termina, `frase` esce dallo scope, e Rust si occupa automaticamente di deallocare la memoria occupata dalla stringa. Non dobbiamo preoccuparci di chiamare alcuna funzione per liberare la memoria; Rust si prende cura di tutto.

Questo approccio garantisce che il programma utilizzi la memoria in modo efficiente e previene potenziali errori come le perdite di memoria (memory leaks) o gli accessi a dati deallocati (dangling references), contribuendo a rendere il codice Rust sicuro e affidabile.

:::info
I "**memory leaks**" (perdite di memoria) sono problemi comuni in programmazione quando un programma continua ad allocare memoria senza mai deallocarla (liberarla). In altre parole, è come se il programma perdesse il riferimento alle porzioni di memoria che ha creato, impedendo al sistema di utilizzare quella memoria per altre operazioni.  
Immagina la memoria del computer come uno spazio limitato. Se un programma crea nuovi dati e oggetti senza mai liberare la memoria dopo averli usati, questa memoria rimarrà occupata anche quando il programma non ne ha più bisogno. Se questa situazione persiste nel tempo, il programma userà sempre più memoria, potenzialmente causando rallentamenti del sistema o, in casi estremi, il crash dell'applicazione o del sistema operativo.

I "**dangling references**" sono riferimenti a memoria che continuano ad esistere anche dopo che la memoria a cui fanno riferimento è stata deallocata o liberata. In sostanza, sono come indirizzi scritti su un pezzo di carta, ma il posto a cui dovrebbero puntare è stato cancellato.  
Per esempio, immagina di avere un riferimento a una variabile o a un'area di memoria, ma poi quella variabile viene deallocata perché esce dallo scope o viene liberata esplicitamente. Se rimane un riferimento che punta a quell'area di memoria deallocata, quel riferimento è un "dangling reference". Usare un dangling reference può portare a comportamenti imprevedibili nel programma, come valori errati, crash o altri errori.
:::

### Riassumento i vantaggi dell'Ownership:
- **Prevenzione di Memory Leak:** Grazie alla deallocazione automatica, Rust previene i memory leak (perdite di memoria) assicurandosi che la memoria non venga mai lasciata senza deallocare.
- **Prevenzione di Dangling References:** Rust previene i dangling references (riferimenti a memoria non valida) garantendo che i valori siano sempre deallocati in modo sicuro prima di essere utilizzati.
- **Sicurezza e concorrenza:** Queste regole assicurano che non ci siano accessi concorrenti non sicuri ai dati, migliorando la sicurezza e facilitando la scrittura di codice concorrente affidabile.

Queste regole sono **fondamentali** in Rust e consentono di scrivere codice efficiente e sicuro contro gli errori di gestione della memoria e gli accessi non sicuri. L'**ownership** è una delle caratteristiche principali di Rust che rende il linguaggio potente e affidabile.