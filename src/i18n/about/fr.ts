import type { AboutContent } from './types';
import { SITE_NAME } from '../seo/helpers';

/**
 * The editorial-policy page, in fr. Long-form prose rather than chrome, so it
 * lives here and not in the `ui` dictionary — burying six hundred words of
 * policy among ninety UI labels would make both harder to find.
 */
export const fr = (termCount: number, countryCount: number): AboutContent => ({
    h1: 'Comment nous établissons les définitions',
    lead: `${SITE_NAME} compte pour l’instant ${termCount} fiches venues de ${countryCount} pays dans son édition française. Cette page explique comment elles sont écrites, ce que nous faisons quand les faits sont flous, et où nous savons que le dictionnaire est faible. Si vous ne lisez qu’une page de ce site avant de faire confiance au reste, lisez celle-ci.`,
    sections: [
      {
        heading: 'Ce que doit contenir chaque fiche',
        paragraphs: [
          'Aucune fiche n’est publiée sans au moins un sens et au moins une phrase d’exemple travaillée, avec sa traduction naturelle. C’est la compilation qui l’impose : une fiche à laquelle il manque l’un ou l’autre échoue à la validation et le site ne se construit pas. L’instrument est volontairement grossier, et il existe parce qu’un grand dictionnaire d’argot rate toujours de la même façon : des centaines de fiches maigres et rembourrées qui, chacune, disent techniquement quelque chose et, ensemble, ne disent rien.',
          'Au-delà de ce minimum, chaque fiche porte ce que l’on sait réellement d’elle. Certaines ont des étymologies détaillées ; d’autres n’en ont aucune, parce qu’aucune n’est solidement établie. Nous préférons une fiche visiblement plus courte à une fiche gonflée pour ressembler à ses voisines.',
        ],
      },
      {
        heading: 'Registre et avertissements d’usage',
        paragraphs: [
          'Chaque terme porte une étiquette de registre — familier, courant familier, vulgaire, tabou, vieilli ou régional — et certains portent en plus un avertissement d’usage explicite. Ce sont les champs les plus utiles du site, et aussi les plus subjectifs. Un mot comme cabrón est un bonjour affectueux entre amis et une grave insulte dans la bouche d’un inconnu ; aucune étiquette seule ne rend cela, alors la fiche le dit dans les sens plutôt que de faire comme si l’étiquette suffisait.',
          'Nous référençons les insultes discriminatoires et les termes offensants au lieu de les écarter, avec leur avertissement à côté. Un dictionnaire qui laisse dehors précisément les mots que vous avez le plus besoin de vous faire expliquer ne protège personne.',
        ],
      },
      {
        heading: 'Étymologies contestées et inventées',
        paragraphs: [
          'L’argot attire l’étymologie populaire plus que toute autre partie d’une langue, et les bonnes histoires voyagent plus vite que les vraies. Plusieurs origines répétées avec beaucoup d’assurance sur le web sont tout simplement invérifiables : le chamba mexicain qui viendrait de « Chamber of Commerce », le chunder australien d’un cri lancé sur un pont de bateau, les acronymes que l’on accroche après coup à naff.',
          'Quand nous en retenons une, nous disons franchement qu’elle n’est pas vérifiée, et nous disons pourquoi elle mérite malgré tout d’être mentionnée : en général parce qu’elle circule tellement que l’omettre embrouillerait plus que la traiter. Quand l’origine est vraiment discutée entre ceux qui étudient la question, la fiche dit que la question reste ouverte plutôt que de retenir la réponse la plus nette.',
        ],
      },
      {
        heading: 'D’où vient l’argot',
        paragraphs: [
          'Une bonne part de ce qui circule comme argot « américain » générique est né dans l’anglais vernaculaire afro-américain ; une bonne part de l’argot des jeunes Britanniques d’aujourd’hui vient du Multicultural London English et, avant lui, du patois jamaïcain ; beaucoup d’argot français est arrivé de l’arabe par les banlieues. Ces trajets sont notés dans les fiches, parce que l’histoire d’un mot est souvent ce qu’il a de plus intéressant et parce que l’attribution compte.',
        ],
      },
      {
        heading: 'Comment le site est organisé',
        paragraphs: [
          'Le pays d’abord, puis le sujet, puis le terme : /fr/mexican-slang/people/guey/. Cet ordre n’a rien d’arbitraire. L’argot appartient à un lieu avant d’appartenir à une langue — l’espagnol du Mexique et celui d’Espagne partagent une grammaire et presque rien de leur vocabulaire familier —, donc le pays est la taxinomie à laquelle tout le reste est accroché.',
          'Un terme classé sous plusieurs sujets garde exactement une adresse, construite à partir du premier d’entre eux. Il apparaît aussi sur les autres pages de sujet, mais celles-ci renvoient vers son unique URL canonique au lieu d’en servir une seconde copie.',
        ],
      },
      {
        heading: 'Langues',
        paragraphs: [
          'L’édition anglaise vit à la racine du site ; chacune des autres vit sous son propre préfixe : /es/, /pt/, /fr/, /de/, /it/, /ru/, /ja/, /ko/. Une page n’apparaît dans une langue que lorsque son contenu a réellement été écrit dans cette langue : il n’y a pas de repli automatique sur l’anglais, et aucune page n’est dupliquée d’une langue à l’autre avec les mêmes mots dedans. Quand une page existe dans plusieurs, chacune renvoie vers les autres en hreflang, pour que les moteurs de recherche puissent servir la bonne.',
          'Ce qui est traduit, c’est l’explication, jamais l’argot lui-même. Une fiche japonaise garde son terme japonais, sa romanisation et ses phrases d’exemple en japonais dans toutes les éditions ; ce qui change, c’est la langue dans laquelle sont écrits les sens, les notes d’usage et l’étymologie. Toute langue ajoutée ensuite suivra la même règle : le contenu traduit d’abord, les pages après.',
        ],
      },
      {
        heading: 'Ce que ce dictionnaire fait mal aujourd’hui',
        bullets: [
          {
            lead: 'La couverture est inégale.',
            rest: 'Seize pays et huit langues, c’est un début, pas un panorama. D’immenses traditions d’argot — le portugais du Brésil, le pidgin nigérian, l’anglais d’Inde, l’arabe — sont purement et simplement absentes.',
          },
          {
            lead: 'La profondeur régionale est mince.',
            rest: 'Les termes sont rattachés à une grande région quand nous en sommes sûrs, et laissés sans étiquette quand nous ne le sommes pas. Un mot marqué « Général » peut très bien être régional d’une façon que nous n’avons pas saisie.',
          },
          {
            lead: 'L’argot se périme.',
            rest: 'Certaines fiches d’ici sonneront vieillottes dans quelques années. Quand un terme est déjà sur le départ, nous le marquons vieilli, mais nous ne le verrons pas toujours passer à temps.',
          },
          {
            lead: 'Il n’y a pas d’audio.',
            rest: 'La prononciation est donnée en API et dans une transcription en toutes lettres. Pour les termes qui reposent sur le ton et l’intonation — une bonne part des fiches italiennes et mexicaines —, cela ne suffit franchement pas.',
          },
        ],
      },
      {
        heading: 'Corrections',
        paragraphs: [
          'Si une fiche est fausse, dépassée, ou passe à côté de la façon dont un mot s’emploie vraiment là où vous vivez, cela vaut la peine de le savoir. Les corrections de locuteurs natifs sont l’apport le plus précieux qu’un dictionnaire comme celui-ci puisse recevoir, et les champs qui ont le plus de chances d’être faux sont le registre et la région : exactement les plus difficiles à documenter et les plus faciles à repérer pour un locuteur.',
        ],
      },
    ],
  });
