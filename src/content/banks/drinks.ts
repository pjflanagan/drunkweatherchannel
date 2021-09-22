import { makeArray } from 'helpers';

import { PhraseBank } from '..';

const drinkPluralWordBank = [
  'drinks',
  'beers',
  'shots',
  'bottles',
  'standard pours',
];

const manyDrinks = [
  ['SO MANY', 'drinks'],
  ['A LOT', 'of booze'],
  ['WOAH', 'bottles'],
  ...drinkPluralWordBank.map(word => ['LOST COUNT', word]),
  ...drinkPluralWordBank.map(word => ['ELEVENTY', word]),
];

export const drinksCounter: PhraseBank = [
  // 0
  [
    ['0', 'drinks'],
    ['0', 'standard pours'],
  ],
  // 1
  [
    ['1', 'shot'],
    ['1', 'beer'],
    ['1', 'standard pour'],
    ['1', 'bottle'],
    ['1', 'drink'],
    ['1', 'game of beer ball'],
    ['1', 'martini, shaken, not stirred']
  ],
  // 2
  [
    ['1', 'double shot'],
    ['1', 'tall glass of wine'],
    ...drinkPluralWordBank.map(word => ['2', word]),
  ],
  // 3
  [
    ['1', 'pull from a handle'],
    ['1', 'playthrough of Thunderstruck'],
    ...drinkPluralWordBank.map(word => ['3', word]),
  ],
  // 4
  [
    ['2', 'double shots'],
    ['1', 'swig of moonshine'],
    ['1', 'flight of beers'],
    ...drinkPluralWordBank.map(word => ['4', word]),
  ],
  // 5
  [
    ['1', 'flight of strong beers'],
    ['1', 'six pack of seltzers'],
    ...drinkPluralWordBank.map(word => ['5', word]),
  ],
  // 6
  [
    ['1', 'six pack'],
    ['1', 'fishbowl'],
    ...drinkPluralWordBank.map(word => ['6', word]),
  ],
  // 7
  [
    ['1', 'brewery tour'],
    ...drinkPluralWordBank.map(word => ['7', word]),
  ],
  // 8
  [
    ...drinkPluralWordBank.map(word => ['8', word]),
    ['1', 'vinyard trip'],
    ['1', 'six pack of fancy beers']
  ],
  // 9
  [
    ['1', 'half of a fifth'],
    ['1', 'fifth and a friend'],
    ...drinkPluralWordBank.map(word => ['9', word]),
  ],
  // 10
  [
    ['1', 'successful tailgate'],
    ...drinkPluralWordBank.map(word => ['10', word]),
  ],
  // 11
  [
    ...drinkPluralWordBank.map(word => ['11', word]),
  ],
  // 12
  [
    ['1', 'tweleve pack'],
    ...drinkPluralWordBank.map(word => ['12', word]),
    ...drinkPluralWordBank.map(word => ['A dozen', word]),
  ],
  // 13
  [
    ...drinkPluralWordBank.map(word => ['13', word]),
    ...drinkPluralWordBank.map(word => [`A baker's dozen`, word]),
  ],
  // 14 - 20
  ...makeArray(7, manyDrinks),
  // 21
  [
    ['1', 'twenty-first birthday party'],
  ],
  // 22 - 29
  ...makeArray(8, manyDrinks),
  [
    ['1', '30-rack'],
  ],
  // MORE
  manyDrinks
]