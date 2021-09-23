
import { PhraseBank, PhraseBankSection } from '..';

export const blurbWelcome: PhraseBankSection = [
  'Welcome!',
  'Howdy!',
  'What can I do you for?',
  `Sir, have you been drinking?`,
  'Sup?',
  'Yo.'
];

export const blurbAddDrink: PhraseBank = [
  // 0 - this will never get hit
  [],
  // 1
  [
    `I've had more drinks in AA.`,
    `Some light pregaming, respectable.`,
    `More or less sober.`,
    `One drink, what is this? Church?`
  ],
  // 2
  [
    `Why you babysittin' only 2 or 3 shots?`,
    `Gettin' tipsy...`,
    `Let's get this party started!`
  ],
  // 3
  [
    `Why you babysittin' only 2 or 3 shots?`,
    `Let's get it started in here!`,
    `One bourbon, one scotch, one beer.`,
    `Someone's 3'st-y.`
  ],
  // 4
  [
    `1 tequila, 2 tequila, 3 tequila, FLOOR!`,
    `We should hang out more often.`,
  ],
  // 5
  [
    `Regardless of the weather, you should Uber.`,
    `Slow down there tiger!`
  ],
  // 6
  [
    `This is your conscience speaking, keep going.`,
    `99 bottles of beer on the wall...`,
    `Sloshed in the sauce.`
  ],
  // 7
  [
    `This is your conscience speaking, okay woah there.`,
    'Nice beer blanket you got there.',
    'Who wants to do karaoke?',
    'Drunk as a skunk.'
  ],
  // 8
  [
    `You're gonna hate you tomorrow.`,
    'A shroud of spirits.',
    'You should probably leave for the bar now.',
    `Tip your driver, tip your bartender, tip yourself.`,
  ],
  // 9
  [
    'Is this a dare?',
    'Moonshine mantle.',
    'God be with you.'
  ],
  // 10 - manny
  [
    `Certainly this is the last one.`,
    `Future you told us to tell you to stop, fuck that guy.`,
  ],
];

export const blurbRemoveDrink: PhraseBankSection = [
  `Tryna get sober? Been there.`,
  `If you lost count, you're probably drunk.`,
  `Did you throw up?`,
  `Sobering up? Go fix that.`,
  `One cup of water.`,
  `Bartender, I'll have one negative drink.`
];

export const blurbTemperatureConversion: PhraseBank = {
  k: [
    `Okay Mr. Scientist.`,
    `We talk science, this is science.`,
    `What is this? Chemistry class?`,
    `Experimenting?`
  ],
  f: [
    `Oh, look who's a dumb American.`,
    `Well, look who's a dumb American.`,
  ],
  c: [
    `Math is hard.`,
    `Oh, look who's a fancy European`,
    `Well, look who's the fancy European`,
    `Celsius? Sure, whatever.`
  ]
}

