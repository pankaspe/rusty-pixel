---
sidebar_position: 3
---
# 6.3 Polimorfismo
Il polimorfismo è un concetto cruciale nella programmazione orientata agli oggetti, consentendo a oggetti di tipi diversi di essere trattati in modo uniforme. In Rust, il polimorfismo è raggiunto attraverso l'uso dei traits.

Immagina un ambiente di lavoro dove persone con diverse competenze possono assumere ruoli diversi in base alle esigenze del progetto. Questo concetto si avvicina al polimorfismo nella vita quotidiana. Nel nostro mondo, le persone possono essere polimorfe, adattandosi a svariate situazioni e compiti. Una persona potrebbe essere un insegnante di giorno, un cuoco appassionato di sera e un volontario in un rifugio per animali nel fine settimana. Questa versatilità è simile al polimorfismo, dove oggetti di diverse classi possono essere trattati in modo uniforme, a seconda del contesto.

Prendiamo l'esempio dei mezzi di trasporto. Una strada può essere percorribile da varie tipologie di veicoli, come auto, biciclette o autobus. Non importa il tipo di veicolo, tutti devono aderire alle stesse regole della strada. In questo caso, la strada rappresenta un'interfaccia comune (come un trait in programmazione), consentendo a diversi veicoli di comportarsi in modo omogeneo pur avendo implementazioni specifiche diverse. Questo concetto di adattabilità e uniformità, così comune nella vita quotidiana, è essenziale per comprendere il polimorfismo nella programmazione, che offre una simile flessibilità consentendo ad oggetti di comportarsi in modi diversi, pur rispondendo a un'interfaccia comune.

## Traits e Polimorfismo
I traits definiscono comportamenti comuni che le strutture possono condividere. Utilizzando `&dyn Trait`, è possibile creare referenze polimorfiche a oggetti che aderiscono a uno specifico trait. Questo significa che diverse implementazioni dello stesso trait possono essere trattate allo stesso modo nel codice.

## Implementazione pratica del Polimorfismo
Consideriamo un esempio di trait `Forma`:

```rust
trait Forma {
    fn area(&self) -> f64;
}

struct Cerchio {
    raggio: f64,
}

impl Forma for Cerchio {
    fn area(&self) -> f64 {
        3.14159265359 * self.raggio * self.raggio
    }
}

struct Rettangolo {
    lunghezza: f64,
    larghezza: f64,
}

impl Forma for Rettangolo {
    fn area(&self) -> f64 {
        self.lunghezza * self.larghezza
    }
}

fn calcola_area(forma: &dyn Forma) -> f64 {
    forma.area()
}

fn main() {
    let cerchio = Cerchio { raggio: 5.0 };
    let rettangolo = Rettangolo { lunghezza: 4.0, larghezza: 6.0 };

    println!("Area del cerchio: {}", calcola_area(&cerchio)); // Stampa: "Area del cerchio: 78.54"
    println!("Area del rettangolo: {}", calcola_area(&rettangolo)); // Stampa: "Area del rettangolo: 24"
}
```

In questo esempio, `Cerchio` e `Rettangolo` implementano il trait `Forma`. La funzione `calcola_area` accetta un riferimento polimorfico a un oggetto che aderisce a `Forma`, permettendo di calcolare l'area di oggetti di tipi diversi in modo uniforme.

## Conclusione
Il polimorfismo in Rust offre un modo potente ed elegante per scrivere codice flessibile e riutilizzabile. Utilizzando i traits, è possibile implementare polimorfismo in modo sicuro e intuitivo, consentendo la gestione uniforme di diversi tipi di oggetti nel tuo programma.