import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import * as Style from './style.module.scss';

type AnimationState = 'animateIn' | 'animateOut' | 'visible';

type BlerbComponentProps = {
  children: string
}

export const BlerbComponent = ({
  children
}: BlerbComponentProps) => {
  const [animationState, setAnimationState] = useState<AnimationState>('animateIn');

  useEffect(() => {
    setTimeout(() => setAnimationState('visible'), 400);
  });

  useEffect(() => {
    setAnimationState('visible');
  }, [children]);

  const onTransitionEnd = () => {
    console.log('onTransitionEnd', animationState);
    switch (animationState) {
      case 'visible':
        setTimeout(() => setAnimationState('animateOut'), 1600);
        return;
      case 'animateOut':
        setAnimationState('animateIn');
        return;
    }
  }

  const className = classNames(Style.phrase, Style[animationState]);

  return (
    <div className={Style.phraseHolder}>
      <div className={className} onTransitionEnd={onTransitionEnd}>
        {children}
      </div>
    </div>
  );
}