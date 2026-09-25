import type { AboutContent } from './types';
import { SITE_NAME } from '../seo/helpers';

/**
 * The editorial-policy page, in it. Long-form prose rather than chrome, so it
 * lives here and not in the `ui` dictionary — burying six hundred words of
 * policy among ninety UI labels would make both harder to find.
 */
export const it = (termCount: number, countryCount: number): AboutContent => ({
    h1: 'Come documentiamo le definizioni',
    lead: `${SITE_NAME} raccoglie al momento ${termCount} schede da ${countryCount} ${countryCount === 1 ? 'paese' : 'paesi'} nella sua edizione italiana. Questa pagina spiega come vengono scritte, che cosa facciamo quando i dati non sono chiari e dove sappiamo che il dizionario zoppica. Se prima di fidarti del resto leggi una sola pagina di questo sito, leggi questa.`,
    sections: [
      {
        heading: 'Che cosa deve contenere ogni scheda',
        paragraphs: [
          'Nessuna scheda viene pubblicata senza almeno un’accezione e almeno una frase di esempio costruita per intero, con la sua traduzione naturale. Lo impone la compilazione: una scheda a cui manchi una delle due non passa la validazione e il sito non si compila. È uno strumento volutamente rozzo, ed esiste perché il modo tipico in cui un grande dizionario di slang fallisce sono centinaia di schede smilze e gonfiate, che una per una dicono tecnicamente qualcosa e tutte insieme non dicono niente.',
          'Oltre quel minimo, ogni scheda porta ciò che di lei si sa davvero. Alcune hanno etimologie dettagliate; altre non ne hanno nessuna, perché nessuna è stabilita in modo affidabile. Preferiamo che una scheda risulti visibilmente più corta piuttosto che riempirla per pareggiarla con le vicine.',
        ],
      },
      {
        heading: 'Registro e avvisi d’uso',
        paragraphs: [
          'Ogni termine porta un’etichetta di registro — informale, colloquiale, volgare, tabù, datato o regionale — e alcuni portano in più un avviso d’uso esplicito. Sono i campi più utili e insieme i più soggettivi del sito. Una parola come cabrón è un saluto affettuoso tra amici e un insulto pesante in bocca a uno sconosciuto; nessuna etichetta singola riesce a dirlo, e allora la scheda lo spiega nelle accezioni invece di fingere che l’etichetta basti.',
          'Gli insulti discriminatori e i termini offensivi li includiamo invece di ometterli, con il loro avviso accanto. Un dizionario che lascia fuori proprio le parole che più hai bisogno di farti spiegare non sta proteggendo nessuno.',
        ],
      },
      {
        heading: 'Etimologie controverse e inventate',
        paragraphs: [
          'Lo slang attira l’etimologia popolare più di qualsiasi altra parte di una lingua, e le storie belle viaggiano più in fretta di quelle vere. Diverse origini ripetute in rete con grande sicurezza sono semplicemente inverificabili: il messicano chamba che verrebbe da “Chamber of Commerce”, l’australiano chunder da un grido lanciato in coperta, gli acronimi appiccicati a posteriori a naff.',
          'Quando includiamo una di queste, diciamo a chiare lettere che non è verificata, e diciamo perché vale comunque la pena di citarla: di solito perché è ripetuta così tanto che ometterla confonderebbe più che affrontarla. Quando l’origine è davvero contesa tra chi studia queste cose, la scheda dice che la questione resta aperta invece di scegliere la risposta più pulita.',
        ],
      },
      {
        heading: 'Da dove viene lo slang',
        paragraphs: [
          'Buona parte di ciò che circola come slang “americano” generico è nato nell’inglese vernacolare afroamericano; buona parte dello slang giovanile britannico di oggi viene dal Multicultural London English e, prima ancora, dal patois giamaicano; moltissimo slang francese è arrivato dall’arabo attraverso le banlieue. Queste rotte sono annotate nelle schede, perché la storia di una parola è spesso la cosa più interessante che ha e perché attribuirla conta.',
        ],
      },
      {
        heading: 'Com’è organizzato il sito',
        paragraphs: [
          'Prima il paese, poi il tema, poi il termine: /it/mexican-slang/people/guey/. Quell’ordine non è arbitrario. Lo slang appartiene a un luogo prima che a una lingua — lo spagnolo del Messico e quello di Spagna condividono la grammatica e quasi nulla del vocabolario informale — e quindi il paese è la tassonomia a cui si aggancia tutto il resto.',
          'Un termine archiviato sotto più temi ha comunque un solo indirizzo, costruito a partire dal primo di essi. Compare anche sulle altre pagine di tema, ma quelle pagine rimandano al suo unico URL canonico invece di servirne una seconda copia.',
        ],
      },
      {
        heading: 'Lingue',
        paragraphs: [
          'L’edizione inglese sta alla radice del sito; ogni altra edizione sta sotto il proprio prefisso: /es/, /pt/, /fr/, /de/, /it/, /ru/, /ja/, /ko/. Una pagina compare in una lingua solo quando il suo contenuto è stato scritto davvero in quella lingua: non esiste ripiego automatico e nessuna pagina viene duplicata tra lingue con le stesse parole dentro. Dove una pagina esiste in più lingue, ciascuna rimanda alle altre con hreflang, così i motori di ricerca possono servire quella giusta.',
          'Ciò che si traduce è la spiegazione, mai lo slang. Una scheda giapponese conserva in ogni edizione il suo termine giapponese, la sua romanizzazione e le sue frasi di esempio in giapponese; quello che cambia è la lingua in cui sono scritte le accezioni, le note d’uso e l’etimologia. Ogni lingua successiva seguirà la stessa regola: prima il contenuto tradotto, poi le pagine.',
        ],
      },
      {
        heading: 'In che cosa questo dizionario è ancora debole',
        bullets: [
          {
            lead: 'La copertura è disomogenea.',
            rest: 'Sedici paesi e otto lingue sono un inizio, non un panorama. Tradizioni di slang enormi — il portoghese del Brasile, il pidgin nigeriano, l’inglese d’India, l’arabo — semplicemente non ci sono.',
          },
          {
            lead: 'La profondità regionale è scarsa.',
            rest: 'I termini vengono etichettati con una regione ampia quando ne siamo sicuri, e lasciati senza etichetta quando non lo siamo. Una parola segnata come “Generale” può benissimo essere regionale in modi che non abbiamo colto.',
          },
          {
            lead: 'Lo slang scade.',
            rest: 'Alcune schede di qui suoneranno datate nel giro di pochi anni. Quando un termine è già in uscita lo segnaliamo come datato, ma non sempre ce ne accorgeremo in tempo.',
          },
          {
            lead: 'Non c’è audio.',
            rest: 'La pronuncia è data in IPA e in una trascrizione semplificata. Per i termini che dipendono dal tono e dall’intonazione — buona parte delle schede italiane e messicane — non basta, francamente.',
          },
        ],
      },
      {
        heading: 'Correzioni',
        paragraphs: [
          'Se una scheda è sbagliata, è invecchiata o non coglie come una parola si usa davvero dove vivi tu, vale la pena saperlo. Le correzioni dei madrelingua sono il contributo più prezioso che un dizionario come questo possa ricevere, e i campi che hanno più probabilità di essere sbagliati sono il registro e la regione: esattamente i più difficili da documentare e i più facili da notare per chi parla la lingua.',
        ],
      },
    ],
  });
