import React, { useEffect, useState } from "react";

import { getRandomPhraseFromBank, getRandomPhraseFromSection, drinksCounter, blurbAddDrink, blurbRemoveDrink } from 'src/content';
import { useGeneratedPhrase } from "src/hooks";
import { Bar, BarSection } from 'src/elements';

import * as Style from './style.module.scss';

export const EnableLocationBar = () => {

  // TODO: if enabled, show searching, if disabled show prompt

  return (
    <Bar>
      <BarSection
        className={Style.center}
      >
        {'Please enable location'}
      </BarSection>
    </Bar>
  );
}