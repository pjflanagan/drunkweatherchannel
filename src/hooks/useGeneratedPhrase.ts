import { useState, useEffect } from 'react';

import { PhraseBankContent } from 'content';

const useGeneratedPhrase = (
  init: PhraseBankContent,
  generatePhrase: () => PhraseBankContent,
  listener: any[]
) => {

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
