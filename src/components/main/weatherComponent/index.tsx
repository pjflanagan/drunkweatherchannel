import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { Weather, TemperatureUnit, WeatherData } from 'helpers';
import {
  makeSentence,
  getRandomPhraseFromSection,
  locationWaitingForWeather,
  sentenceNickname,
  getSentenceTime,
  sentenceConjunctions,
  locationCannotLocate,
  sentenceWeatherDescription,
  PhraseBankSectionIndexSearch
} from 'content';
import { useGeneratedPhrase } from 'hooks';

import * as Style from './style.module.scss';

type WeatherComponentProps = {
  waitingForLocation: boolean;
  weatherData: WeatherData;
  cycleTempUnit: () => void;
  tempUnit: TemperatureUnit;
  drinkCount: number;
}

export const WeatherComponent = ({
  waitingForLocation,
  weatherData,
  cycleTempUnit,
  tempUnit,
  drinkCount
}: WeatherComponentProps) => {

  const actualTempKelvin = weatherData?.main?.temp || 0;
  const actualFeelsLikeKelvin = weatherData?.main?.feels_like || 0;
  const drunkFeelsLikeKelvin = Weather.calculateFeelsLike(actualFeelsLikeKelvin, drinkCount);

  const drunkFeelsLike = Math.round(Weather.convertTemperature(drunkFeelsLikeKelvin, tempUnit));
  const actualTemp = Math.round(Weather.convertTemperature(actualTempKelvin, tempUnit));
  const displayTempUnit = `°${tempUnit.toUpperCase()}`;

  const makeWeatherSentence = () => {
    return makeSentence([
      getSentenceTime(),
      ['Right now', 'Outside'],
      [`it's`, `it is`, 'the weather is'],
      `${actualTemp}${displayTempUnit}`,
      {
        exclude: !weatherData,
        bank: sentenceWeatherDescription,
        sectionIndex: weatherData?.weather[0]?.id
      } as PhraseBankSectionIndexSearch,
      {
        bank: sentenceConjunctions,
        sectionIndex: (Math.abs(actualTempKelvin - drunkFeelsLikeKelvin) > 3) ? 'but' : 'and'
      },
      ['for', 'to'],
      { bank: sentenceNickname, sectionIndex: drinkCount },
      ['it feels like', `it's`],
    ]);
  };

  const setLocationPlaceholder = () => {
    if (waitingForLocation) {
      return getRandomPhraseFromSection(locationCannotLocate);
    }
    // waiting for weather to load
    return getRandomPhraseFromSection(locationWaitingForWeather);
  }

  const [locationPlaceholder] = useGeneratedPhrase('', setLocationPlaceholder, []);
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
            {weatherData?.name || locationPlaceholder}
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

        {/* <div className={Style.sentenceHolder}>
          <div className={Style.sentence}>
            {!!weatherData && 'so, bring a jacket.'}
          </div>
        </div> */}
      </div>
    </div>
  );
}