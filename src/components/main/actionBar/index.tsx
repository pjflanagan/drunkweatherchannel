import React, { useEffect, useState } from "react";

import { getRandomPhraseFromBank, getRandomPhraseFromSection, drinksCounter, blurbAddDrink, blurbRemoveDrink } from 'src/content';
import { useGeneratedPhrase } from "src/hooks";

import * as Style from './style.module.scss';

import { DrinkCounterBar } from './drinkCounterBar';
import { EnableLocationBar } from './enableLocationBar';

export const ActionBar = ({
  coords,
  drinkCount,
  setDrinkCount,
  setPhrase
}) => {

  return (
    <div className={Style.barHolder}>
      {
        !coords ?
          <EnableLocationBar
          /> :
          <DrinkCounterBar
            drinkCount={drinkCount}
            setDrinkCount={setDrinkCount}
            setPhrase={setPhrase}
          />
      }
    </div>
  );
}