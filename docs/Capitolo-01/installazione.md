---
sidebar_position: 5
---

# 1.5 Iniziamo con Rust!
Ora che abbiamo una chiara comprensione di cosa sia un terminale, è il momento perfetto per mettere le mani in pasta e iniziare a lavorare con Rust!

## Installazione di Rust
### Windows
1. **Scarica il Gestore di Pacchetti:** Vai al sito ufficiale di Rust (https://www.rust-lang.org/tools/install) e scarica il file di installazione per Windows.
2. **Esegui il File di Installazione:** Dopo il download, esegui il file di installazione. Segui le istruzioni guidate per l'installazione.
3. **Verifica l'installazione:** Apri il prompt dei comandi o PowerShell e digita `rustc --version` seguito da `cargo --version` per assicurarti che Rust e Cargo (il gestore di pacchetti di Rust) siano stati installati correttamente.

### macOS e Linux
1. **Apri il Terminale:** Per macOS, apri Terminal dall'applicazione Utility. Per Linux, apri il terminale.
2. **Installazione tramite Rustup:** Usa `rustup`, un gestore di versioni per Rust. Digita il seguente comando nel terminale e premi Invio:

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

   Questo scaricherà ed eseguirà lo script di installazione di Rustup.
3. **Segui le Istruzioni:** Il processo di installazione ti guiderà attraverso la configurazione di Rust. Di solito, dovrai premere `1` per confermare l'installazione.
4. **Aggiorna il Percorso:** Alla fine dell'installazione, Rustup ti dirà di aggiornare il percorso di sistema. Esegui il comando suggerito nel terminale. Questo ti consente di eseguire `rustc` e `cargo` da qualsiasi posizione nel terminale.
5. **Verifica l'installazione:** Nel terminale, digita `rustc --version` e `cargo --version` per assicurarti che Rust e Cargo siano stati installati correttamente.

Ora hai installato Rust con successo sul tuo sistema operativo! Puoi iniziare a scrivere e compilare programmi Rust sul tuo computer.

## Configurazione dell'Ambiente di Sviluppo

Certamente! Ecco una guida dettagliata sulla configurazione dell'IDE Visual Studio Code per lo sviluppo in Rust su diversi sistemi operativi:

### Configurazione di Visual Studio Code per Rust
**Windows**
1. **Installazione di Visual Studio Code:**
   - Scarica e installa Visual Studio Code da [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. **Estensioni di Visual Studio Code:**
   - Apri Visual Studio Code.
   - Vai su Extensions (o premi `Ctrl+Shift+X`), cerca "Rust" e installa l'estensione "Rust" di rust-lang.
3. **Configurazione del Debugger:**
   - Installa l'estensione "CodeLLDB" per il supporto al debugging.
   - Configura il debugger nel file `.vscode/launch.json` del tuo progetto Rust.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug",
            "type": "lldb",
            "request": "launch",
            "program": "${workspaceFolder}/target/debug/your_project_name",
            "args": [],
            "cwd": "${workspaceFolder}",
            "stopAtEntry": false,
            "preLaunchTask": "build"
        }
    ]
}
```
4. **Compilazione e Debugging:**
   - Apri un terminale in Visual Studio Code.
   - Usa `cargo build` per compilare il tuo progetto e `cargo run` per eseguirlo.
   - Usa il debugger per il debugging interattivo.

**macOS**
La configurazione su macOS è simile a quella di Windows, seguendo gli stessi passaggi per l'installazione di Rust, Visual Studio Code e le estensioni necessarie.

**Linux**
Su Linux, la configurazione è simile a Windows e macOS. Assicurati di seguire gli stessi passaggi per l'installazione di Rust, Visual Studio Code e le relative estensioni.

## Creazione del progetto "rusty pixel"
Ecco una guida passo-passo per creare il tuo primo progetto Rust chiamato "rusty pixel" utilizzando Cargo, il gestore di pacchetti e strumento di costruzione di Rust. Inizieremo spiegando i vari file creati da Cargo per un nuovo progetto.

### 1 Crea un nuovo progetto con Cargo
Apri il terminale o il prompt dei comandi e naviga nella directory in cui vuoi creare il tuo progetto. Quindi, esegui il seguente comando per creare un nuovo progetto Rust chiamato "rusty_pixel":

```sh
cargo new rusty_pixel
```

Questo comando crea una nuova directory chiamata "rusty_pixel" contenente i file del tuo progetto.

### 2 Esplora i files creati da Cargo
Certamente! Ecco una spiegazione dettagliata dei file creati dal comando `cargo new` in Rust:

**Cargo.toml:**
`Cargo.toml` è il file di configurazione principale del tuo progetto Rust. Contiene informazioni come il nome del progetto, l'autore, la versione di Rust richiesta e le dipendenze del progetto. Questo file è essenziale per gestire le configurazioni del tuo progetto.
Esempio di `Cargo.toml`:
```toml
[package]
name = "rusty_pixel"
version = "0.1.0"
edition = "2018"

# Informazioni sull'autore e la licenza
[package.metadata.docs.rs]
rusty_pixel = "0.1.0"
license = "MIT"

# Dipendenze del progetto (se presenti)
[dependencies]
```

**src/main.rs:**
`main.rs` è il file principale del tuo programma Rust. Contiene il punto di ingresso del programma, cioè la funzione `fn main()`. Quando esegui il tuo programma, Rust inizia l'esecuzione da questa funzione. Puoi scrivere il codice del tuo programma all'interno di questa funzione.
Esempio di `main.rs`:
```rust
fn main() {
    println!("Hello, Rusty Pixel!");
}
```

**.gitignore:**
`.gitignore` è un file che indica a Git quali file o cartelle ignorare durante il versionamento. Questo file è utile quando si lavora con un sistema di controllo versione come Git, poiché impedisce l'inclusione di file temporanei o generati automaticamente nel repository.
Esempio di `.gitignore` preconfigurato per progetti Rust:
```gitignore
/target
**/*.rs.bk
```

Questi sono i principali file creati da `cargo new` quando si crea un nuovo progetto Rust. Ora sei pronto per iniziare a sviluppare il tuo progetto, scrivendo codice nel file `main.rs` e gestendo le dipendenze nel file `Cargo.toml`. Buona programmazione in Rust!

### 3 Scrivi il codice per "Rusty Pixel"
Ora puoi iniziare a scrivere il codice nel file `src/main.rs` per il tuo progetto "Rusty Pixel". Ad esempio, puoi iniziare creando una semplice applicazione che stampa "Hello, Rusty Pixel!" a schermo:

```rust
fn main() {
    println!("Hello, Rusty Pixel!");
}
```

### 4 Esegui il Progetto
Per eseguire il tuo progetto, torna nella directory principale del progetto ("rusty_pixel") tramite il terminale o il prompt dei comandi. Quindi esegui il seguente comando:

```sh
cargo run
```

Questo comando compilerà e eseguirà il tuo programma Rust, stampando l'output a schermo.

## Conclusione
Hai imparato a creare un nuovo progetto Rust chiamato "Rusty Pixel" utilizzando Cargo. Hai esplorato i file creati da Cargo e scritto un semplice programma Rust. Nel prossimo capitolo, esploreremo concetti più avanzati e implementeremo funzionalità aggiuntive per il nostro progetto "Rusty Pixel".

## Recap e verifica
Prova a rispondere a queste domande prima di proseguire con le lezioni

1. Come si crea un nuovo progetto Rust utilizzando Cargo?
2. Qual è il comando per creare un nuovo progetto chiamato "calcolatrice" con Cargo?
3. Qual è il ruolo del file `Cargo.toml` in un progetto Rust?
4. Come si definisce il nome del progetto e la sua versione nel file `Cargo.toml`?
5. Qual è il ruolo del file `main.rs` in un progetto Rust?
6. Cosa contiene di solito il file `main.rs` in un progetto Rust di base?
7. Qual è il comando per compilare un progetto Rust utilizzando Cargo?
8. Come si esegue un programma Rust compilato utilizzando Cargo?