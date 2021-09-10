import React, { FC, useState, useEffect } from 'react';

import { useCoordinates } from '../../hooks';
import { API } from '../../helpers';

const MainComponent: FC = () => {
  const coords = useCoordinates();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!!coords && !weatherData) {
      (async function () {
        const response = await API.fetchWeatherData(coords);
        setWeatherData(await response.json());
      })();
    }
  }, [coords]);

  return (
    <main>
      Hello:
      <br /> {JSON.stringify(coords)}
      <br /> {JSON.stringify(weatherData)}
    </main>
  )
}


export { MainComponent }