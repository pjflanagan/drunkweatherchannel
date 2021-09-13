import React, { useState, useEffect } from 'react';

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
    <div>{children}</div>
  );
}