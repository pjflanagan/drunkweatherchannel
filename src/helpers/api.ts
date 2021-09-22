
import { Coordinates } from '.';

import gifResponseData from './responseData/giphy-search.json';
import openWeatherResponseData from './responseData/open-weather.json';

type WeatherResponseData = typeof openWeatherResponseData;
export type WeatherData = typeof openWeatherResponseData.list[0] | null;

type GifResponseData = typeof gifResponseData;
export type GifList = typeof gifResponseData.data | [];
const gifImage = gifResponseData.data[0].images.downsized_large;
export type GifImage = typeof gifImage | null;

const makeWeatherApiEndpoint = ({ lon, lat }: Coordinates): string => {
  return `/.netlify/functions/weather?lat=${lat}&lon=${lon}`;
}

const makeGifApiEndpoint = (query: string): string => {
  const queryParams = new URLSearchParams({ query });
  return `/.netlify/functions/gif?${queryParams.toString()}`;
}

export class API {
  static async fetchWeatherData(coords: Coordinates): Promise<WeatherData> {
    const response = await fetch(makeWeatherApiEndpoint(coords));
    const data: WeatherResponseData = await response.json();
    return data.list[0];
  }

  static async searchGiphy(query: string): Promise<GifList> {
    const response = await fetch(makeGifApiEndpoint(query));
    const data: GifResponseData = await response.json();
    return data.data;
  }
}
