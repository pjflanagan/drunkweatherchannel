import React from 'react';
import { isEmpty } from 'lodash';

import { Weather } from 'src/helpers';
import { makeSentence, drinkCountNicknames } from 'src/content';

import * as Style from './style.module.scss';

export const WeatherComponent = ({
  weatherData,
  cycleTempUnit,
  tempUnit,
  drinkCount
}) => {

  if (isEmpty(weatherData)) {
    return <></>;
  };

  const drunkFeelsLikeKelvin = weatherData.main.feels_like
  const drunkFeelsLike = Weather.convertTemperature(drunkFeelsLikeKelvin, tempUnit);
  const actualTempKelvin = weatherData.main.temp;
  const actualTemp = Weather.convertTemperature(actualTempKelvin, tempUnit);
  const displayTempUnit = `°${tempUnit.toUpperCase()}`;

  return (
    <div className={Style.weather}>
      <div className={Style.location}>
        {weatherData.name}
      </div>
      {
        makeSentence([
          'Right now it is',
          `${actualTemp}${displayTempUnit}`,
          (Math.abs(actualTempKelvin - drunkFeelsLikeKelvin) > 3) ? 'but' : 'and',
          ['for', 'to'],
          { bank: drinkCountNicknames, sectionIndex: drinkCount },
          'it feels like',
        ])
      }
      <div
        onClick={cycleTempUnit}
        className={Style.drunkFeelsLike}
      >
        {drunkFeelsLike}{displayTempUnit}
      </div>
    </div>
  );
}