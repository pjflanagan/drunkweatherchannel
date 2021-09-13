
// Types ----

// Phrases

type PhraseBankLabeled = {
  [key: string]: string[]
}
type PhraseBankIndexed = string[][];
export type PhraseBankSectionIndex = string | number;
export type PhraseBank = PhraseBankLabeled | PhraseBankIndexed;

// Sentences

type PhraseBankSectionIndexTuple = [PhraseBank, PhraseBankSectionIndex];
type GeneratedSentencePart = PhraseBankSectionIndexTuple | string;
export type GeneratedSentenceStructure = GeneratedSentencePart[];

// Helper Functions ----

// Make banks
export const makeRange = (length: number, value: string[]) => {
  return Array(length).map(() => value);
}

// Search banks

const validateSection = (bank: PhraseBank, section: PhraseBankSectionIndex): PhraseBankSectionIndex => {
  if (typeof section === 'number') {
    if (section >= bank.length) {
      return (bank.length as number) - 1;
    }
    return Math.floor(section);
  }
  return section.toLowerCase();
}

export const getRandomPhrase = (bank: PhraseBank, section: PhraseBankSectionIndex): string => {
  const validatedSection = validateSection(bank, section);
  const phrases = bank[validatedSection];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export const makeSentence = (structure: GeneratedSentenceStructure): string => {
  return structure.map(sentencePart => {
    if (typeof sentencePart === 'string') {
      return sentencePart;
    }
    const [bank, section] = sentencePart;
    return getRandomPhrase(bank, section);
  }).join(' ');
}