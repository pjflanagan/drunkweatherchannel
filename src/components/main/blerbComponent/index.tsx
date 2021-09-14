import React, { useState, useEffect } from 'react';

import * as Style from './style.module.scss';

type BlerbComponentProps = {
  children: string
}

export const BlerbComponent = ({
  children: blerb
}: BlerbComponentProps) => {
  const [animationKey, setAnimationKey] = useState<string>('key-0');

  useEffect(() => {
    const newKey = `key-${Math.random()}-${blerb.replace(' ', '').substring(0, 5)}`;
    setAnimationKey(newKey);
  }, [blerb]);

  return (
    <div className={Style.phraseHolder}>
      <div
        key={animationKey}
        className={Style.phrase}
      // onTransitionEnd={onTransitionEnd}
      >
        {blerb}
      </div>
    </div>
  );
}