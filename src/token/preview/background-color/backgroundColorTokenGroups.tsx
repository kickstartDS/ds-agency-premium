export type BackgroundColorTokenGroups = Record<string, string[]>;

export function getBackgroundColorTokenGroups(
  tokenValues: Record<string, any>
): BackgroundColorTokenGroups {
  const tokensByCategory: BackgroundColorTokenGroups = {};

  Object.keys(tokenValues).forEach((token) => {
    if (/--ks-background-color-[^-]+-inverted/.test(token)) return;
    if (token.endsWith("-base")) return; // Exclude base tokens

    const match = token.match(/^--ks-background-color-([^-]+)/);
    if (match) {
      const category = match[1];
      if (!tokensByCategory[category]) tokensByCategory[category] = [];
      if (!tokensByCategory[category].includes(token)) {
        tokensByCategory[category].push(token);
      }
    }
  });

  return tokensByCategory;
}
