import React, { useEffect, useState } from "react";

import { getRandomPhraseFromBank, getRandomPhraseFromSection, drinksCounter, blurbAddDrink, blurbRemoveDrink } from 'src/content';
import { useGeneratedPhrase } from "src/hooks";
import { Bar, BarSection } from 'src/elements';

import * as Style from './style.module.scss';

export const DrinkCounterBar = ({
  drinkCount,
  setDrinkCount,
  setBlurb
}) => {

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
    if (drinkCount === drinksCounter.length - 1) {
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
        {drinkCounterLabel[0]}{' '}
        <span className={Style.unit}>
          {drinkCounterLabel[1]}
        </span>
      </BarSection>
      <BarSection
        onClick={addDrink}
      >
        {'+'}
      </BarSection>
    </Bar>
  );
}