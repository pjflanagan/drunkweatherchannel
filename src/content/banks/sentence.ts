
import { Time } from 'src/helpers';

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
    // 'dusk',
    // 'sunset'
  ],
  night: [
    // 'night',
    `It's party time!`
  ]
};

export const getSentenceTime: PhraseGetter = () => {
  const hour = new Date().getHours();
  if (hour === 17) {
    return `It's 5 o'clock where you are.`;
  }
  return getRandomPhraseFromBank(sentenceTime, Time.getTimeLabel());
}

export const sentenceWindspeed: PhraseBank = {
  still: [
    // 1 - 3 mph
  ],
  breezy: [
    // 4 - 6 mph
  ]
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
  ],
  // 2
  [
    'my friend with the buzz',
  ],
  // 3
  [
    'your drunk ass',
    'the frat star',
    `George Thorogood-and-drunk`
  ]
];

// TODO: sentenceAdvice
