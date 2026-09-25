import type {
  CategoryId,
  PartOfSpeech,
  Register,
  RegionGroupId,
  UsageWarning,
} from '../../data/taxonomy';

/** A category's display strings. `topic` slots into "{Adjective} Slang for {topic}". */
export interface CategoryStrings {
  name: string;
  topic: string;
  description: string;
}

/**
 * Every closed-vocabulary label in one locale.
 *
 * These are `Record`s over ids rather than optional maps on purpose: adding a
 * category or a register is then a type error in all nine locales at once,
 * which is the only reliable way to notice that a new tag is rendering in
 * English on eight editions of the site.
 */
export interface TaxonomyStrings {
  categories: Record<CategoryId, CategoryStrings>;
  partOfSpeech: Record<PartOfSpeech, string>;
  register: Record<Register, string>;
  usageWarning: Record<UsageWarning, string>;
  regionGroup: Record<RegionGroupId, string>;
}
