
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
  200: [`and thunderstorming with light rain`],
  201: [`with a thunderstorm and rain`],
  202: [`and thunderstorming with heavy rain`],
  210: [`with a light thunderstorm`, `with a mild thunderstorm`],
  211: [`and thunderstorming`],
  212: [`with a heavy thunderstorm`],
  221: [`with a ragged thunderstorm`],
  230: [`with a thunderstorm and light drizzle`],
  231: [`and thunderstorming with a drizzle`],
  232: [`with thunderstorms and a heavy drizzle`],
  // drizzle
  300: [`with a light drizzle`],
  301: [`and drizzling`],
  302: [`with a heavy drizzle`],
  310: [`with a light drizzly rain`],
  311: [`with a rain drizzle`],
  312: [`with a heavy intensity drizzle rain`],
  313: [`with rain showers`],
  314: [`with a heavy shower of rain and drizzles`],
  321: [`with a shower drizzle`],
  // rain
  500: [`and lightly raining`, `light rain`],
  501: [`with moderate rain`],
  502: [`with heavy intensity rain`],
  503: [`with very heavy rain`],
  504: [`with extreme rain`],
  511: [`with freezing rain`],
  520: [`with light intensity rain showers`],
  521: [`with rain showers`],
  522: [`with a heavy intensity rain shower`],
  531: [`with a ragged rain shower`],
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
