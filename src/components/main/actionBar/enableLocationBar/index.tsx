import React from 'react';
import { usePermission } from 'react-use'

import { Bar, BarSection } from 'elements';

import * as Style from './style.module.scss';

export const EnableLocationBar = () => {

  const permissionState = usePermission({ name: 'geolocation' });

  const label = {
    denied: 'Location disabled, please enable',
    unavailable: 'Location not available',
    prompt: 'Please enable location',
    granted: 'Searching for location...',
    '': 'Searching for location...',
  }[permissionState] || 'Searching for location...';

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