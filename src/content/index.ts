
import { PhraseBank } from '../types';

export * from './temperatureConversion';

export const getRandomPhrase = (bank: PhraseBank, section: string | number) => {
  const phrases = bank[section];
  return phrases[Math.floor(Math.random() * phrases.length)];
}