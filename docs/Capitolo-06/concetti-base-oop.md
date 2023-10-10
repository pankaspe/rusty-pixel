---
sidebar_position: 1
---
# 6.1 Concetti di Base dell'OOP
La Programmazione Orientata agli Oggetti (OOP) è un paradigma di programmazione che si basa sul concetto di "oggetti". Questi oggetti contengono dati (conosciuti come attributi o proprietà) e comportamenti (conosciuti come metodi). L'OOP aiuta a organizzare il codice in modo più chiaro e modulare, migliorando la manutenibilità e la riusabilità del software.

## Concetti Fondamentali
1. **Classe:** Una classe è un modello o un prototipo per creare oggetti. Definisce gli attributi e i metodi comuni che gli oggetti di quella classe avranno.
2. **Oggetto:** Un oggetto è un'istanza di una classe. Può contenere dati nello stato degli attributi e può eseguire operazioni attraverso i metodi.
3. **Attributi:** Gli attributi sono le variabili di stato di un oggetto. Rappresentano le caratteristiche dell'oggetto e contengono i dati.
4. **Metodi:** I metodi sono le funzioni associate a una classe. Rappresentano i comportamenti degli oggetti e possono accedere e manipolare gli attributi dell'oggetto.
5. **Incapsulamento:** L'incapsulamento è il concetto di nascondere l'implementazione interna di un oggetto e permettere l'accesso solo attraverso interfacce pubbliche (metodi). Ciò protegge gli attributi da accessi e modifiche non autorizzati.
6. **Ereditarietà:** L'ereditarietà consente una classe (chiamata classe figlia) di ereditare attributi e metodi da un'altra classe (chiamata classe genitore o classe base). Questo favorisce il riutilizzo del codice e la creazione di gerarchie di classi.
7. **Polimorfismo:** Il polimorfismo consente agli oggetti di classi diverse di essere trattati come oggetti di una classe comune attraverso l'uso di interfacce e classi astratte. Questo favorisce la flessibilità e la modularità del codice.

## In Rust, il paradigma OOP
Nella programmazione orientata agli oggetti (OOP) di Rust, le **strutture** (che abbiamo visto nel [capitolo 4.2](../Capitolo-04/strutture-e-enumerazioni#strutture-structs)) fungono da blocchi di costruzione fondamentali, rappresentando oggetti con dati. I **metodi** (che abbiamo visto nel [capitolo 4.2](../Capitolo-04/strutture-e-enumerazioni#i-metodi)) associati alle strutture definiscono il comportamento specifico di queste istanze.  
Qui entra in gioco il cuore della OOP di Rust: i **traits** (prossimo capitolo). Questi servono come interfacce, definendo comportamenti comuni che le strutture possono condividere. Attraverso i traits, le strutture possono aderire a comportamenti specifici, consentendo la polimorficità. L'uso di `&dyn Trait` rende possibile il polimorfismo, consentendo al codice di lavorare con diverse implementazioni di un trait. Questa sinergia tra strutture, metodi e traits consente la creazione di codice OOP modulare, flessibile e riutilizzabile in Rust.

:::info
La principale differenza nella programmazione orientata agli oggetti (OOP) in Rust risiede nell'approccio alla sicurezza e al controllo. Mentre Python e Java favoriscono l'ereditarietà di classi, Rust si basa su strutture (structs) e traits. Questi ultimi permettono una composizione flessibile di comportamenti, promuovendo il polimorfismo e la modularità senza i rischi tipici dell'ereditarietà. Inoltre, Rust offre un sistema di proprietà e di gestione della memoria senza garbage collection, garantendo la sicurezza nel controllo delle referenze e prevenendo errori comuni come gli accessi nulli o le race condition, caratteristiche fondamentali per sistemi robusti e sicuri.
:::