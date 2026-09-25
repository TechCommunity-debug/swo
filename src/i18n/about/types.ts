export interface AboutSection {
  heading: string;
  paragraphs?: string[];
  bullets?: { lead: string; rest: string }[];
}

/**
 * The editorial-policy page in one locale.
 *
 * Built as a function of the live counts rather than hard-coded prose, because
 * the lead sentence quotes how many entries the *current locale* actually has —
 * and that number is different in every edition, since a page exists only where
 * its content is translated.
 */
export interface AboutContent {
  h1: string;
  lead: string;
  sections: AboutSection[];
}
