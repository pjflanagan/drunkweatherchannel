import React, { FC, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useGeolocation } from 'react-use';

import { API, TemperatureUnit, Time, WeatherData, GifList } from 'helpers';
import {
  PhraseBankContent,
  getRandomPhraseFromSection,
  getRandomPhraseFromBank,
  errorUnableToFetchWeather,
  blurbTemperatureConversion,
  makeSentence,
  searchWeather,
  searchTime,
  blurbWelcome,
} from 'content';
import { Container, Header } from 'elements';

import { BlurbComponent } from './blurbComponent';
import { WeatherComponent } from './weatherComponent';
import { ActionBar } from './actionBar';
import { GifSlideshow } from './gifSlideshow';
import { SplashComponent } from './splashComponent';

const MainComponent: FC = () => {

  const { latitude, longitude } = useGeolocation();
  const coords = (!latitude || !longitude) ? null : {
    lat: latitude,
    lon: longitude
  }
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>(TemperatureUnit.F);
  const [drinkCount, setDrinkCount] = useState<number>(0);
  const [weatherData, setWeatherData] = useState<WeatherData>(null);
  const [blurb, setBlurb] = useState<PhraseBankContent>('')
  const [gifList, setGifList] = useState<GifList>([]);
  const [errorMessage, setErrorMessage] = useState<PhraseBankContent>('');

  const cycleTempUnit = () => {
    const newTempUnit: TemperatureUnit = {
      'f': TemperatureUnit.C,
      'c': TemperatureUnit.K,
      'k': TemperatureUnit.F
    }[tempUnit];
    setTempUnit(newTempUnit);
    setBlurb(getRandomPhraseFromBank(blurbTemperatureConversion, newTempUnit));
  }

  useEffect(() => {
    setBlurb(getRandomPhraseFromSection(blurbWelcome));
  }, []);

  useEffect(() => {
    if (coords && isEmpty(weatherData) && isEmpty(errorMessage)) {
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
    if (weatherData) {
      const gifSearch = makeSentence([
        {
          bank: searchTime,
          sectionIndex: Time.getTimeLabel()
        },
        {
          bank: searchWeather,
          sectionIndex: weatherData.weather[0].id
        },
      ]);
      console.log(gifSearch);
      (async function () {
        const searchGifList = await API.searchGiphy(gifSearch);
        const newGifList: GifList = [...gifList, ...searchGifList];
        setGifList(newGifList);
      })();
    }
  }, [weatherData]);

  return (
    <main>
      <Header />
      <SplashComponent />
      <Container>
        <WeatherComponent
          waitingForLocation={!coords}
          weatherData={weatherData}
          cycleTempUnit={cycleTempUnit}
          tempUnit={tempUnit}
          drinkCount={drinkCount}
        />
        <BlurbComponent>
          {blurb}
        </BlurbComponent>
        <ActionBar
          coords={coords}
          setDrinkCount={setDrinkCount}
          drinkCount={drinkCount}
          setBlurb={setBlurb}
        />
      </Container>
      <GifSlideshow gifList={gifList} />
    </main>
  )
}


export { MainComponent }