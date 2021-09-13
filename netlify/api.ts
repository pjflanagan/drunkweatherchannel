import fetch from 'node-fetch';

export const errorResponse = (e) => {
  return {
    statusCode: e.statusCode || 500,
    body: JSON.stringify({
      error: e.message
    })
  }
}

export const baseFetchEndpoint = async function (endpoint) {
  let response;

  try {
    response = await fetch(endpoint);
  } catch (e) {
    return errorResponse(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(await response.json())
  };
}