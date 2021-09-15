import React, { useEffect, useState } from "react";

import { getRandomPhraseFromBank, getRandomPhraseFromSection, drinksCounter, blerbAddDrink, blerbRemoveDrink } from 'src/content';
import { useGeneratedPhrase } from "src/hooks";

import * as Style from './style.module.scss';

export const DrinkCounter = ({
  drinkCount,
  setDrinkCount,
  setPhrase
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
    setPhrase(getRandomPhraseFromBank(blerbAddDrink, drinkCount + 1));
    if (drinkCount === drinksCounter.length - 1) {
      resetCounterLabel();
      return;
    }
    setDrinkCount(drinkCount + 1);
  }

  const removeDrink = () => {
    setPhrase(getRandomPhraseFromSection(blerbRemoveDrink));
    if (drinkCount === 0) {
      resetCounterLabel();
      return;
    }
    setDrinkCount(drinkCount - 1);
  }

  return (
    <div className={Style.drinkCounterHolder}>
      <div className={Style.drinkCounter}>
        <div
          className={Style.button}
          onClick={removeDrink}
        >
          {'-'}
        </div>
        <div className={Style.center}>
          {drinkCounterLabel[0]}{' '}
          <span className={Style.unit}>
            {drinkCounterLabel[1]}
          </span>
        </div>
        <div
          className={Style.button}
          onClick={addDrink}
        >
          {'+'}
        </div>
      </div>
    </div>
  );
}