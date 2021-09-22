
import { PhraseBank } from '..';

export const searchTime: PhraseBank = {
  morning: [
    'morning',
    'sunrise'
  ],
  afternoon: [
    'daytime',
    'darty',
    'afternoon'
  ],
  evening: [
    'evening',
    'dusk',
    'sunset',
    'bar'
  ],
  night: [
    'night',
    'party',
    'rave',
    'nightclub'
  ]
};

export const searchWeather: PhraseBank = {
  // thunderstorm
  200: [`thunderstorm light rain`],
  201: [`thunderstorm rain`],
  202: [`thunderstorm heavy rain`],
  210: [`light thunderstorm`],
  211: [`thunderstorm`],
  212: [`heavy thunderstorm`],
  221: [`ragged thunderstorm`],
  230: [`thunderstorm light drizzle`],
  231: [`thunderstorm drizzle`],
  232: [`thunderstorm heavy drizzle`],
  // drizzle
  300: [`light drizzle`],
  301: [`drizzle`],
  302: [`heavy drizzle`],
  310: [`light drizzle rain`],
  311: [`rain drizzle`],
  312: [`heavy intensity drizzle rain`],
  313: [`rain shower`],
  314: [`heavy shower rain drizzle`],
  321: [`shower drizzle`],
  // rain
  500: [`lightly raining`, `light rain`],
  501: [`moderate rain`],
  502: [`heavy rain`],
  503: [`very heavy rain`],
  504: [`extreme rain`],
  511: [`freezing rain`],
  520: [`light rain shower`],
  521: [`rain showers`],
  522: [`heavy rain shower`],
  531: [`ragged shower rain`],
  // snow
  600: [`light snow`],
  601: [`snowy`, `snowing`, `snowy`],
  602: [`heavy snow`, `snow storm`],
  611: [`sleet`],
  612: [`light sleet shower`],
  613: [`sleet shower`],
  615: [`light rain snow`],
  616: [`rain snow`],
  620: [`light snow shower`],
  621: [`snow shower`],
  622: [`heavy snow shower`],
  // atmosphere
  701: [`misty`, `mist`],
  711: [`smokey`, `smoke`],
  721: [`hazy`, `haze`],
  731: [`sand dust whirls`],
  741: [`foggy`, `fog`],
  751: [`sand`],
  761: [`dust`],
  762: [`volcanic ash`],
  771: [`squalls`],
  781: [`tornado`],
  // clear
  800: [`clear skies`, `clear sky`],
  // clouds
  801: [`few clouds`],
  802: [`scattered clouds`, `partly cloudy`],
  803: [`broken clouds`, `cloudy`],
  804: [`overcast`],
};