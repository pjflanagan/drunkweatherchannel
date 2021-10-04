import React, { useEffect, useState } from "react";

import {
  PhraseBankContent,
  getRandomPhraseFromBank,
  getRandomPhraseFromSection,
  drinksCounter,
  blurbAddDrink,
  blurbRemoveDrink
} from 'content';
import { useGeneratedPhrase } from "hooks";
import { Bar, BarSection } from 'elements';

import * as Style from './style.module.scss';

type DrinkCounterBarProps = {
  drinkCount: number
  setDrinkCount: (newDrinkCount: number) => void
  setBlurb: (newBlurb: PhraseBankContent) => void
}

export const DrinkCounterBar = ({
  drinkCount,
  setDrinkCount,
  setBlurb
}: DrinkCounterBarProps) => {

  const makeCounterLabel = () => {
    return getRandomPhraseFromBank(drinksCounter, drinkCount);
  };

  const [drinkCounterLabel, resetCounterLabel] = useGeneratedPhrase(
    ['0', 'drinks'],
    makeCounterLabel,
    [drinkCount]
  );

  const addDrink = () => {
    setBlurb(getRandomPhraseFromBank(blurbAddDrink, drinkCount + 1));
    if (drinkCount === (drinksCounter.length as number) - 1) {
      resetCounterLabel();
      return;
    }
    setDrinkCount(drinkCount + 1);
  }

  const removeDrink = () => {
    setBlurb(getRandomPhraseFromSection(blurbRemoveDrink));
    if (drinkCount === 0) {
      resetCounterLabel();
      return;
    }
    setDrinkCount(drinkCount - 1);
  }

  return (
    <Bar>
      <BarSection
        onClick={removeDrink}
        className={Style.button}
      >
        {'-'}
      </BarSection>
      <BarSection className={Style.center}>
        <span>
          {drinkCounterLabel[0]}{' '}
        </span>
        <span className={Style.unit}>
          {drinkCounterLabel[1]}
        </span>
      </BarSection>
      <BarSection
        onClick={addDrink}
        className={Style.button}
      >
        {'+'}
      </BarSection>
    </Bar>
  );
}