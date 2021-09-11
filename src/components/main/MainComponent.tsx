import React, { FC, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { useCoordinates } from '../../hooks';
import { API, Weather } from '../../helpers';
import { TemperatureUnit } from '../../types';
import { getRandomPhrase, temperatureConversion } from '../../content';

const MainComponent: FC = () => {

  const coords = useCoordinates();
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>('f');
  const [drinkCount, setDrinkCount] = useState<number>(0);
  const [weatherData, setWeatherData] = useState(null);
  const [phrase, setPhrase] = useState('Welcome!');
  const [gifSearch, setGifSearch] = useState('');
  const [gifList, setGifList] = useState(null);

  const cycleTempUnit = () => {
    const newTempUnit = (() => {
      switch (tempUnit) {
        case 'f':
          return 'c';
        case 'c':
          return 'k';
        case 'k':
        default:
          return 'f';
      }
    })();
    setTempUnit(newTempUnit);
    setPhrase(getRandomPhrase(temperatureConversion, newTempUnit));
  }

  useEffect(() => {
    if (!!coords && !weatherData) {
      (async function () {
        const response = await API.fetchWeatherData(coords);
        const weatherResponse = await response.json()
        const newWeatherData = weatherResponse.data.list[0];
        setWeatherData(newWeatherData);
        setGifSearch(newWeatherData.weather[0].description);
      })();
    }
  }, [coords]);

  useEffect(() => {
    if (!isEmpty(gifSearch)) {
      (async function () {
        const response = await API.fetchGifData({ tag: gifSearch });
        const gifResponse = await response.json();
        setGifList(gifResponse);
      })();

    }
  }, [gifSearch]);

  // Global Data that could be Redux but this is small
  // drink count
  // temp unit pref
  // weather response

  return (
    <main>
      {phrase}
      <br /> {weatherData?.name}
      <br /> <button onClick={cycleTempUnit}>Change Unit</button>
      <br /> {weatherData && Weather.convertTemperature(weatherData?.main.feels_like, tempUnit)} &deg;{tempUnit.toUpperCase()}
      {/* <br /> {JSON.stringify(gifList)} */}
      <br /> {gifList && <img
        src={gifList.data.data.images.downsized_large.url}
        width={gifList.data.data.images.downsized_large.width}
        height={gifList.data.data.images.downsized_large.height}
      />}
    </main>
  )
}


export { MainComponent }