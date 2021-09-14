import React, { useState, useEffect } from 'react';

import * as Style from './style.module.scss';

type PhraseComponentProps = {
  children: string
}

export const PhraseComponent = ({
  children
}: PhraseComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsVisible(true);
    }
  }, [children]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, children.length * 100);
    }
  }, [isVisible]);

  return (
    <div className={Style.phraseHolder}>
      <div className={Style.phrase}>
        {children}
      </div>
    </div>
  );
}