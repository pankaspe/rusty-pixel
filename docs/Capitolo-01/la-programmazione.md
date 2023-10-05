---
sidebar_position: 1
---

# 1.1 Cos'è la Programmazione
Immagina di sederti al tavolo con un amico che non parla la tua lingua (bello eh?). Questo amico è un computer e, nonostante sia molto intelligente, capisce solo un linguaggio molto specifico, chiamato **linguaggio di programmazione**. La programmazione è *l'arte di scrivere* un elenco preciso e dettagliato di *istruzioni* in questo linguaggio speciale.

Queste istruzioni sono come comandi magici che dirigeranno il tuo amico digitale (il computer) su come eseguire compiti specifici in modo rapido ed efficiente. In altre parole, tu sei il folle che dà vita a oggetti virtuali, giochi interattivi, applicazioni, etc... (*utili solo a te!! Pazzo furioso masochista di un programmatore che non sei altro¹*), con l'aiuto della tua bacchetta magica, ovvero il codice!

:::tip
¹Oh, certo, non c'è nulla di speciale nella programmazione, giusto? Dopotutto, i modelli meteorologici che prevedono il tempo, le sofisticate intelligenze artificiali che sembrano quasi avere mente propria, le centraline delle automobili che rendono più sicure le nostre strade, WhatsApp con i suoi 2,3 miliardi di gattini, il magico mondo di 0 e 1 che fa funzionare tutto... 

Ah, e non dimentichiamoci del sistema di controllo del tuo forno che, per incanto, sa quando hai bruciato qualcosa e decide di farsi sentire. Sì, tutto questo è solo frutto del puro caso, ovviamente. Chi avrebbe mai pensato che quei semplici 0 e 1 potessero fare tanto?
:::

Per fare ciò, devi pensare in modo logico e dettagliato, proprio come quando scrivi una ricetta (*e metti la pietanza nel forno...*).  
Se immagini di preparare una torta, devi specificare ogni passaggio: "*prendi un uovo, aggiungi zucchero, mescola bene...*", altrimenti il risultato potrebbe non essere quello che desideri. Nella programmazione, è lo stesso concetto. Ogni **istruzione** che scrivi deve essere chiara e accurata, altrimenti il computer potrebbe non capirti correttamente.

Così, la **programmazione** ti dà il potere di creare, di dare vita a idee digitali e di far svolgere al computer compiti incredibili. È un po' come imparare una nuova lingua, solo che questa volta stai imparando a comunicare con i computer per realizzare cose sorprendenti nel mondo digitale!

## Perché imparare a programmare?
Viviamo in un mondo digitale, circondati da computer, applicazioni e servizi online. Questi strumenti sembrano magici, ma sono alimentati dalla programmazione, una competenza che può cambiare la tua vita.

Immagina *Facebook* e *Instagram*, le app che usi ogni giorno per condividere foto e messaggi con gli amici (*e vedere quegli stramaledetti gattini*). Sembra che queste app sappiano esattamente cosa ti piace vedere, giusto? Dietro questa magia c'è l'*intelligenza artificiale* (IA). L'IA è come un cervello artificiale che impara e prende decisioni come lo farebbe un essere umano, ma molto più velocemente. E chi fa funzionare questa IA? Guarda un po', sempre quei pazzi dei **programmatori**, le persone che scrivono il *codice sorgente*.

:::tip
Ah, il *codice sorgente*. È solo quel misterioso insieme di parole e simboli che sembrano creati da un mago al computer. Immagina un tomo antico scritto in una lingua segreta che solo pochi eletti possono comprendere. In realtà, è solo un testo scritto da programmatori, usando un linguaggio specifico, per dire ai computer cosa fare.
```rust
fn main() {
    println!("Benvenuti nel mondo incantato di Rust!");
    
    let mut numero_magico = 42;
    
    for _ in 0..10 {
        numero_magico = se_brilla_fai_magia(numero_magico);
    }
    
    if numero_magico == 42 {
        println!("Congratulazioni, hai risolto l'enigma!");
    } else {
        println!("Mi dispiace, sembra che la magia non sia dalla tua parte oggi.");
    }
}

fn se_brilla_fai_magia(mut x: i32) -> i32 {
    if x % 2 == 0 {
        x += 10;
    } else {
        x -= 5;
    }
    
    x
}
```
Tadàààà!! 🎩✨  
Non importa se non capite nulla, a fine corse comprenderete ogni singola istruzione!
:::

Ora, pensa a questo: potresti essere tu il mago che scrive il codice per far funzionare queste IA. Immagina di creare un assistente digitale che ti aiuta a trovare le foto più belle da condividere con gli amici o un filtro che rende le tue immagini ancora più sorprendenti (😭). Potresti persino insegnare al computer a riconoscere i tuoi amici nelle foto.

Ma la **programmazione** è molto di più. È come avere una chiave magica per il mondo digitale. Ti dà il potere di creare il tuo sito web, progettare un'app per semplificare la tua vita quotidiana (*io lo uso per programmare i microcontrollori per il controllo della fertilità del terreno*) o inventare un videogioco divertente.

Ma c'è un altro aspetto sorprendente: imparando a programmare, sviluppi una *superpotenza nel tuo cervello* chiamata **pensiero logico**. Quando scrivi il codice, devi pensare in modo *organizzato* e dividere compiti complessi in piccoli passaggi. È come risolvere un puzzle gigante. Questo tipo di **pensiero** ti rende più intelligente, più organizzato e migliore nel prendere decisioni.

Ma il **pensiero logico** non si ferma qui. Quando scrivi il codice, incontri spesso problemi da risolvere. Potresti chiederti: "*Perché il mio programma non funziona?*" o "*Come posso rendere il mio gioco più divertente?*". Qui entra in gioco il **problem solving**. Un po' come un detective che cerca indizi e connessioni per trovare la soluzione giusta. Questo tipo di pensiero non ti aiuta solo nella programmazione, ma ti rende un esperto nel *risolvere* problemi nella vita quotidiana, nelle amicizie e persino nelle decisioni importanti.

In sintesi, imparare a programmare è come avere un superpotere per il tuo cervello. Ti dà il potere di creare, di essere un inventore digitale e di capire meglio il mondo digitale che ti circonda. Ti rende un mago digitale e un supereroe del pensiero logico.

## Come funziona la programmazione?
I *programmi* o *codici sorgenti* sono scritti con dei linguaggi di programmazione, come il linguaggio **Rust** (ne esistono tantissimi, come Python, Ruby, Perl, C, C++, ecc... se mi citi il Javascript sei un hipster). Questi linguaggi sono come il *vostro assistente* digitale e comprendono istruzioni molto specifiche che il computer può seguire alla lettera. Pensate a queste istruzioni come comandi magici che dirigeranno il vostro assistente digitale su come svolgere compiti specifici in modo preciso.

Per esempio, immaginate di dare istruzioni a un robot. Potreste dirgli: "*Vai avanti per 5 passi, gira a destra di 90 gradi, cammina altri 3 passi, fai lo sgambetto alla nonna, poi gira a sinistra di 45 gradi e lanciati dal balcone...*" Queste istruzioni dettagliate consentono al robot di seguire un percorso specifico. Nel mondo della programmazione, scrivete un codice simile per dire al computer cosa fare, passo dopo passo. Ad esempio, potreste scrivere un codice che dice al computer di disegnare una figura geometrica o di risolvere un puzzle matematico. Le possibilità sono infinite e dipendono dalla vostra creatività, abilità di scrivere codice e, chiaramente, pazzia!

## Il pensiero logico del programmatore
Vorrei tornare su questo concetto ed approfondirlo meglio, che è la chiave di successo per diventare degli abili programmatori. La *logica della programmazione* è come risolvere un enigma o un rompicapo. È il modo in cui i **programmatori pensano** e **affrontano** i problemi in modo sistematico e creativo.  
Pensate di dover risolvere un enigma di logica che vi chiede di trovare il modo più efficiente per raggiungere un obiettivo. Ad esempio, supponiamo che abbiate un labirinto e dovete trovare il percorso più breve per uscire. Iniziereste a pensare: "*Come posso arrivare alla fine in modo rapido e sicuro?*" Questo è un esempio di pensiero logico. Nella programmazione, si affrontano problemi simili. Ad esempio, potremmo dover creare un programma che calcola la somma di una serie di numeri. Inizieremmo a chiederci: "*Come possiamo organizzare questi numeri in modo da poterli sommare facilmente?*". Quindi, sviluppiamo un **algoritmo**, un *insieme di passaggi precisi* che indicano al computer come eseguire questa operazione in modo efficiente. È come creare una mappa per risolvere un enigma. La logica ci aiuta a suddividere il problema in passaggi più piccoli e a organizzarli in un ordine che ha senso. Questo rende il processo di risoluzione dei problemi più gestibile e ci permette di trovare soluzioni eleganti e efficienti.

## Parliamo di algoritmi
Gli algoritmi sono come ricette per risolvere problemi. Li immaginate come una serie di passaggi dettagliati che danno istruzioni precise su come affrontare una determinata sfida. Pensate a una ricetta per fare un sandwich: "*Prendi due fette di pane, metti il formaggio, metti il prosciutto, aggiungi la lattuga, metti un'altra fetta di pane sopra...*" Questi passaggi specifici sono come gli algoritmi che voi scriverete per i computer.

Ecco perché gli algoritmi sono importanti: permettono di scomporre problemi complessi in piccoli passaggi gestibili. Ad esempio, se voleste creare un gioco, l'algoritmo potrebbe contenere passaggi come "*Mostra il personaggio del giocatore*", "*Controlla se il giocatore ha premuto il tasto 'Avanti'*", "*Sposta il personaggio in avanti di un passo*". Questi sono come i mattoni di base per costruire il vostro gioco. Imparerete a scrivere questi mattoni in modo che il computer possa eseguire i vostri comandi e risolvere problemi in modo sistematico.

Ma non è solo per i computer! La capacità di creare algoritmi può essere applicata nella vita di tutti i giorni.  
Dovete pianificare un percorso per raggiungere un luogo sconosciuto: questo è un algoritmo di navigazione. O se volete preparare una lista delle cose da fare per la giornata, state creando un algoritmo per organizzare il vostro tempo. Gli algoritmi sono come le istruzioni che guidano molte delle nostre azioni quotidiane e, imparando a scriverli, potrete risolvere problemi in modo più efficiente e creativo in varie situazioni.

Bene, non so più cosa scrivere qui. Andiamo al prossimo capitolo!