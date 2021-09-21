import React, { useState, useEffect } from 'react';

import { PhraseBankContent } from 'content'

import * as Style from './style.module.scss';

type BlurbComponentProps = {
  children: PhraseBankContent
}

export const BlurbComponent = ({
  children: blurb
}: BlurbComponentProps) => {
  const [animationKey, setAnimationKey] = useState<string>('key-0');

  useEffect(() => {
    const newKey = `key-${new Date().getTime()}`;
    setAnimationKey(newKey);
  }, [blurb]);

  return (
    <div className={Style.phraseHolder}>
      <div
        key={animationKey}
        className={Style.phrase}
      // onTransitionEnd={onTransitionEnd}
      >
        {blurb}
      </div>
    </div>
  );
}