declare module 'tracery-grammar' {
  export interface Grammar {
    flatten(rule: string): string;
    addModifiers(modifiers: any): void;
  }

  export function createGrammar(rules: Record<string, string[]>): Grammar;

  export const baseEngModifiers: any;

  export default {
    createGrammar,
    baseEngModifiers,
  };
}
