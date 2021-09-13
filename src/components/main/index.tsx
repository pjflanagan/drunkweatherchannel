import React, { FC, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { useCoordinates } from 'src/hooks';
import { API, Weather, TemperatureUnit } from 'src/helpers';
import { getRandomPhrase, temperatureConversion, drinkCountNicknames, makeSentence } from 'src/content';

import { GifSlideshow } from './gifSlideshow';
import { Container } from './container';

const MainComponent: FC = () => {

  const coords = useCoordinates();
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>('f');
  const [drinkCount, setDrinkCount] = useState<number>(0);
  const [weatherData, setWeatherData] = useState(null);
  const [phrase, setPhrase] = useState('Welcome!');
  const [gifSearch, setGifSearch] = useState('');
  const [gifList, setGifList] = useState([]);

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
    if (!isEmpty(coords) && isEmpty(weatherData)) {
      (async function () {
        const newWeatherData = await API.fetchWeatherData(coords);
        setWeatherData(newWeatherData);
        setGifSearch(newWeatherData.weather[0].description);
      })();
    }
  }, [coords]);

  useEffect(() => {
    if (!isEmpty(gifSearch)) {
      (async function () {
        const searchGifList = await API.searchGiphy(`weather ${gifSearch}`);
        const newGifList = [...gifList, ...searchGifList];
        setGifList(newGifList);
      })();

    }
  }, [gifSearch]);

  return (
    <main>
      <Container
        phrase={phrase}
        weatherData={weatherData}
        cycleTempUnit={cycleTempUnit}
        setDrinkCount={setDrinkCount}
        drinkCount={drinkCount}
        tempUnit={tempUnit}
      />
      <GifSlideshow gifList={gifList} />
    </main>
  )
}


export { MainComponent }