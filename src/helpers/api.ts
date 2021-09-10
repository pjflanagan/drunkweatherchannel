import { Coordinates } from '../types';

const makeWeatherApiEndpoint = ({ lon, lat }: Coordinates): string => {
  return `/.netlify/functions/get_weather_by_position?lat=${lat}&lon=${lon}`;
}

export class API {

  static async fetchWeatherData(coords: Coordinates) {
    return await fetch(makeWeatherApiEndpoint(coords));
  }

  static
};