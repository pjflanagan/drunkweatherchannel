import { useState, useEffect } from 'react';

import { Coordinates } from 'helpers';

const useCoordinates = (): Coordinates | null => {

  const [coords, setCoords] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (!coords) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  });

  return coords;

}

export { useCoordinates };
