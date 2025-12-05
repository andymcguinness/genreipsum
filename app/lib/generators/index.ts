import { cyberpunkGrammar, cyberpunkConfig } from './cyberpunk';
import { corporateGrammar, corporateConfig } from './corporate';
import { fantasyGrammar, fantasyConfig } from './fantasy';
import { noirGrammar, noirConfig } from './noir';

export interface GeneratorConfig {
  name: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  borderColor: string;
  secondaryBorderColor: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  };
}

export interface Generator {
  grammar: Record<string, string[]>;
  config: GeneratorConfig;
}

export const generators: Record<string, Generator> = {
  cyberpunk: {
    grammar: cyberpunkGrammar,
    config: cyberpunkConfig,
  },
  corporate: {
    grammar: corporateGrammar,
    config: corporateConfig,
  },
  fantasy: {
    grammar: fantasyGrammar,
    config: fantasyConfig,
  },
  noir: {
    grammar: noirGrammar,
    config: noirConfig,
  },
};

export const getGenerator = (genre: string): Generator | null => {
  return generators[genre] || null;
};

export const getAllGenres = (): string[] => {
  return Object.keys(generators);
};
