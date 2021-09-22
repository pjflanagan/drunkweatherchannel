import { useState, useEffect } from 'react';

import { PhraseBankContent } from 'content';

type UseGeneratedPhraseTuple = [PhraseBankContent, () => void]

/* eslint-disable  @typescript-eslint/no-explicit-any */
const useGeneratedPhrase = (
  init: PhraseBankContent,
  generatePhrase: () => PhraseBankContent,
  listener: any[]
): UseGeneratedPhraseTuple => {

  const [phrase, setPhrase] = useState<PhraseBankContent>(init);

  useEffect(() => {
    setPhrase(generatePhrase());
  }, listener);

  const resetPhrase = () => {
    setPhrase(generatePhrase());
  }

  return [phrase, resetPhrase];

}

export { useGeneratedPhrase };
