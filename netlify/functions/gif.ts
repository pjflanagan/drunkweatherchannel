import { Handler } from '@netlify/functions';
import { isEmpty } from 'lodash';

import { baseFetchEndpoint, errorResponse } from '../api';

const LIMIT = 25;
const OFFSET = 0;
const RATING = 'r'
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

const makeEndpoint = (query) => {
  const params = new URLSearchParams({
    q: query,
    api_key: GIPHY_API_KEY,
    limit: `${LIMIT}`,
    offset: `${OFFSET}`,
    rating: RATING,
    lang: 'en'
  });
  return `https://api.giphy.com/v1/gifs/search?${params.toString()}`;
}

const handler: Handler = async (event, context) => {
  const { query } = event.queryStringParameters;
  const endpoint = makeEndpoint(query);
  if (isEmpty(endpoint)) {
    return errorResponse({
      statusCode: 400,
      message: `Query (${query}) is required.`
    });
  }
  return await baseFetchEndpoint(endpoint);
}

export { handler };
