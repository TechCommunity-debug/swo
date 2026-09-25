import type { AboutContent } from './types';
import { SITE_NAME } from '../seo/helpers';

/**
 * The editorial-policy page, in en. Long-form prose rather than chrome, so it
 * lives here and not in the `ui` dictionary — burying six hundred words of
 * policy among ninety UI labels would make both harder to find.
 */
export const en = (termCount: number, countryCount: number): AboutContent => ({
    h1: 'How we source definitions',
    lead: `${SITE_NAME} currently holds ${termCount} entries across ${countryCount} countries. This page explains how they are written, what we do when the facts are unclear, and where we know the dictionary is weak. If you only read one page on this site before trusting the rest, this is the one to read.`,
    sections: [
      {
        heading: 'What every entry has to contain',
        paragraphs: [
          'No entry is published without at least one definition and at least one worked example sentence with a natural translation. This is enforced by the build: an entry missing either one fails validation and the site does not compile. It is a deliberately blunt instrument, and it exists because the failure mode of a large slang dictionary is hundreds of thin, padded entries that each technically say something and collectively say nothing.',
          'Beyond that minimum, entries carry what is actually known about them. Some have detailed etymologies; some have none, because none is reliably established. We would rather an entry be visibly shorter than pad it out to match its neighbours.',
        ],
      },
      {
        heading: 'Register and usage warnings',
        paragraphs: [
          'Every term is tagged with a register — informal, colloquial, vulgar, taboo, dated or regional — and some carry an explicit usage warning. These are the most useful and the most subjective fields on the site. A word like cabrón is an affectionate greeting between friends and a serious insult from a stranger; no single label captures that, so the entry says so in the definitions rather than pretending the tag is sufficient.',
          'We list slurs and offensive terms rather than omitting them, with the warning attached. A dictionary that leaves out the words you most need explained is not protecting anyone.',
        ],
      },
      {
        heading: 'Disputed and invented etymologies',
        paragraphs: [
          'Slang attracts folk etymology more than any other part of a language, and the good stories travel faster than the true ones. Several origins repeated confidently across the web are simply unverifiable — the Mexican chamba supposedly coming from "Chamber of Commerce", the Australian chunder from a shipboard cry of "watch under", the acronym backstories attached to naff.',
          'Where we include one of these, we say plainly that it is unverified, and we say why it is worth mentioning anyway — usually because it is repeated so widely that leaving it out would be more confusing than addressing it. Where the origin is genuinely contested among people who study this, the entry says the question is open rather than picking the tidiest answer.',
        ],
      },
      {
        heading: 'Where slang comes from',
        paragraphs: [
          'A large share of what circulates as generic "American" slang originated in African American Vernacular English; a large share of current British youth slang comes from Multicultural London English and, before that, Jamaican Patois; a great deal of French slang arrived through the banlieues from Arabic. These routes are noted in the entries, because a word’s history is frequently the most interesting thing about it and because attribution matters.',
        ],
      },
      {
        heading: 'How the site is organised',
        paragraphs: [
          'Country comes first, then topic, then the term: /mexican-slang/people/guey/. That order is not arbitrary. Slang belongs to a place before it belongs to a language — Mexican and peninsular Spanish share a grammar and almost none of their informal vocabulary — so the country is the taxonomy everything else hangs off.',
          'A term filed under several topics still has exactly one address, built from the first of them. It appears on the other topic pages too, but those pages link to its one canonical URL rather than serving a second copy of it.',
        ],
      },
      {
        heading: 'Languages',
        paragraphs: [
          'The English edition lives at the root of the site; every other edition lives under its own prefix — /es/, /pt/, /fr/, /de/, /it/, /ru/, /ja/, /ko/. A page appears in a language only when its content has genuinely been written in that language — there is no machine fallback, and no page is duplicated across languages with the same words in it. Where a page exists in several, each links to the others with hreflang so search engines can serve the right one.',
          'What is translated is the explanation, never the slang itself. A Japanese entry keeps its Japanese term, its romanization and its Japanese example sentences in every edition; what changes is the language the definitions, the usage notes and the etymology are written in. Any further language will follow the same rule: translated content first, then the pages.',
        ],
      },
      {
        heading: 'What this dictionary is currently bad at',
        bullets: [
          {
            lead: 'Coverage is uneven.',
            rest: 'Sixteen countries and eight languages is a start, not a survey. Large slang traditions — Brazilian Portuguese, Nigerian Pidgin, Indian English, Arabic — are simply absent.',
          },
          {
            lead: 'Regional depth is shallow.',
            rest: 'Terms are tagged to a broad region where we are confident, and left untagged where we are not. A word marked "General" may well be regional in ways we have not captured.',
          },
          {
            lead: 'Slang expires.',
            rest: 'Some entries here will read as dated within a few years. Where a term is already on its way out we mark it dated, but we will not always catch it in time.',
          },
          {
            lead: 'No audio.',
            rest: 'Pronunciation is given as IPA and as a plain respelling. For tonal and intonation-dependent terms — a good part of the Italian and Mexican entries — that is genuinely not enough.',
          },
        ],
      },
      {
        heading: 'Corrections',
        paragraphs: [
          'If an entry is wrong, out of date, or misses the way a word is actually used where you live, that is worth knowing. Native-speaker corrections are the single most valuable input a dictionary like this can get, and the fields most likely to be wrong are register and region — exactly the ones that are hardest to research and easiest for a speaker to spot.',
        ],
      },
    ],
  });
