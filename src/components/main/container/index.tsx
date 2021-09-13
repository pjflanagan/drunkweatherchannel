import React from 'react';

import { PhraseComponent } from './phraseComponent';
import { WeatherComponent } from './weatherComponent';
import { DrinkCounter } from './drinkCounter';

export const Container = ({
  phrase,
  weatherData,
  cycleTempUnit,
  setDrinkCount,
  tempUnit,
  drinkCount
}) => {
  return (
    <div>
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
    </div>
  );
}
