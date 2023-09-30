---
sidebar_position: 5
---

# 1.5 Installazione di Rust

Ora che abbiamo una chiara comprensione di cosa sia un terminale, è il momento perfetto per mettere le mani in pasta e iniziare a lavorare con Rust!

### Su sistemi Linux
L'installazione di Rust su un sistema Linux è un processo diretto. Ecco come farlo:

1. **Apri il Terminale** sul tuo sistema Linux. Puoi farlo premendo `Ctrl + Alt + T` sulla tua tastiera o cercando "Terminal" nel menu delle applicazioni.

2. **Installazione tramite Rustup:** Rust è solitamente installato utilizzando un gestore di versioni chiamato Rustup, che semplifica il processo di gestione delle versioni di Rust. Scrivi il seguente comando nel tuo terminale e premi `Invio`:
   
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```
   
   Questo comando scaricherà e installerà Rustup sul tuo sistema.

3. **Segui le Istruzioni:** Dopo l'esecuzione del comando, Rustup chiederà conferme per procedere con l'installazione. Segui le istruzioni visualizzate sullo schermo. Di solito dovrai premere `1` e `Invio` per confermare l'installazione predefinita, ma le istruzioni potrebbero variare in base alla versione di Rustup.

4. **Configura l'Ambiente:** Dopo l'installazione, Rustup configurerà automaticamente il tuo ambiente di sviluppo. Puoi verificare l'installazione digitando il seguente comando nel terminale:
   
   ```bash
   rustc --version
   ```

   Questo comando dovrebbe restituire la versione di Rust installata, confermando che l'installazione è avvenuta con successo.

5. **Aggiornamento di Rust:** In futuro, per aggiornare Rust, puoi utilizzare il seguente comando:
   
   ```bash
   rustup update
   ```

Questi passaggi ti guideranno attraverso l'installazione di Rust sul tuo sistema Linux. Una volta completata l'installazione, sei pronto per iniziare a sviluppare in Rust sul tuo sistema.

### Su sistemi Windows
Ecco come installare Rust su un sistema Windows:

1. **Scarica ed Esegui il Installer:**
   - Vai al sito ufficiale di Rust all'indirizzo [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install).
   - Clicca sul pulsante "Install Rust" per scaricare l'installer.
   - Una volta completato il download, esegui il file dell'installer.

2. **Configura l'Installazione:**
   - Durante l'installazione, verrai guidato attraverso le opzioni di configurazione.
   - Premi "Enter" per continuare con l'installazione predefinita.
   - Quando il programma ti chiede "Proceed with installation (default)", premi "1" e poi "Enter".

3. **Accetta le Condizioni:**
   - Ti verranno mostrate le condizioni di utilizzo di Rust. Premi "Enter" per accettare e continuare.

4. **Scegli l'Opzione di Installazione:**
   - Verrai chiesto se desideri installare Rust. Premi "Enter" per confermare.

5. **Completa l'Installazione:**
   - L'installer di Rust installerà il compilatore Rust (chiamato `rustc`) e il gestore di pacchetti Cargo.
   - Una volta completata l'installazione, il terminale mostrerà il messaggio "Rust is installed now".

6. **Verifica l'Installazione:**
   - Apri una nuova finestra del prompt dei comandi o del terminale.
   - Digita il comando `rustc --version` e premi "Enter". Dovresti vedere la versione di Rust che hai appena installato.

Rust è ora installato sul tuo sistema Windows! Puoi iniziare a scrivere e compilare programmi Rust direttamente dalla riga di comando o utilizzando un ambiente di sviluppo come Visual Studio Code con l'estensione Rust.

### Su sistemi macOS
Installare Rust su un sistema macOS è semplice grazie a Rustup, il gestore ufficiale di Rust. Ecco come farlo:

**1. Apri il Terminale:**
   - Puoi trovarlo nella cartella `Applicazioni > Utility > Terminale`, oppure cercalo usando Spotlight (Cmd + Spazio, poi digita "Terminale").

**2. Scarica e Installa Rustup:**
   - Scrivi il seguente comando nel Terminale e premi Invio:
     ```bash
     curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
     ```
   - Questo comando scaricherà ed eseguirà lo script di installazione di Rustup.

**3. Avvia il Processo di Installazione:**
   - Dopo aver eseguito il comando sopra, ti verranno chieste alcune domande nel Terminale.
   - Premi Invio per accettare l'installazione predefinita.

**4. Aggiungi Rust al Percorso (opzionale ma consigliato):**
   - Alla fine dell'installazione, Rustup ti dirà di aggiungere Rust al tuo percorso di sistema. Segui le istruzioni fornite (generalmente è sufficiente eseguire `source $HOME/.cargo/env` nel Terminale).

**5. Verifica l'Installazione:**
   - Per verificare che Rust sia stato installato correttamente, chiudi e riapri il Terminale, poi digita:
     ```
     rustc --version
     ```
   - Dovresti vedere la versione di Rust che hai appena installato.

Ora hai Rust installato sul tuo sistema macOS. Puoi iniziare a scrivere e compilare programmi Rust sul tuo computer!

### Creazione del primo progetto in Rust
Avviamo il nostro [terminale](./il-terminale#come-avviare-il-terminale-in-un-so).

**Cargo** è il sistema di gestione dei pacchetti e il sistema di compilazione per Rust. Per lavorare con Cargo, è utile conoscere alcuni dei suoi comandi principali:

1. **`cargo new nome_progetto`:** Crea un nuovo progetto Rust nella directory specificata. Ad esempio, per creare un progetto chiamato "ciao guardiani", utilizzeremmo:
   ```rust
   cargo new ciao_guardiani
   ```
   Questo comando crea una nuova cartella chiamata "ciao_guardiani" con la struttura di base di un progetto Rust all'interno.

2. **`cargo build`:** Compila il progetto Rust nella modalità di sviluppo. Verrà creata una cartella `target/debug` contenente l'eseguibile del progetto.

3. **`cargo run`:** Compila ed esegue il progetto. Se il progetto non è stato compilato prima, questo comando compilerà automaticamente il codice prima di eseguirlo.

4. **`cargo test`:** Esegue i test del progetto. Puoi scrivere test per le varie parti del tuo codice e questo comando li eseguirà e mostrerà i risultati.

5. **`cargo build --release`:** Compila il progetto nella modalità di rilascio, ottimizzando il codice per le prestazioni. L'eseguibile risultante si troverà nella cartella `target/release`.

6. **`cargo doc`:** Genera la documentazione del progetto in formato HTML. Questa documentazione è basata su commenti speciali nel tuo codice sorgente, chiamati doc comments.

7. **`cargo clean`:** Elimina i file generati dal processo di compilazione, ripulendo il progetto.

Ricorda che questi comandi devono essere eseguiti nella directory del tuo progetto Rust.

Quindi, dopo aver creato il progetto "ciao_guardiani" con il comando `cargo new ciao_guardiani`, puoi entrare nella cartella del progetto usando il comando `cd ciao_guardiani` e poi eseguire `cargo build` per compilare il progetto o `cargo run` per compilare ed eseguire il tuo programma.

### Struttura della cartella del progetto
Quando crei un nuovo progetto Rust con il comando `cargo new nome_progetto`, Cargo crea una struttura di base per il tuo progetto. Ecco cosa troverai nella cartella del progetto:

1. **`src/`:** Questa cartella contiene il codice sorgente del tuo progetto Rust. All'interno, troverai un file chiamato `main.rs` che è il punto di ingresso del tuo programma. Puoi creare altri file Rust all'interno di questa cartella per organizzare il tuo codice in moduli separati.

   ```css
   src/
   ├── main.rs
   └── lib.rs (se creato)
   ```

2. **`Cargo.toml`:** Questo è un file di configurazione TOML (Tom's Obvious, Minimal Language) che contiene le informazioni sul tuo progetto, come il nome, la versione, le dipendenze e altre configurazioni importanti. È fondamentale per gestire le dipendenze del tuo progetto, specificare le librerie necessarie e configurare vari aspetti del processo di compilazione.

   Il file `Cargo.toml` ha un aspetto simile a questo:

   ```toml
   [package]
   name = "Ciao_guardiani"
   version = "0.1.0"
   edition = "2021"

   # See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

   [dependencies]
   ```

   Nella sezione `[package]`, puoi specificare il nome del tuo progetto, la versione e l'edizione di Rust che stai utilizzando. Nella sezione `[dependencies]`, puoi elencare le dipendenze esterne del tuo progetto.

3. **`target/`:** Questa cartella viene creata quando compili il tuo progetto usando `cargo build` o `cargo run`. Contiene i file binari generati, sia nella modalità di sviluppo (`target/debug/`) che nella modalità di rilascio (`target/release/`).

   ```css
   target/
   ├── debug/
   └── release/
   ```

Questi sono i componenti principali della struttura del progetto creato da Cargo. Puoi aggiungere ulteriori file e cartelle al tuo progetto man mano che sviluppi e organizzi il codice in modo più complesso. Il file `Cargo.toml` è particolarmente importante poiché definisce le informazioni chiave del tuo progetto e gestisce le sue dipendenze.

### Il file main.rs
Il file `main.rs` in un progetto Rust è il punto di ingresso principale del tuo programma. Quando esegui il tuo programma Rust, il codice all'interno di `main.rs` viene eseguito per primo. Ecco cosa potresti trovare all'interno di questo file:

#### Struttura di base di `main.rs`:

```rust
fn main() {
    // Il codice all'interno di questa funzione verrà eseguito quando avvii il programma
    println!("Ciao, mondo!"); // Questo stampa "Ciao, mondo!" sulla console
}
```

##### Cosa fa `main.rs`:

1. **`fn main() { ... }`:** Questo è il punto di ingresso del programma. Tutte le istruzioni all'interno di questa funzione verranno eseguite quando avvii il programma Rust.

2. **`println!("Ciao, mondo!");`:** Questa è un'esempio di istruzione di stampa. `println!` è una macro che stampa il testo sulla console. Nel caso sopra, il testo stampato è "Ciao, mondo!". Puoi modificare questo testo per stampare qualsiasi cosa desideri sulla console quando esegui il programma.

Adesso cambiate la frase tra virgolette `"Ciao, mondo!"` con `"Ciao guardiani!"`.

### Compilare ed eseguire il progetto
Per compilare ed eseguire il programma "ciao_guardiani" che hai creato, segui questi passaggi:

1. **Apri il Terminale o Prompt dei Comandi:** Apri una finestra del terminale o del prompt dei comandi sul tuo sistema operativo, in **Visual Studio Code** vai nel menù in alto, sotto la voce *Terminal* -> *New Terminal*. Assicurati di essere nella directory del tuo progetto "ciao_guardiani". Se non sei sicuro di quale sia la directory corrente, puoi usar il comando `cd` (su Windows) o `cd` (su macOS/Linux) per spostarti nella directory giusta.

2. **Compila il Programma con Cargo:** Assicurati di essere nella directory del progetto e esegui il comando `cargo build`. Questo compilerà il tuo programma Rust. Se ci sono errori nel codice, verranno visualizzati nel terminale.

   ```
   cargo build
   ```

3. **Esegui il Programma:** Una volta che la compilazione è completata senza errori, puoi eseguire il programma usando il comando `cargo run`.

   ```
   cargo run
   ```

   Questo comando compila automaticamente il tuo programma se le modifiche sono state apportate e quindi lo esegue. Vedrai l'output del tuo programma stampato nel terminale:

   ```
   Ciao guardiani!
   ```

Ora hai compilato ed eseguito con successo il tuo programma "ciao_guardiani". Puoi modificare il codice all'interno di `main.rs` e quindi eseguire `cargo run` di nuovo per vedere le modifiche apportate al programma. Questo ciclo di sviluppo ti permette di iterare rapidamente durante lo sviluppo del tuo progetto Rust.

### Recap e verifica
Prova a rispondere a queste domande prima di proseguire con le lezioni

1. Come si crea un nuovo progetto Rust utilizzando Cargo?
2. Qual è il comando per creare un nuovo progetto chiamato "calcolatrice" con Cargo?
3. Qual è il ruolo del file `Cargo.toml` in un progetto Rust?
4. Come si definisce il nome del progetto e la sua versione nel file `Cargo.toml`?
5. Qual è il ruolo del file `main.rs` in un progetto Rust?
6. Cosa contiene di solito il file `main.rs` in un progetto Rust di base?
7. Qual è il comando per compilare un progetto Rust utilizzando Cargo?
8. Come si esegue un programma Rust compilato utilizzando Cargo?