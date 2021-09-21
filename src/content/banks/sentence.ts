
import { PhraseBankSection } from 'content/contentBankHelpers';
import { Time, makeArray } from 'src/helpers';

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
  600: [`lightly snowing`],
  601: [`snowing`],
  602: [`heavy snow`],
  611: [`sleet`],
  612: [`a light shower sleet`],
  613: [`a sleet shower`],
  615: [`a light rain and snow`],
  616: [`rain and snow`],
  620: [`a light shower snow`],
  621: [`a snow shower`],
  622: [`a heavy snow shower`],
  // atmosphere
  701: [`misty`],
  711: [`smokey`],
  721: [`hazy`],
  731: [`sand and dust whirls`],
  741: [`foggy`],
  751: [`sandy`],
  761: [`dusty`],
  762: [`volcanic ash`],
  771: [`squalls`],
  781: [`a tornado`],
  // clear
  800: [`clear skies`],
  // clouds
  801: [`a few clouds`],
  802: [`scattered clouds`],
  803: [`broken clouds`],
  804: [`overcast`],
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
    `Bacardi B`
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
