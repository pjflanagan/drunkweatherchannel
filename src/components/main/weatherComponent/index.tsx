import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { Weather } from 'src/helpers';
import { makeSentence, sentenceNickname } from 'src/content';

import * as Style from './style.module.scss';

export const WeatherComponent = ({
  weatherData,
  cycleTempUnit,
  tempUnit,
  drinkCount
}) => {

  const [sentence, setSentence] = useState('');

  const actualTempKelvin = weatherData?.main?.temp || 0;
  const drunkFeelsLikeKelvin = weatherData?.main?.feels_like || 0;

  const drunkFeelsLike = Weather.convertTemperature(drunkFeelsLikeKelvin, tempUnit);
  const actualTemp = Weather.convertTemperature(actualTempKelvin, tempUnit);
  const displayTempUnit = `°${tempUnit.toUpperCase()}`;

  const makeWeatherSentence = () => {
    return makeSentence([
      'Right now it is',
      `${actualTemp}${displayTempUnit}`,
      // 'and',
      // clear, overcast, breezy, windy, cloudy, raining, snowing
      (Math.abs(actualTempKelvin - drunkFeelsLikeKelvin) > 3) ? 'but' : 'and',
      ['for', 'to'],
      { bank: sentenceNickname, sectionIndex: drinkCount },
      'it feels like',
    ]);
  };

  useEffect(() => {
    setSentence(makeWeatherSentence());
  })

  useEffect(() => {
    setSentence(makeWeatherSentence());
  }, [drinkCount]);


  return (
    <div className={Style.weather}>
      <div className={Style.weatherContent}>
        <div className={Style.locationHolder}>
          <div className={Style.location}>
            {weatherData?.name || 'Searching for location...'}
          </div>
        </div>

        <div className={Style.preSentenceHolder}>
          <div className={Style.preSentence}>
            {!!weatherData && sentence}
          </div>
        </div>

        <div className={Style.drunkFeelsLikeHolder}>
          <div
            onClick={cycleTempUnit}
            className={Style.drunkFeelsLike}
          >
            {!!weatherData ? drunkFeelsLike : '--'}{displayTempUnit}
          </div>
        </div>
      </div>
    </div>
  );
}