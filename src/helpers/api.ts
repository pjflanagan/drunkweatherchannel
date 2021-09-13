import { Coordinates } from '.';

const makeWeatherApiEndpoint = ({ lon, lat }: Coordinates): string => {
  return `/.netlify/functions/weather?lat=${lat}&lon=${lon}`;
}

const makeGifApiEndpoint = (query: string): string => {
  const queryParams = new URLSearchParams({ query });
  return `/.netlify/functions/gif?${queryParams.toString()}`;
}

export class API {
  static async fetchWeatherData(coords: Coordinates) {
    const response = await fetch(makeWeatherApiEndpoint(coords));
    const data = await response.json();
    return data.list[0];
  }

  static async searchGiphy(query: string) {
    const response = await fetch(makeGifApiEndpoint(query));
    const data = await response.json();
    return data.data;
  }
};