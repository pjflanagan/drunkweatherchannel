import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

type Position = {
  lon: String,
  lat: String
};

const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

const makeEndpoint = ({
  lon,
  lat,
}: Position): string =>
  `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&appid=${OPEN_WEATHER_MAP_API_KEY}`;

const handler: Handler = async (event, context) => {

  const endpoint = makeEndpoint({
    lon: event.queryStringParameters.lon,
    lat: event.queryStringParameters.lat,
  });

  let response;

  try {
    response = await fetch(endpoint);
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        error: e.message
      })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: await response.json()
    })
  };
}

export { handler };