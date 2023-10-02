---
sidebar_position: 2
---

# 1.2 Perchè imparare Rust?
Imparare Rust è una scelta eccellente per diversi motivi, specialmente se desideri apprendere la programmazione in modo completo e sicuro. Rust è un linguaggio di programmazione di sistema che offre una sintassi pulita e moderna, ma ciò che lo rende veramente speciale è il suo focus sulla sicurezza e l'affidabilità del codice.

Differenza tra Linguaggi Compilati e Interpretati:
- **Sicurezza e Affidabilità**: Mentre molti linguaggi interpretati eseguono il codice direttamente senza molte precauzioni, Rust è un linguaggio compilato. Ciò significa che il tuo codice Rust viene tradotto in un linguaggio macchina specifico per il computer su cui verrà eseguito. Durante questo processo di compilazione, Rust fa controlli rigorosi per assicurarsi che il codice sia sicuro, evitando così molti degli errori comuni che possono portare a vulnerabilità di sicurezza come buffer overflow o accesso a memoria non valido.
- **Gestione della Memoria**: Una delle principali differenze risiede nella gestione della memoria. Nei linguaggi interpretati come Python o JavaScript, spesso non devi preoccuparti di gestire manualmente la memoria. Questi linguaggi gestiscono automaticamente la memoria per te, il che rende il processo di sviluppo più facile ma può portare a errori di memoria se non utilizzati correttamente. In Rust, hai il controllo diretto sulla gestione della memoria, ma allo stesso tempo, il compilatore Rust ti aiuta a evitare errori comuni come la doppia liberazione di memoria o la lettura di dati non inizializzati.
- **Prestazioni**: I linguaggi compilati come Rust tendono ad essere più veloci rispetto ai linguaggi interpretati. Poiché il codice Rust viene tradotto direttamente in istruzioni di basso livello che il computer comprende, le prestazioni sono notevolmente ottimizzate, rendendo Rust una scelta eccellente per applicazioni ad alte prestazioni e giochi.
- **Flessibilità e Controllo**: Rust offre un alto livello di flessibilità e controllo. Puoi scrivere codice di basso livello quando è necessario, ma anche utilizzare le strutture di alto livello quando vuoi scrivere in modo più astratto ed efficiente. Questa flessibilità ti dà il potere di decidere come vuoi strutturare il tuo programma in base alle tue esigenze specifiche.

In breve, imparare Rust ti dà una solida comprensione della programmazione di sistema, ti insegna a scrivere codice robusto e sicuro, e ti offre la flessibilità e il controllo che sono essenziali per gli sviluppatori professionisti. È un linguaggio che ti equipaggia con conoscenze preziose e competenze che possono essere applicate in una vasta gamma di scenari di sviluppo software.

### Una profonda conoscenza dell'hardware
Rust è noto per la sua capacità di sviluppare una profonda conoscenza dell'hardware di un computer o di un dispositivo grazie al suo controllo preciso sulla memoria e alla gestione degli accessi.

 1. **Controllo diretto sulla memoria**: Rust ti permette di accedere direttamente alla memoria del computer in modo sicuro. Puoi gestire manualmente l'allocazione e la deallocazione della memoria, il che è essenziale quando si lavora a livello di sistema o con *dispositivi embedded* ¹. Questo controllo diretto sulla memoria è fondamentale per la programmazione a basso livello e permette di ottimizzare le prestazioni in modo efficace.

 2. **No null pointer dereferences:** In Rust, è impossibile accedere a una posizione di memoria null. Questo elimina uno dei più comuni errori di programmazione che possono portare a crash del programma o vulnerabilità di sicurezza. Questo livello di sicurezza è fondamentale quando si lavora con hardware, dove anche il più piccolo errore può avere conseguenze gravi.

 3. **Affidabilità e sicurezza:** Il sistema di proprietà e l'analizzatore di prestiti di Rust (*borrow checker*) assicurano che non ci siano accessi concorrenti o condizioni di gara (*race conditions*) nella tua applicazione, proteggendola da errori che possono essere difficili da individuare e risolvere.

 4. **Interfacciamento con C e assembly:** Rust permette di interfacciarsi direttamente con codice scritto in C e assembly. Questo è essenziale quando si deve lavorare con librerie o codice esistente scritto in questi linguaggi, permettendo di utilizzare le capacità di Rust insieme a codice legacy o ottimizzato a basso livello.

 5. **Programmazione bare-metal:** Rust può essere utilizzato per la programmazione a livello *bare-metal*, cioè senza un sistema operativo. Questo significa che puoi scrivere codice che gira direttamente sull'hardware senza l'ausilio di un sistema operativo. Questa capacità è fondamentale per applicazioni *embedded* e per sviluppare software per dispositivi senza sistema operativo, come *microcontrollori* e *sistemi embedded* specializzati.

In sostanza, Rust offre un livello di controllo sulla memoria, sicurezza e affidabilità che è fondamentale quando si sviluppano applicazioni che richiedono una profonda comprensione dell'hardware di un computer o di un dispositivo. Queste caratteristiche fanno di Rust una scelta ideale per progetti che richiedono una programmazione di sistema precisa e robusta.

:::info
1. I *dispositivi embedded* sono piccoli computer incorporati in oggetti quotidiani come telefoni, auto o elettrodomestici. Sono progettati per fare lavori specifici, come gestire il riscaldamento di un forno a microonde. In breve, sono il cervello nascosto di molti dispositivi che usiamo ogni giorno.
:::

### Differenze con il C e C++
Se conosci questi due linguaggi, immagina di essere nella vasta terra della programmazione, circondato da diversi sentieri, ognuno rappresentante un linguaggio di programmazione diverso. In questa terra, ci sono due sentieri ben battuti chiamati "C" e "C++", che sono conosciuti da generazioni di programmatori. Sono come antiche strade di pietra, robuste e affidabili, e sono stati i pilastri della programmazione per molto tempo.

Ora, in mezzo a queste strade familiari, si apre un nuovo sentiero chiamato "Rust". Rust è come una moderna autostrada a più corsie. Ha ereditato la solidità e l'affidabilità di C e C++, ma ha anche una marcia in più. Mentre i vecchi sentieri richiedono ai viaggiatori di fare molta attenzione per evitare insidie come buffer overflow e accesso a memoria non valido, la moderna autostrada di Rust ha delle protezioni incorporate contro questi pericoli. È come un sentiero ben illuminato e sicuro che ti permette di viaggiare più veloce e in modo più sicuro.

Inoltre, mentre C e C++ possono sembrare un po' come parlare in un linguaggio antico, Rust è come parlare una lingua moderna e chiara. È scritto con una sintassi più pulita e leggibile, rendendo il processo di scrittura del codice più efficiente ed elegante. Ha anche una gestione della memoria più sicura, il che significa che non devi preoccuparti di problemi comuni legati alla memoria, rendendo il tuo viaggio di programmazione molto meno accidentato.

Quindi, mentre i sentieri di C e C++ sono affascinanti e validi, il sentiero di Rust offre un viaggio più moderno, sicuro ed elegante attraverso la terra della programmazione. È come un nuovo capitolo nella storia della programmazione, che porta con sé l'eredità dei suoi predecessori ma aggiunge anche una freschezza e una modernità che rendono l'esperienza di programmazione ancora più entusiasmante e gratificante.

Ecco come si scrive il classico "Hello, World!" in C, C++ e Rust:

C
```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

C++
```c
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

Rust
```rust
fn main() {
    println!("Hello, World!");
}
```

:::info
L'**indentazione del codice** è importante perché rende il codice più leggibile. Organizzando il codice in modo gerarchico, con blocchi di codice indentati correttamente, è più facile per gli sviluppatori comprendere la struttura e la logica del programma. Un codice ben indentato migliora la chiarezza e riduce gli errori dovuti alla confusione della struttura.

I **commenti** sono essenziali perché forniscono spiegazioni aggiuntive sul codice. Possono aiutare gli altri programmatori (o anche te stesso in futuro) a capire cosa fa una parte specifica del codice, soprattutto se è complessa o non immediatamente ovvia. Inoltre, i commenti possono servire come annotazioni per te stesso, ricordandoti il motivo per cui hai scritto una determinata sezione di codice in un certo modo. Utilizzando commenti, è possibile documentare intenzioni, procedure e decisioni di progettazione, migliorando la manutenibilità del codice nel tempo.
:::