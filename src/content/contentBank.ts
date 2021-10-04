
// Types ----

// Phrases

// Content
export type PhraseBankContent = string | string[];
export type PhraseGetter = () => PhraseBankContent;
// Section
export type PhraseBankSection = PhraseBankContent[];
// Bank
export type PhraseBankSectionIndex = string | number;
type PhraseBankLabeled = {
  [key: PhraseBankSectionIndex]: PhraseBankSection,
}
type PhraseBankIndexed = PhraseBankSection[];
export type PhraseBank = PhraseBankLabeled | PhraseBankIndexed;

// Sentences

export type PhraseBankSectionIndexSearch = {
  exclude?: boolean,
  bank: PhraseBank,
  sectionIndex: PhraseBankSectionIndex
};
type GeneratedSentencePart = PhraseBankSectionIndexSearch | string | PhraseBankSection;
export type GeneratedSentenceStructure = GeneratedSentencePart[];

// Helper Functions ----

// Search banks

const validateSectionIndex = (bank: PhraseBank, sectionIndex: PhraseBankSectionIndex): PhraseBankSectionIndex => {
  if (typeof sectionIndex === 'number') {
    if (sectionIndex >= bank.length) {
      return (bank.length as number) - 1;
    }
    return Math.floor(sectionIndex);
  }
  return sectionIndex.toLowerCase();
}

export const getRandomPhraseFromBank = (bank: PhraseBank, sectionIndex: PhraseBankSectionIndex): PhraseBankContent => {
  const validatedSectionIndex = validateSectionIndex(bank, sectionIndex);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const section = bank[validatedSectionIndex as any];
  return getRandomPhraseFromSection(section);
}

export const getRandomPhraseFromSection = (section: PhraseBankSection): PhraseBankContent => {
  return section[Math.floor(Math.random() * section.length)];
}

export const makeSentence = (structure: GeneratedSentenceStructure): string => {
  return structure.map(sentencePart => {
    if (typeof sentencePart === 'string') {
      return sentencePart;
    } else if (Array.isArray(sentencePart)) {
      return getRandomPhraseFromSection(sentencePart);
    }
    const { exclude, bank, sectionIndex } = sentencePart as PhraseBankSectionIndexSearch;
    if (exclude) {
      return '';
    }
    return getRandomPhraseFromBank(bank, sectionIndex);
  }).join(' ');
}