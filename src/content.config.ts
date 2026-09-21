import { defineCollection, reference } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { entriesLoader } from './loaders/entries';
import {
  CATEGORY_IDS,
  PARTS_OF_SPEECH,
  REGISTERS,
  USAGE_WARNINGS,
  REGION_GROUPS,
} from './data/taxonomy';

const countries = defineCollection({
  loader: file('src/data/countries.json'),
  schema: z.object({
    /** Short, stable key. Also the entry-id namespace: `mexican/chido`. */
    id: z.string(),
    /**
     * The URL segment, e.g. `mexican-slang`. The single source of truth for
     * the `-slang` suffix — never build it by concatenating onto `id`, or the
     * first non-country section (`internet-slang`) breaks every link.
     */
    urlSlug: z.string(),
    name: z.string(),
    demonym: z.string(),
    adjective: z.string(),
    /** BCP 47 tag, used for the `lang` attribute on foreign-language text. */
    languageCode: z.string(),
    languageName: z.string(),
    flagEmoji: z.string(),
    regionGroup: z.enum(REGION_GROUPS.map((r) => r.id) as [string, ...string[]]),
    order: z.number().int(),
    /** Valid values for an entry's `region`. Enforced by validate-content.mjs. */
    regions: z.array(z.string()).default([]),
    intro: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string(),
    updatedDate: z.coerce.date(),
  }),
});

const entries = defineCollection({
  loader: entriesLoader(),
  schema: z.object({
    // ------------------------------------------------------------ required
    term: z.string().min(1),
    slug: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase kebab-case'),
    country: reference('countries'),
    partOfSpeech: z.array(z.enum(PARTS_OF_SPEECH)).min(1),
    /**
     * Latin-alphabet transliteration of `term`, for terms written in another
     * script — ヤバい (yabai), круто (kruto). Absent for Latin-script terms.
     *
     * Load-bearing rather than decorative: where it is present it drives the
     * A–Z bucket, the search index and the page title, because nobody searches
     * for a word in a script they cannot type.
     */
    romanization: z.string().min(1).optional(),

    /**
     * At least one definition and one worked example are *required*. This is
     * the structural guard against hollow, mass-generated entries: an empty
     * entry becomes a build failure rather than a credibility problem.
     */
    definitions: z
      .array(
        z.object({
          text: z.string().min(10),
          sense: z.enum(['figurative', 'literal']).default('figurative'),
          note: z.string().optional(),
        }),
      )
      .min(1),
    examples: z
      .array(
        z.object({
          /** The sentence in the source language. */
          text: z.string().min(1),
          /** Natural English rendering — not a word-for-word gloss. */
          translation: z.string().min(1),
          /** Who says this to whom, when it would be wrong, etc. */
          context: z.string().optional(),
        }),
      )
      .min(1),
    register: z.enum(REGISTERS),
    /**
     * Order is load-bearing. `categories[0]` is the entry's *primary* category
     * and forms the middle segment of its canonical URL —
     * `/mexican-slang/people/guey/`. The remaining categories still list the
     * entry on their own country pages, but never change its address.
     *
     * Reordering this array therefore moves a live URL. Add a redirect when you
     * do it, the same as any other rename.
     */
    categories: z.array(z.enum(CATEGORY_IDS)).min(1),
    status: z.enum(['draft', 'review', 'published']).default('draft'),
    updatedDate: z.coerce.date(),

    // ------------------------------------------------------------ optional
    /** Only when the literal reading differs usefully from the slang sense. */
    literalMeaning: z.string().optional(),
    pronunciation: z
      .object({
        ipa: z.string().optional(),
        /** Plain-English respelling, e.g. "CHEE-doh". Often more useful. */
        respelling: z.string().optional(),
      })
      .optional(),
    origin: z
      .object({
        etymology: z.string(),
        /** Free text: "1970s", "early 20th century". Deliberately not a date. */
        firstAttested: z.string().optional(),
        sources: z
          .array(z.object({ title: z.string(), url: z.url() }))
          .default([]),
      })
      .optional(),
    /** Must appear in the parent country's `regions[]`. */
    region: z.string().optional(),
    /** Curated only, and asymmetric by design. Full ids: `mexican/guey`. */
    relatedTerms: z.array(reference('entries')).default([]),
    alsoUsedIn: z.array(reference('countries')).default([]),
    /** Terms with the same sense that may not have their own page yet. */
    synonyms: z.array(z.string()).default([]),
    /** Alternative spellings, e.g. "güey" / "wey" / "we". */
    variants: z.array(z.string()).default([]),
    usageWarning: z.array(z.enum(USAGE_WARNINGS)).default([]),
    reviewedBy: z.string().optional(),
  }),
});

export const collections = { countries, entries };
