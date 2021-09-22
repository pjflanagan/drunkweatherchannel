import React, { useEffect, useState } from "react";

import { usePermission } from 'hooks';
import { Bar, BarSection } from 'elements';

import * as Style from './style.module.scss';

export const EnableLocationBar = () => {

  const permissionState = usePermission('geolocation');

  const label = (() => {
    switch (permissionState) {
      case 'denied':
        return 'Location disabled, please enable';
      case 'unavailable':
      case 'prompt':
        return 'Please enable location';
      case 'granted':
      default:
        return 'Searching for location...'
    };
  })();

  return (
    <Bar>
      <BarSection
        className={Style.center}
      >
        {label}
      </BarSection>
    </Bar>
  );
}