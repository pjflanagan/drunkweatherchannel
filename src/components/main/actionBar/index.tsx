import React, { FC } from "react";

import { Coordinates } from 'helpers';
import { PhraseBankContent } from 'content';

import * as Style from './style.module.scss';
import { DrinkCounterBar } from './drinkCounterBar';
import { EnableLocationBar } from './enableLocationBar';

type ActionBarProps = {
  coords: Coordinates | null;
  drinkCount: number;
  setDrinkCount: (newDrinkCount: number) => void;
  setBlurb: (newBlurb: PhraseBankContent) => void;
}


export const ActionBar: FC<ActionBarProps> = ({
  coords,
  drinkCount,
  setDrinkCount,
  setBlurb
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
            setBlurb={setBlurb}
          />
      }
    </div>
  );
}