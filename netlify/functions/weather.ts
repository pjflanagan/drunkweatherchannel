import { Handler } from '@netlify/functions';
import { isEmpty } from 'lodash';

import { baseFetchEndpoint, errorResponse } from '../api';

type Position = {
  lon: String,
  lat: String
};

const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

const makeEndpoint = ({ lon, lat, }: Position): string =>
  `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&appid=${OPEN_WEATHER_MAP_API_KEY}`;

const handler: Handler = async (event, context) => {
  const { lat, lon } = event.queryStringParameters;
  if (isEmpty(lat) || isEmpty(lon)) {
    return errorResponse({
      statusCode: 400,
      message: `Both lat (${lat}) and lan (${lon}) are required.`
    });
  }
  const endpoint = makeEndpoint({ lon, lat });
  return await baseFetchEndpoint(endpoint);
}

export { handler };
