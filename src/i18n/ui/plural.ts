/**
 * Counts are interpolated into prose all over the chrome, and a locale's page
 * count can legitimately be 1 while another's is 8. Every count that lands in a
 * sentence goes through here so that "1 países" cannot ship.
 *
 * Locales without number-driven agreement (Japanese, Korean) pass the same word
 * twice; locales with more than two forms (Russian) pass their own selector
 * rather than using this helper.
 */
export const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
