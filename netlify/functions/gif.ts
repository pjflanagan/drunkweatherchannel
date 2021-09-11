import { Handler } from '@netlify/functions';
import { isEmpty } from 'lodash';

import { baseFetchEndpoint, errorResponse } from '../api';

const LIMIT = 25;
const OFFSET = 0;
const RATING = 'r'
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

const makeEndpoint = ({ query, tag }) => {
  if (!isEmpty(query))
    return `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=${LIMIT}&offset=${OFFSET}&rating=${RATING}&lang=en`;
  else if (!isEmpty(tag))
    return `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}&rating=${RATING}`;
  return ''
}

const handler: Handler = async (event, context) => {
  const { query, tag } = event.queryStringParameters;
  const endpoint = makeEndpoint({ query, tag });
  if (isEmpty(endpoint)) {
    return errorResponse({
      statusCode: 400,
      message: `One of query (${query}) and tag (${tag}) is required.`
    });
  }
  return await baseFetchEndpoint(endpoint);
}

export { handler };
