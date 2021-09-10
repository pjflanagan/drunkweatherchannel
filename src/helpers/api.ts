import { Coordinates } from '../types';

export const API = {
  makeWeatherApiEndpoint: ({ lon, lat }: Coordinates): string => {
    return `/.netlify/functions/get_weather_by_position?lat=${lat}&lon=-${lon}`;
  },
};