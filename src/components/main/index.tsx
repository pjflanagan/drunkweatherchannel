import React, { FC, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { useCoordinates } from 'src/hooks';
import { API, TemperatureUnit } from 'src/helpers';
import {
  getRandomPhraseFromSection,
  getRandomPhraseFromBank,
  errorUnableToFetchWeather,
  blerbTemperatureConversion,
} from 'src/content';
import { Container } from 'src/elements';

import { BlerbComponent } from './blerbComponent';
import { WeatherComponent } from './weatherComponent';
import { DrinkCounter } from './drinkCounter';
import { GifSlideshow } from './gifSlideshow';

const MainComponent: FC = () => {

  const coords = useCoordinates();
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>('f');
  const [drinkCount, setDrinkCount] = useState<number>(0);
  const [weatherData, setWeatherData] = useState(null);
  const [phrase, setPhrase] = useState('Welcome!');
  const [gifList, setGifList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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
    setPhrase(getRandomPhraseFromBank(blerbTemperatureConversion, newTempUnit));
  }

  useEffect(() => {
    if (!isEmpty(coords) && isEmpty(weatherData) && isEmpty(errorMessage)) {
      let newWeatherData;
      (async function () {
        try {
          newWeatherData = await API.fetchWeatherData(coords);
          console.log(newWeatherData);
        } catch (e) {
          setErrorMessage(getRandomPhraseFromSection(errorUnableToFetchWeather));
          return;
        }
        setWeatherData(newWeatherData);
      })();
    }
  }, [coords]);

  useEffect(() => {
    // TODO: GIF SEARCH MODIFIERS
    if (!isEmpty(weatherData)) {
      const weatherDescription = weatherData.weather[0].description;
      const gifSearchModifier = getRandomPhraseFromSection(['weather', 'party', 'drunk', 'drink', 'sky']);
      (async function () {
        const searchGifList = await API.searchGiphy(`${gifSearchModifier} ${weatherDescription}`);
        const newGifList = [...gifList, ...searchGifList];
        setGifList(newGifList);
      })();
    }
  }, [weatherData]);

  return (
    <main>
      <Container>
        <WeatherComponent
          weatherData={weatherData}
          cycleTempUnit={cycleTempUnit}
          tempUnit={tempUnit}
          drinkCount={drinkCount}
        />
        <BlerbComponent>
          {phrase}
        </BlerbComponent>
        <DrinkCounter
          setDrinkCount={setDrinkCount}
          drinkCount={drinkCount}
          setPhrase={setPhrase}
        />
      </Container>
      <GifSlideshow gifList={gifList} />
    </main>
  )
}


export { MainComponent }