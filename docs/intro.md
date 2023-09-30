---
id: intro
sidebar_position: 1
title: Intro
description: Introduzione al progetto rusy guardians
tags:
  - Programmazione
  - Introduzione
  - Rust
---

# Introduzione
Ciao ragazzi, o meglio, *Rusty Guardians*!  
Benvenuti nel meraviglioso (e non affatto complicato) mondo della programmazione!  
Oggi inizieremo un viaggio emozionante che vi svelerà i segreti di come creare magie digitali che insegnano ai computer a fare esattamente ciò che volete. Sì, avete capito bene, potrete comunicare con i computer, o con le più moderne *Intelligenze Artificiali*, usando il linguaggio segreto chiamato _codice sorgente_, in inglese _source code_!  
Immaginatevi come dei maghi digitali che pronunciano incantesimi speciali, in questo caso parlando la lingua di **Rust**. E ora vi starete chiedendo, cos'è **Rust**? Beh, **Rust** è un linguaggio di programmazione speciale che rende la comunicazione tra essere umano e macchina molto sicura, veloce ed efficiente. È come avere una bacchetta magica per i computer!  
Con **Rust**, potrete scrivere istruzioni speciali che diranno al vostro assistente digitale (il computer) come eseguire compiti straordinari in un attimo. 

Ora, chi ha bisogno di bacchette magiche quando avete una tastiera e un computer, giusto?!  
Ecco, **Rust** è la vostra bacchetta magica digitale che renderà realtà le vostre idee, la vostra creatività e la vostra curiosità, e vi trasformerà in veri maghi della programmazione!

*Rusty Guardians*, siete pronti per iniziare questo affascinante viaggio nell'universo di **Rust** e della programmazione? 

### A chi è rivolto? 
Questo corso è stato creato pensando a ragazzi come voi che stanno facendo i primi passi nel mondo dell'informatica, dell'Internet e della programmazione. Ma, non preoccupatevi, è accessibile a chiunque sia curioso e abbia voglia imparare. Quindi, siete pronti a esplorare questo mondo affascinante con me e imparare a scrivere _codici sorgenti_ per far accadere cose magiche nei computer?

Durante il nostro percorso, cercheremo di rendere semplici concetti che possono sembrare complicati, in modo che tutti possano capirli facilmente. Impareremo insieme il linguaggio della tecnologia, scopriremo come funzionano le reti neurali e discuteremo di come possiamo utilizzare le nostre abilità in modo responsabile ed etico. E, naturalmente, vi insegnerò a programmare, a scrivere istruzioni speciali che faranno compiere ai computer compiti straordinari.

L'obiettivo qui è diventare **Guardiani** *digitali consapevoli*, in grado di navigare in sicurezza nel mondo digitale, affrontare le sfide che ci si presentano e creare cose fantastiche con la programmazione.  
Quindi, se siete curiosi, pronti a imparare e desiderate esplorare le meraviglie dell'informatica, dell'etica digitale e della programmazione, siete nel posto giusto.

Preparatevi per un viaggio ricco di scoperte, divertimento e nuove amicizie digitali. Sarà un'avventura straordinaria, e non vedo l'ora di iniziarla con voi!

### Convenzioni scrittura codice
Ogni codice sorgente sarà racchiuso dentro ad una formattazione speciale:
```rust
// esempio di codice formattato
fn main() {
    println!("Ciao Rusty Guardians!");
}
```

mentre gli eseguibili saranno cosi indicati
```shell
$ rustc main.rs
$ ./main
Ciao Rusty Guardians!
```

### Skill di base
Per questo lavoro, è importante conoscere alcune cose fondamentali sull'uso del computer. Oltre a sapere come installare programmi, navigare in internet e scaricare file, è essenziale capire come funziona l'organizzazione dei file nel computer. Questo significa saper muoversi tra le cartelle, che sono come le scatole dove vengono messi i vari documenti. Ma anche crearne di nuove, cambiare i nomi dei file, spostare documenti da un posto all'altro e organizzare tutto in modo ordinato e facile da capire

### Breve panoramica sulla Shell dei comandi
Una shell di comandi è come una finestra magica su un computer. Ti permette di comunicare con il computer usando testo anziché cliccare su icone o pulsanti. Immagina di avere un assistente virtuale a cui puoi dare istruzioni specifiche per eseguire determinate azioni. Ad esempio, invece di fare clic su un'icona per aprire un programma, puoi scrivere il nome del programma nella shell e il computer lo aprirà per te. In poche parole, una shell di comandi è un'interfaccia testuale che ti consente di dare ordini direttamente al computer, consentendo un controllo più dettagliato e preciso delle operazioni che vuoi eseguire.
Le istruzioni per avviare una shell di comandi possono variare a seconda del sistema operativo che stai utilizzando. Ecco come farlo sui sistemi operativi più comuni:

#### **Windows:**

1. **Windows 10/11:**
   - Premi **Win + R** sulla tastiera. Verrà aperta la finestra "Esegui".
   - Digita "cmd" o "powershell" (per una shell più avanzata) e premi **Invio**.

2. **Windows 7/8/8.1:**
   - Clicca sul menu **Start**.
   - Digita "cmd" nella barra di ricerca e premi **Invio**.

#### **macOS:**

1. **Terminal (Trovato nelle Utility):**
   - Vai su **Finder** > **Applicazioni** > **Utility** > **Terminal**.

   Oppure,

2. **Spotlight:**
   - Premi **Cmd + Spazio** per aprire Spotlight.
   - Digita "Terminal" e premi **Invio**.

#### **Linux (Ubuntu, Debian, Fedora, ecc.):**

1. **Terminal:**
   - Premi **Ctrl + Alt + T** sulla tastiera. Questa combinazione di tasti apre il terminale in molte distribuzioni Linux.
   
   Oppure,

2. **Da Applicazioni o Menu:**
   - Cerca un'applicazione chiamata "Terminale" o "Console" nel menu delle applicazioni.

Questi sono i metodi più comuni per avviare una shell di comandi sui diversi sistemi operativi. Assicurati di scegliere il metodo appropriato per il tuo sistema.