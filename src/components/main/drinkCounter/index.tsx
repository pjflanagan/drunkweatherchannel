import React, { useEffect, useState } from "react";

import { getRandomPhraseFromBank, drinksCounter } from 'src/content';

import * as Style from './style.module.scss';

export const DrinkCounter = ({
  drinkCount,
  setDrinkCount,
}) => {

  const [drinkCounterLabel, setDrinkCounterLabel] = useState(['0', 'drinks']);

  const resetCounterLabel = () => {
    setDrinkCounterLabel(getRandomPhraseFromBank(drinksCounter, drinkCount));
  };

  useEffect(() => {
    resetCounterLabel();
  }, [drinkCount]);

  const addDrink = () => {
    if (drinkCount === drinksCounter.length - 1) {
      resetCounterLabel();
      return;
    }
    setDrinkCount(drinkCount + 1);
  }

  const removeDrink = () => {
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