import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { Weather } from 'src/helpers';
import {
  makeSentence,
  getRandomPhraseFromSection,
  sentenceNickname,
  getSentenceTime,
  sentenceConjunctions,
  locationCannotLocate,
  sentenceWeatherDescription
} from 'src/content';
import { useGeneratedPhrase } from 'src/hooks';

import * as Style from './style.module.scss';

export const WeatherComponent = ({
  weatherData,
  cycleTempUnit,
  tempUnit,
  drinkCount
}) => {

  const actualTempKelvin = weatherData?.main?.temp || 0;
  const actualFeelsLikeKelvin = weatherData?.main?.feels_like || 0;
  const drunkFeelsLikeKelvin = Weather.calculateFeelsLike(actualFeelsLikeKelvin, drinkCount);

  const drunkFeelsLike = Weather.convertTemperature(drunkFeelsLikeKelvin, tempUnit);
  const actualTemp = Weather.convertTemperature(actualTempKelvin, tempUnit);
  const displayTempUnit = `°${tempUnit.toUpperCase()}`;

  const makeWeatherSentence = () => {
    return makeSentence([
      getSentenceTime(),
      ['Right now', 'Outside'],
      [`it's`, `it is`, 'the weather is'],
      `${actualTemp}${displayTempUnit}`,
      ['and', `with`],
      {
        bank: sentenceWeatherDescription,
        sectionIndex: weatherData?.weather[0]?.id
      },
      {
        bank: sentenceConjunctions,
        sectionIndex: (Math.abs(actualTempKelvin - drunkFeelsLikeKelvin) > 3) ? 'but' : 'and'
      }
      ,
      ['for', 'to'],
      { bank: sentenceNickname, sectionIndex: drinkCount },
      ['it feels like', `it's`],
    ]);
  };

  const [noLocation] = useGeneratedPhrase('', () => getRandomPhraseFromSection(locationCannotLocate), []);
  const [phrase] = useGeneratedPhrase('', makeWeatherSentence, [drinkCount, tempUnit, weatherData]);
  const img = weatherData?.weather[0]?.icon;

  return (
    <div className={Style.weather}>
      <div className={Style.weatherContent}>

        <div className={Style.weatherIconHolder}>
          {weatherData && <img src={`//openweathermap.org/img/wn/${img}@2x.png`} />}
        </div>

        <div className={Style.locationHolder}>
          <div className={Style.location}>
            {weatherData?.name || noLocation}
          </div>
        </div>

        <div className={Style.sentenceHolder}>
          <div className={Style.sentence}>
            {!!weatherData && phrase}
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

        <div className={Style.sentenceHolder}>
          {/* <div className={Style.sentence}>
            {!!weatherData && 'so, bring a jacket.'}
          </div> */}
        </div>
      </div>
    </div>
  );
}