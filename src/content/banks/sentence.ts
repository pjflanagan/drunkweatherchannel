
import { Time, makeArray } from 'helpers';

import { PhraseGetter, PhraseBank, getRandomPhraseFromBank } from '..';

const sentenceTime: PhraseBank = {
  morning: [
    `Hair of the dog?`,
    `It's 5 o'clock somewhere.`,
    'Good morning, sunshine.',
    `It's a beautiful new day!`,
    `A little early for drinking, huh?`,
    `Top of the mornin' to ya!`,
  ],
  afternoon: [
    `It's 5 o'clock somewhere.`,
    'Good afternoon',
    'Tailgating?',
    'Having a darty?'
  ],
  evening: [
    'Good evening.',
    'The night is young.',
    `Let's get this party started.`
  ],
  night: [
    `It's party time!`,
    'Tonight is the night!',
    `Big night?`,
  ]
};

export const getSentenceTime: PhraseGetter = () => {
  const hour = new Date().getHours();
  if (hour === 17) {
    return `It's 5 o'clock where you are.`;
  }
  return getRandomPhraseFromBank(sentenceTime, Time.getTimeLabel());
}

// it's <temp> <sentenceWeatherDescription>
export const sentenceWeatherDescription: PhraseBank = {
  // thunderstorm
  200: [`a thunderstorm and light rain`],
  201: [`a thunderstorm with rain`],
  202: [`a thunderstorm and heavy rain`],
  210: [`a light thunderstorm`],
  211: [`thunderstorming`],
  212: [`a heavy thunderstorm`],
  221: [`a ragged thunderstorm`],
  230: [`a thunderstorm with a light drizzle`],
  231: [`a thunderstorm with drizzle`],
  232: [`a thunderstorm with a heavy drizzle`],
  // drizzle
  300: [`a light drizzle`],
  301: [`drizzling`],
  302: [`a heavy drizzle`],
  310: [`a light drizzly rain`],
  311: [`a rain drizzle`],
  312: [`a heavy intensity drizzle rain`],
  313: [`a rain shower`],
  314: [`heavy shower of rain and drizzles`],
  321: [`a shower drizzle`],
  // rain
  500: [`lightly raining`, `light rain`],
  501: [`moderate rain`],
  502: [`heavy intensity rain`],
  503: [`very heavy rain`],
  504: [`extreme rain`],
  511: [`freezing rain`],
  520: [`a light intensity shower rain`],
  521: [`a shower rain`],
  522: [`a heavy intensity shower rain`],
  531: [`a ragged shower rain`],
  // snow
  600: [`and lightly snowing`],
  601: [`and snowy`, `and snowing`],
  602: [`with heavy snow`],
  611: [`with sleet`],
  612: [`with light sleet showers`],
  613: [`with sleet showers`],
  615: [`with a light rain and snow`],
  616: [`with rain and snow`],
  620: [`with a light snow shower`],
  621: [`with snow showers`],
  622: [`with heavy snow showers`],
  // atmosphere
  701: [`and misty`],
  711: [`and smokey`],
  721: [`and hazy`],
  731: [`with sand and dust whirls`],
  741: [`and foggy`],
  751: [`and sandy`],
  761: [`and dusty`],
  762: [`with volcanic ash`],
  771: [`with squalls`],
  781: [`with a tornado`],
  // clear
  800: [`with clear skies`, `and clear`],
  // clouds
  801: [`with a few clouds`],
  802: [`with scattered clouds`, `and partly cloudy`],
  803: [`with broken clouds`, `and cloudy`],
  804: [`and overcast`],
};


export const sentenceConjunctions: PhraseBank = {
  and: [
    'and'
  ],
  but: [
    'although',
    'yet',
    'but'
  ]
};

// <preposition> <drinkCountNickname>
export const sentenceNickname: PhraseBank = [
  // 0
  [
    'this little designated driver',
    'the sober monitor here',
    'Mr. Chaperone',
    'the pregnant lady'
  ],
  // 1
  [
    'Mr. One-and-Done',
    'the rave mom',
    'the babysitter'
  ],
  // 2 - 5
  ...makeArray(4, [
    'my friend with the buzz',
    'my good friend',
    `Bloody Mary`,
    `Sammy Adams`
  ]),
  // 6 - 9 
  ...makeArray(4, [
    `this boozehead`,
    `Goneski`,
    `Hasselhoffed`,
    `Señor Ridiculoso`,
    `Captain Morgan`,
    `Bacardi B`,
    `Marilyn Merlot`
  ]),
  // 10+
  [
    'your drunk ass',
    'the frat star',
    `Hennessy Henry`,
    `George Thorogood-and-drunk`,
    `Rebecca Blackout`,
    `Ridrinkulous`,
    `Jim Beam`
  ]
];

// TODO: sentenceAdvice
