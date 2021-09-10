var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// netlify/functions/get_weather_by_zipcode.ts
__export(exports, {
  handler: () => handler
});
var OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
var makeEndpoint = ({
  lon,
  lat
}) => `api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&appid=${OPEN_WEATHER_MAP_API_KEY}`;
var handler = async (event, context) => {
  const endpoint = makeEndpoint({
    lon: 100,
    lat: 100
  });
  try {
    const response = await fetch(endpoint, {
      method: "GET"
    });
    return {
      statusCode: 200,
      body: response.json()
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: e
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=get_weather_by_zipcode.js.map
