---
sidebar_position: 4
---
# 6.4 Tipi Generici
I tipi generici sono uno strumento potente in Rust che consente di scrivere codice flessibile e riutilizzabile. Essi consentono di creare funzioni, strutture e metodi che lavorano con diversi tipi di dati senza sacrificare la sicurezza o la velocità del codice.

### Sintassi dei Tipi Generici
Nella definizione di funzioni o strutture, è possibile utilizzare lettere maiuscole come `T` o `U` per rappresentare tipi generici. Ad esempio, `fn esempio<T>(arg: T) { /* ... */ }` definisce una funzione generica che accetta un argomento di tipo `T`.

### Uso dei Tipi Generici
I tipi generici consentono di scrivere funzioni che possono lavorare con vari tipi di dati senza duplicare il codice. Ad esempio, una funzione di ordinamento potrebbe essere scritta in modo generico per ordinare sia interi che stringhe.

```rust
fn ordina<T>(lista: &mut [T])
where
    T: std::cmp::Ord,
{
    lista.sort();
}

fn main() {
    let mut numeri = vec![4, 2, 7, 1];
    ordina(&mut numeri);
    
    let mut parole = vec!["mela", "banana", "arancia"];
    ordina(&mut parole);
}
```

:::info
Nel contesto di Rust, `<T>` è una notazione che indica l'uso di un **tipo generico**. La lettera `T` rappresenta un **parametro di tipo**, che può essere sostituito con qualsiasi tipo di dati quando si utilizza una funzione, una struttura o un metodo generico. Il parametro di tipo `T` è come una variabile che rappresenta un tipo di dati generico e non specifico.

Quando si scrive un codice con `<T>`, si indica che quella specifica parte del codice è generica e può lavorare con qualsiasi tipo di dati. Questo permette di scrivere funzioni, strutture o metodi che sono flessibili e possono essere utilizzati con diversi tipi di dati, rendendo il codice più modulare e riutilizzabile.
:::

:::info
In Rust, `T: std::cmp::Ord` è un **vincolo di tipo** che indica che il tipo generico `T` deve implementare il trait `Ord` dal modulo standard (`std::cmp::Ord`). Un trait in Rust è simile a un'interfaccia in altri linguaggi di programmazione. Indicare `T: std::cmp::Ord` significa che la funzione o la struttura in cui appare questo vincolo richiede che il tipo `T` debba poter essere ordinato, ovvero deve avere una definizione di ordine tra i suoi valori.

Il trait `Ord` definisce l'ordine totale sugli oggetti di un tipo. Un tipo che implementa `Ord` può essere ordinato rispetto ad altri oggetti di quello stesso tipo.
:::

## Vincoli sui Tipi Generici
Nel contesto dei generics in Rust, `where` è una keyword utilizzata per specificare i **vincoli di tipo**. I vincoli di tipo definiscono le caratteristiche che un tipo generico (`T` in questo caso) deve avere affinché possa essere utilizzato nella funzione o nella struttura generica.

Quindi, quando vedi un costrutto come `where T: std::cmp::Ord`, sta dicendo che il tipo `T` deve implementare il trait `Ord` dal modulo standard di Rust (`std::cmp::Ord`). Questo significa che gli oggetti di tipo `T` devono supportare l'ordinamento per essere usati all'interno della funzione o della struttura generica.

### Vantaggi dei Tipi Generici
L'uso di tipi generici porta a un codice più pulito, modulare e flessibile. Evita la duplicazione del codice, aumenta la sicurezza del tipo e rende il software più adattabile ai cambiamenti.

### Conclusioni
I tipi generici sono uno strumento fondamentale in Rust per scrivere codice flessibile ed efficiente. La loro versatilità e sicurezza ne fanno un aspetto cruciale della programmazione Rust, permettendo ai programmatori di scrivere algoritmi e strutture dati che possono essere utilizzati in una vasta gamma di scenari senza sacrificare l'integrità del tipo o la leggibilità del codice.