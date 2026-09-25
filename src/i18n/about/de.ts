import type { AboutContent } from './types';
import { SITE_NAME } from '../seo/helpers';

/**
 * The editorial-policy page, in de. Long-form prose rather than chrome, so it
 * lives here and not in the `ui` dictionary — burying six hundred words of
 * policy among ninety UI labels would make both harder to find.
 */
export const de = (termCount: number, countryCount: number): AboutContent => ({
    h1: 'Woher unsere Definitionen kommen',
    lead: `${SITE_NAME} hat in der deutschen Ausgabe derzeit ${termCount} Einträge aus ${countryCount} ${countryCount === 1 ? 'Land' : 'Ländern'}. Diese Seite erklärt, wie sie geschrieben werden, was wir tun, wenn die Faktenlage unklar ist, und wo das Wörterbuch nach unserer eigenen Einschätzung schwach ist. Wer nur eine Seite liest, bevor er dem Rest traut, sollte diese lesen.`,
    sections: [
      {
        heading: 'Was in jedem Eintrag stehen muss',
        paragraphs: [
          'Kein Eintrag erscheint ohne mindestens eine Bedeutung und mindestens einen ausgearbeiteten Beispielsatz mit natürlicher Übersetzung. Das erzwingt der Build: Fehlt eines von beidem, scheitert die Validierung und die Seite baut nicht. Das ist absichtlich ein grobes Werkzeug, und es existiert, weil ein großes Slangwörterbuch typischerweise daran scheitert, Hunderte dünner, aufgeblähter Einträge anzuhäufen, die einzeln formal etwas sagen und zusammen nichts.',
          'Über dieses Minimum hinaus enthält ein Eintrag das, was tatsächlich über ihn bekannt ist. Manche haben ausführliche Etymologien, manche gar keine, weil sich keine zuverlässig belegen lässt. Uns ist ein sichtbar kürzerer Eintrag lieber, als ihn aufzufüllen, damit er so lang aussieht wie seine Nachbarn.',
        ],
      },
      {
        heading: 'Register und Gebrauchshinweise',
        paragraphs: [
          'Jeder Begriff trägt eine Registerangabe – informell, umgangssprachlich, vulgär, tabu, veraltet oder regional – und manche zusätzlich einen ausdrücklichen Gebrauchshinweis. Das sind die nützlichsten und zugleich die subjektivsten Felder der Seite. Ein Wort wie cabrón ist unter Freunden eine liebevolle Begrüßung und von einem Fremden eine ernste Beleidigung; das fängt kein einzelnes Etikett ein, und deshalb sagt der Eintrag es in den Bedeutungen, statt so zu tun, als reiche das Etikett.',
          'Beleidigende und herabwürdigende Wörter lassen wir nicht weg, sondern führen sie mit dem passenden Hinweis auf. Ein Wörterbuch, das ausgerechnet die Wörter auslässt, die man am dringendsten erklärt bekommen muss, schützt niemanden.',
        ],
      },
      {
        heading: 'Umstrittene und erfundene Etymologien',
        paragraphs: [
          'Slang zieht Volksetymologie stärker an als jeder andere Teil einer Sprache, und die guten Geschichten reisen schneller als die wahren. Mehrere Herkunftserklärungen, die im Netz mit großer Sicherheit weitergereicht werden, sind schlicht nicht überprüfbar: das mexikanische chamba, angeblich aus „Chamber of Commerce“, das australische chunder aus einem Ruf an Deck, die erfundenen Abkürzungsgeschichten rund um naff.',
          'Wenn wir so eine Geschichte aufnehmen, schreiben wir klar dazu, dass sie unbelegt ist, und wir schreiben, warum sie trotzdem erwähnenswert ist – meist, weil sie so verbreitet ist, dass Weglassen mehr verwirren würde als Erklären. Wo die Herkunft unter Fachleuten wirklich strittig ist, sagt der Eintrag, dass die Frage offen ist, statt sich für die gefälligste Antwort zu entscheiden.',
        ],
      },
      {
        heading: 'Woher Slang kommt',
        paragraphs: [
          'Ein großer Teil dessen, was als allgemein „amerikanischer“ Slang zirkuliert, stammt aus dem African American Vernacular English; ein großer Teil des heutigen britischen Jugendslangs kommt aus dem Multicultural London English und davor aus dem jamaikanischen Patois; sehr viel französischer Slang kam über die Banlieues aus dem Arabischen. Diese Wege stehen in den Einträgen, weil die Geschichte eines Wortes oft das Interessanteste an ihm ist – und weil es zählt, sie den richtigen Leuten zuzuschreiben.',
        ],
      },
      {
        heading: 'Wie die Seite aufgebaut ist',
        paragraphs: [
          'Zuerst das Land, dann das Thema, dann der Begriff: /de/mexican-slang/people/guey/. Diese Reihenfolge ist nicht willkürlich. Slang gehört zu einem Ort, bevor er zu einer Sprache gehört – das mexikanische und das europäische Spanisch teilen sich eine Grammatik und fast nichts von ihrem informellen Wortschatz –, und deshalb ist das Land die Ordnung, an der alles andere hängt.',
          'Ein Begriff, der unter mehreren Themen einsortiert ist, hat trotzdem genau eine Adresse, gebildet aus dem ersten davon. Er erscheint auch auf den anderen Themenseiten, aber die verlinken auf seine eine kanonische URL, statt eine zweite Kopie auszuliefern.',
        ],
      },
      {
        heading: 'Sprachen',
        paragraphs: [
          'Die englische Ausgabe liegt in der Wurzel der Seite; jede andere liegt unter ihrem eigenen Präfix – /es/, /pt/, /fr/, /de/, /it/, /ru/, /ja/, /ko/. Eine Seite erscheint in einer Sprache nur dann, wenn ihr Inhalt tatsächlich in dieser Sprache geschrieben wurde: Es gibt keinen maschinellen Rückfall aufs Englische, und keine Seite wird mit denselben Wörtern über mehrere Sprachen hinweg dupliziert. Wo es eine Seite in mehreren Sprachen gibt, verweisen sie per hreflang aufeinander, damit Suchmaschinen die richtige ausliefern können.',
          'Übersetzt wird die Erklärung, nie der Slang selbst. Ein japanischer Eintrag behält in jeder Ausgabe seinen japanischen Begriff, seine Umschrift und seine japanischen Beispielsätze; was sich ändert, ist die Sprache, in der die Bedeutungen, die Gebrauchshinweise und die Etymologie geschrieben sind. Für jede weitere Sprache gilt dieselbe Regel: erst der übersetzte Inhalt, dann die Seiten.',
        ],
      },
      {
        heading: 'Worin dieses Wörterbuch derzeit schlecht ist',
        bullets: [
          {
            lead: 'Die Abdeckung ist ungleichmäßig.',
            rest: 'Sechzehn Länder und acht Sprachen sind ein Anfang, keine Bestandsaufnahme. Große Slangtraditionen – brasilianisches Portugiesisch, nigerianisches Pidgin, indisches Englisch, Arabisch – fehlen schlicht.',
          },
          {
            lead: 'Die regionale Tiefe ist gering.',
            rest: 'Begriffe bekommen eine grobe Regionsangabe, wo wir uns sicher sind, und keine, wo wir es nicht sind. Ein Wort, das als „Allgemein“ markiert ist, kann durchaus regional sein, auf eine Art, die wir nicht erfasst haben.',
          },
          {
            lead: 'Slang läuft ab.',
            rest: 'Manche Einträge hier werden in ein paar Jahren veraltet klingen. Wo ein Begriff schon im Abgang ist, markieren wir ihn als veraltet, aber wir werden das nicht immer rechtzeitig merken.',
          },
          {
            lead: 'Kein Ton.',
            rest: 'Die Aussprache steht als IPA und als einfache Lautschrift da. Für Begriffe, die von Ton und Satzmelodie leben – ein guter Teil der italienischen und mexikanischen Einträge –, reicht das ehrlich gesagt nicht.',
          },
        ],
      },
      {
        heading: 'Korrekturen',
        paragraphs: [
          'Wenn ein Eintrag falsch ist, veraltet ist oder daran vorbeigeht, wie ein Wort dort, wo du lebst, wirklich benutzt wird, dann ist das wissenswert. Korrekturen von Muttersprachlern sind der wertvollste Beitrag, den ein Wörterbuch wie dieses bekommen kann, und die Felder mit der größten Fehlerwahrscheinlichkeit sind Register und Region – genau die, die am schwersten zu recherchieren und für Sprecher am leichtesten zu erkennen sind.',
        ],
      },
    ],
  });
