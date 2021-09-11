import { Coordinates, GifEndpointParams } from '../types';

const makeWeatherApiEndpoint = ({ lon, lat }: Coordinates): string => {
  return `/.netlify/functions/weather?lat=${lat}&lon=${lon}`;
}

const makeGifApiEndpoint = (params: GifEndpointParams): string => {
  const query = new URLSearchParams(params);
  return `/.netlify/functions/gif?${query.toString()}`;
}

export class API {
  static async fetchWeatherData(coords: Coordinates) {
    return await fetch(makeWeatherApiEndpoint(coords));
  }

  static async fetchGifData(params: GifEndpointParams) {
    return await fetch(makeGifApiEndpoint(params));
  }
};