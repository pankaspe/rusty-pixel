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

## Ma come fa l'attaccante a intercettare la comunicazione?
Veniamo al cuore della questione, questa è l'arte dell'ingegneria informatica.  
Prendiamo la casistica più comune, che riguarda l'intercettazione di comunicazione su reti wi fi pubbliche.
Di solito vengono applicate diverse tecniche come *sniffing del traffico*, *DNS spoofing*, *session hijacking*, *SSL Stripping*, etc... ma prendiamo la più semplice

### Sniffing del traffico
:::caution
Le informazioni fornite sono **solo per apprendimento**. L'abuso di tecniche di *sniffing di rete* è irresponsabile e illegale. Rusty-Pixel non si assume alcuna responsabilità per l'uso improprio da parte di terzi. La sicurezza è cruciale; utilizza queste conoscenze in modo etico e legale!
:::

Lo sniffing del traffico è il processo di intercettazione e registrazione dei pacchetti di dati che passano attraverso una rete. Gli attaccanti possono utilizzare software o hardware specializzati chiamati "sniffers" per condurre questo tipo di attività. Ecco come avviene lo sniffing del traffico:

1. **Promiscuous Mode:** La scheda di rete del dispositivo dell'attaccante viene impostata in modalità "promiscua". In questa modalità, la scheda di rete può captare tutti i pacchetti che passano attraverso la rete, non solo i pacchetti destinati al dispositivo dell'attaccante. Normalmente, le schede di rete sono configurate per ricevere solo i pacchetti diretti al proprio indirizzo MAC.
2. **Cattura dei pacchetti:** Il dispositivo dell'attaccante cattura i pacchetti di dati che viaggiano sulla rete. Questi pacchetti possono includere dati sensibili come informazioni di login, password, cookie di sessione e altre informazioni personali.

3. **Analisi del traffico:** I pacchetti catturati vengono analizzati dall'attaccante per individuare informazioni sensibili. Gli sniffers possono essere configurati per filtrare pacchetti specifici o per cercare modelli di dati specifici all'interno dei pacchetti.

4. **Utilizzo di software sniffer:** Gli attaccanti possono utilizzare software sniffers come Wireshark, tcpdump, o ettercap per catturare e analizzare i pacchetti di rete. Questi software forniscono un'interfaccia utente che consente agli attaccanti di visualizzare e interpretare facilmente i dati catturati.

5. **Sfruttamento di vulnerabilità di rete:** In alcune situazioni, gli attaccanti possono sfruttare vulnerabilità nelle configurazioni di rete o nei protocolli di comunicazione per catturare il traffico. Ad esempio, possono eseguire un attacco ARP poisoning per indirizzare il traffico attraverso il loro dispositivo prima che raggiunga il suo destino legittimo.

È importante notare che lo **sniffing del traffico è illegale** senza il consenso esplicito delle parti coinvolte. Gli sniffers sono strumenti potenti che possono essere utilizzati per scopi legittimi, come il debugging di reti o l'analisi del traffico, ma possono anche essere usati per attività malevole come il furto di dati personali e finanziari.

In generale, è fondamentale evitare l'uso di reti Wi-Fi pubbliche non protette per attività sensibili e utilizzare una connessione **VPN** (Virtual Private Network) quando si è costretti a utilizzare reti Wi-Fi pubbliche. Una VPN crittografa il tuo traffico Internet, proteggendo le tue informazioni sensibili dall'intercettazione da parte di terze parti.

## Come ci si protegge da questi MitM?
Proteggersi dagli attacchi Man-in-the-Middle (MitM) richiede l'adozione di buone pratiche di sicurezza e l'utilizzo di strumenti e tecniche di protezione. Ecco alcune strategie per proteggersi da questi tipi di attacchi:

1. **Utilizzare una connessione sicura:** Evita di utilizzare reti Wi-Fi pubbliche o non protette per attività sensibili. Preferisci reti sicure, come una connessione VPN (Virtual Private Network) per crittografare il tuo traffico e proteggerti da intercettazioni.
2. **Verificare la connessione HTTPS:** Quando visiti siti web, assicurati che la connessione sia sicura e crittografata utilizzando HTTPS. La presenza di un lucchetto verde accanto all'URL nel browser indica una connessione sicura.
3. **Evitare siti web non sicuri:** Evita di visitare siti web non sicuri o sospetti. I siti web che non utilizzano HTTPS o che presentano avvisi di sicurezza dovrebbero essere trattati con cautela.
4. **Attenzione agli avvisi del browser:** Presta attenzione agli avvisi del tuo browser riguardo a certificati SSL/TLS non validi o siti web sospetti. Non ignorare mai questi avvisi.
5. **Aggiornare i dispositivi e le applicazioni:** Mantieni **sempre** aggiornati i tuoi dispositivi e le applicazioni. Gli aggiornamenti spesso includono patch per vulnerabilità di sicurezza note.
6. **Utilizzare DNS sicuri:** Configura i tuoi dispositivi per utilizzare server DNS affidabili e sicuri. Alcuni servizi DNS offrono protezione contro attacchi MitM.
7. **Evitare clic su link sospetti:** Non cliccare su link sospetti o inviati da fonti non affidabili. Gli attaccanti potrebbero inviare link malevoli per dirottare il tuo traffico.
8. **Utilizzare tecnologie di validazione:** Implementa tecniche di validazione come HSTS (HTTP Strict Transport Security) che forza una connessione HTTPS al sito web, proteggendo da attacchi di downgrading.
9. **Educare gli utenti:** Se sei un amministratore di rete, educa gli utenti sulla sicurezza informatica e sulle minacce MitM. Insegnali a riconoscere i segnali di un attacco e a proteggere le proprie informazioni.
10. **Firewall e sicurezza di Rete:** Configura un firewall robusto e utilizza soluzioni di sicurezza di rete che possono identificare e bloccare attività sospette.
11. **Utilizzare protocoli sicuri di autenticazione:** Quando possibile, utilizza protocolli di autenticazione sicuri come Multi-Fattore (ad esempio, autenticazione a due fattori) per rendere più difficile agli attaccanti l'accesso non autorizzato.
12. **Crittografa le comunicazioni:** Crittografa le comunicazioni sensibili, come le e-mail e i messaggi istantanei, utilizzando protocolli sicuri come PGP (Pretty Good Privacy) o **end-to-end** encryption nei servizi di messaggistica.

Implementando queste pratiche e rimanendo vigili, puoi ridurre significativamente il rischio di essere vittima di attacchi Man-in-the-Middle.

## SMS vs WhatsApp, la differenza
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