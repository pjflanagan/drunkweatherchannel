import React from "react";

import { Bar, BarSection } from 'elements';

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