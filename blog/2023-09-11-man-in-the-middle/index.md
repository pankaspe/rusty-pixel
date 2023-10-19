---
title: L'attacco Man in the Middle
description: Un'ombra nel mondo digitale che minaccia le tue comunicazioni. Scopri come proteggerti da questa inquietante minaccia informatica.
tags: [reti-protette, reti, vulnerabilità]
image: ./img/social-card.png
---

![Attacco Man in the Middle](./img/social-card.png)

# L'invisibile minaccia della rete
**L'Attacco Man in the Middle**  
Il mondo digitale, sebbene affascinante, nasconde minacce oscure dietro ogni angolo. Una di queste minacce è l'attacco *Man in the Middle* (**MitM**), un'entità spettrale pronta a insinuarsi tra noi e le nostre comunicazioni online (ovvero tutte al giorno d'oggi). 
<!--truncate-->
Immaginatevi un oscuro agente segreto, silenzioso e invisibile, in grado di osservare e manipolare i vostri messaggi mentre viaggiano attraverso la rete.

## Cosa è L'attacco Man in the Middle?
L'attacco MitM è una tattica subdola in cui un intruso si posiziona **tra la comunicazione** di due parti (da qui il nome *Man in the Middle*), intercettando e spesso alterando il flusso di dati tra loro. Questo "uomo nel mezzo" sfrutta la nostra fiducia nelle reti digitali, rubando segreti, dati sensibili e, in alcuni casi, persino l'identità stessa.

## Le Vulnerabilità sfruttate
Gli attacchi **MitM** su reti Wi-Fi e reti cellulari (2G, 3G, 4G, 5G) sfruttano diverse vulnerabilità per intercettare o manipolare il traffico dati:

### Su reti Wi-Fi
1. **Wi-Fi non protetto:** Reti Wi-Fi aperte o non protette consentono agli attaccanti di intercettare il traffico facilmente.
2. **Rouge Wi-Fi:** Gli attaccanti possono creare hotspot Wi-Fi falsi per attirare utenti e intercettare dati.
3. **WEP e WPA obsoleti:** Protocolli di sicurezza Wi-Fi obsoleti come WEP o WPA possono essere facilmente compromessi.

### Su reti cellulari (4G, 5G)
1. **Interferenze radio:** Su reti cellulari, gli attacchi MitM possono essere compiuti con attrezzature specializzate che interferiscono con i segnali radio.
2. **Falsa torre cellulare:** Gli attaccanti possono creare una falsa torre cellulare (stingray) per intercettare il traffico dati dei dispositivi nelle vicinanze.
3. **Aggancio alla rete:** Gli attaccanti possono sfruttare la vulnerabilità dell'aggancio alla rete, convincendo i dispositivi a connettersi a una falsa torre cellulare invece della rete ufficiale.

Quel che rende l'attacco **MitM** tanto tragico è il suo potenziale di distruzione. In entrambi i casi di rete, il malintenzionato può eseguire attacchi di intercettazione, dirottamento di sessioni, inserimento di malware e iniezione di dati dannosi sfruttando queste vulnerabilità. Proteggersi richiede l'uso di connessioni crittografate, l'attenzione alle impostazioni di sicurezza Wi-Fi e l'evitare reti non sicure.

## SMS vs WhatsApp
Gli **SMS** (Short Message Service) sono vulnerabili agli attacchi Man-in-the-Middle (MitM) a causa del modo in cui vengono trasmessi attraverso la rete cellulare e del loro basso livello di sicurezza.

:::info
Quando invii un SMS, il messaggio viaggia attraverso la rete cellulare fino a raggiungere la torre cellulare (cella) del tuo provider di servizi. Il messaggio viene quindi inoltrato al destinatario attraverso la sua torre cellulare. Questo processo avviene senza crittografia, il che significa che i messaggi SMS sono trasmessi in chiaro e possono essere intercettati durante il viaggio tra le torri cellulari.

Le celle dei provider di servizi telefonici sono dispositivi che gestiscono le comunicazioni wireless nella rete cellulare. Gli attacchi MitM sugli SMS possono essere eseguiti se un attaccante riesce ad intercettare il segnale tra il tuo dispositivo e la torre cellulare. Questo può avvenire in situazioni in cui il segnale è debole o quando si utilizzano dispositivi specializzati come IMSI-catcher (conosciuti anche come "stingrays") che possono intercettare e imitare le torri cellulari legittime.
:::

**WhatsApp**, d'altra parte, utilizza la crittografia **end-to-end** (E2E) per proteggere i messaggi degli utenti. Con la crittografia **E2E**, i messaggi vengono cifrati sul dispositivo del mittente e decifrati solo sul dispositivo del destinatario. Questo significa che anche se qualcuno intercettasse i dati durante il trasferimento, non riuscirebbe a decifrare il messaggio senza la chiave crittografica, che è disponibile solo sui dispositivi degli utenti autorizzati.

:::info
La crittografia end-to-end (E2E) è un sistema di sicurezza informatica che protegge le comunicazioni online. Quando invii un messaggio, viene cifrato sul tuo dispositivo e solo il destinatario può decifrarlo. Questo processo garantisce che solo il mittente e il destinatario possano leggere il messaggio, anche se viene intercettato durante la trasmissione.

Le chiavi pubbliche e private sono la base della crittografia E2E.  
Immagina che la chiave pubblica sia come una cassetta delle lettere: chiunque può lasciarti un messaggio, ma solo tu con la tua chiave privata (simile a una chiave segreta della cassetta delle lettere) puoi aprirlo. Quando qualcuno vuole inviarti un messaggio, utilizza la tua chiave pubblica per cifrarlo. Solo tu, con la tua chiave privata, puoi decifrarlo. Lo stesso accade quando invii un messaggio a qualcun altro: usi la loro chiave pubblica per cifrare il messaggio, che solo loro possono decifrare con la loro chiave privata. Questo sistema garantisce che solo tu e il destinatario possiate leggere i messaggi, proteggendo la privacy delle conversazioni online.
:::

Tuttavia, è importante notare che la crittografia E2E di WhatsApp protegge i messaggi durante il trasferimento e sul server di WhatsApp, ma **non può proteggere** il messaggio sul dispositivo del destinatario se qualcuno ha accesso fisico al dispositivo. Se un attaccante ha accesso al dispositivo di un utente WhatsApp sbloccato, potrebbe leggere i messaggi.

## Angolo nerd Rust
:::tip
Ohi **ruster** vi avviso, questo codice potrebbe risultare complesso, ma amen, voi siete dei terminator del codice.  
Per **crittografare** e **decrittografare** (sottolineo) un messaggio in modo sicuro in Rust, puoi utilizzare la libreria `rust-crypto` con la modalità di crittografia CBC (Cipher Block Chaining) e l'algoritmo AES (Advanced Encryption Standard).

```rust
extern crate crypto;

use crypto::aes::{self, KeySize};
use crypto::blockmodes::PkcsPadding;
use crypto::buffer::{BufferResult, ReadBuffer, WriteBuffer};
use crypto::symmetriccipher::BlockEncryptor;

fn main() {
    // Chiave segreta condivisa tra mittente e destinatario (deve essere mantenuta segreta!)
    let secret_key = b"my_secret_key123456"; // Chiave di 16, 24 o 32 byte per AES-128, AES-192 o AES-256

    // Inizializzazione del vettore di inizializzazione (IV)
    let iv: [u8; 16] = [0; 16]; // IV di 16 byte per AES

    // Messaggio da cifrare
    let plaintext_message = b"Ciao socio! Hai visto che figata l'ultima frontiera del po**o?!";

    // Cifra il messaggio con AES utilizzando la modalità CBC e PKCS7 Padding
    let mut encryptor = aes::cbc_encryptor(KeySize::KeySize128, secret_key, &iv, PkcsPadding);
    let mut buffer = [0; 4096];
    let mut read_buffer = crypto::buffer::RefReadBuffer::new(plaintext_message);
    let mut write_buffer = crypto::buffer::RefWriteBuffer::new(&mut buffer);

    encryptor.encrypt(&mut read_buffer, &mut write_buffer, true).unwrap();
    let ciphertext = write_buffer.take_read_buffer().take_remaining().to_vec();

    // Stampa il messaggio cifrato
    println!("Messaggio cifrato: {:?}", ciphertext);

    // Decifra il messaggio utilizzando la stessa chiave segreta e lo stesso IV
    let mut decryptor = aes::cbc_decryptor(KeySize::KeySize128, secret_key, &iv, PkcsPadding);
    let mut buffer = [0; 4096];
    let mut read_buffer = crypto::buffer::RefReadBuffer::new(&ciphertext);
    let mut write_buffer = crypto::buffer::RefWriteBuffer::new(&mut buffer);

    decryptor.decrypt(&mut read_buffer, &mut write_buffer, true).unwrap();
    let decrypted_text = write_buffer.take_read_buffer().take_remaining().to_vec();

    // Stampa il messaggio decifrato
    println!("Messaggio decifrato: {:?}", String::from_utf8(decrypted_text).unwrap());
}
```

Nota che la chiave segreta (`secret_key`) e l'IV (`iv`) devono essere gestiti in modo sicuro e condivisi solo tra mittente e destinatario. La crittografia AES con modalità CBC e PKCS7 Padding offre un buon livello di sicurezza per la crittografia end-to-end. Assicurati sempre di utilizzare chiavi lunghe e complesse per aumentare la sicurezza del sistema.
:::