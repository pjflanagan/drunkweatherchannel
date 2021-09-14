import React, { FC, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import { useCoordinates } from 'src/hooks';
import { API, TemperatureUnit } from 'src/helpers';
import { getRandomPhraseFromBank, temperatureConversion, errorMessages } from 'src/content';
import { Container } from 'src/elements';

import { PhraseComponent } from './phraseComponent';
import { WeatherComponent } from './weatherComponent';
import { DrinkCounter } from './drinkCounter';
import { GifSlideshow } from './gifSlideshow';

const MainComponent: FC = () => {

  const coords = useCoordinates();
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>('f');
  const [drinkCount, setDrinkCount] = useState<number>(0);
  const [weatherData, setWeatherData] = useState(null);
  const [phrase, setPhrase] = useState('Welcome!');
  const [gifSearch, setGifSearch] = useState('');
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
    setPhrase(getRandomPhraseFromBank(temperatureConversion, newTempUnit));
  }

  useEffect(() => {
    if (!isEmpty(coords) && isEmpty(weatherData) && isEmpty(errorMessage)) {
      let newWeatherData;
      (async function () {
        try {
          newWeatherData = await API.fetchWeatherData(coords);
        } catch (e) {
          setErrorMessage(getRandomPhraseFromBank(errorMessages, 'unableToFetchWeather'));
          return;
        }
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
      <Container>
        <PhraseComponent>
          {phrase}
        </PhraseComponent>
        <WeatherComponent
          weatherData={weatherData}
          cycleTempUnit={cycleTempUnit}
          tempUnit={tempUnit}
          drinkCount={drinkCount}
        />
        <DrinkCounter
          setDrinkCount={setDrinkCount}
          drinkCount={drinkCount}
        />
      </Container>
      <GifSlideshow gifList={gifList} />
    </main>
  )
}


export { MainComponent }