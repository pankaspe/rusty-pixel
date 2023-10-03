---
sidebar_position: 1
---
# 3.1 Cos'è l'Ownership?
L'ownership è uno dei concetti fondamentali di Rust ed è essenziale per capire come Rust gestisce la memoria e previene i problemi come i data race. 

:::info
Il termine "data race" (tradotto letteralmente in italiano come "corsa dati") si riferisce a un tipo specifico di problema che può verificarsi in un programma informatico multithreaded o concorrente. Per capire cosa sia una "data race", consideriamo un semplice esempio quotidiano.

Immagina di avere due persone (A e B) che condividono un computer. Entrambe vogliono modificare un documento di testo. Ora, se entrambe le persone tentano di modificare lo stesso documento nello stesso momento, potrebbero sovrascrivere le modifiche l'una dell'altra, creando confusione nel documento. Questa situazione è analoga a una "data race" in programmazione.

Nel contesto del software, una data race si verifica quando due o più thread di esecuzione in un programma accedono simultaneamente alla stessa area di memoria (come variabili o strutture dati) senza adeguata sincronizzazione. Se almeno uno di questi accessi è una scrittura, possono verificarsi risultati imprevedibili. I dati possono finire per essere letti o scritti in modo inconsistente, portando a comportamenti errati e imprevedibili del programma.

Rust è progettato per prevenire data race fornendo meccanismi di sicurezza come l'ownership e il borrowing, che impediscono più thread di accedere simultaneamente ai dati mutabili. Questi meccanismi assicurano che i dati vengano manipolati in modo coerente, riducendo il rischio di errori dovuti a data race.
:::

In Rust, ogni valore ha una variabile chiamata **proprietario**. Un valore può avere **un solo proprietario** alla volta. Quando il **proprietario** esce dallo `scope` (ovvero, quando il suo blocco di codice termina), il valore viene automaticamente *deallocato*, liberando la memoria.

:::info
La memoria del computer, fantasticando, è come una serie di caselle. Quando il tuo programma ha bisogno di memorizzare qualcosa, ottiene una casella (cioè, una porzione di memoria) e la riempie con i dati di cui ha bisogno. Quando non ha più bisogno di quella casella di memoria, deve liberarla in modo che possa essere utilizzata per altre cose. Questo atto di "liberare" o "restituire" la casella di memoria è ciò che intendiamo per deallocazione della memoria.
:::

Immagina di avere una bicicletta. Quella bicicletta è *tua*, quindi sei il **proprietario**. Puoi usarla per andare in giro, parcheggiarla dove vuoi e farci quello che desideri. Se decidi di prestare la bicicletta a un amico, sei ancora tu il **proprietario**, ma stai condividendo *temporaneamente* l'uso di essa con il tuo amico.

Tuttavia, se decidi di vendere la bicicletta a qualcun altro, quella persona diventerà il nuovo **proprietario**. Ora, la bicicletta appartiene a lui, e può farne ciò che vuole: guidarla, personalizzarla o persino venderla a loro volta.

Nel contesto della programmazione Rust, puoi pensare alla variabile che contiene un valore come al **proprietario** di quel valore. Solo il **proprietario** può modificarlo o decidere cosa farne. Quando la variabile esce dallo scope o viene *deallocata*, il valore torna libero per essere utilizzato da altre parti del programma, proprio come quando vendi o presti la tua bicicletta.  
Questa idea di **ownership** è un elemento chiave della sicurezza e della gestione della memoria in Rust.