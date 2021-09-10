import { useState, useEffect } from 'react';

import { Coordinates } from '../types';

const useCoordinates = () => {

  const [coords, setCoords] = useState<Coordinates>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  });

  return coords;

}

export { useCoordinates };
