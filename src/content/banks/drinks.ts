import { makeRange, PhraseBank } from '..';

const drinkPluralWordBank = [
  'drinks',
  'beers',
  'shots',
  'bottles',
  'standard pours',
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
    ...drinkPluralWordBank.map(word => ['3', word]),
  ],
  // 4
  [
    ['1', 'swig of moonshine'],
    ...drinkPluralWordBank.map(word => ['4', word]),
  ],
  // 5
  [
    ...drinkPluralWordBank.map(word => ['5', word]),
  ],
  // 6
  [
    ['1', 'six pack'],
    ...drinkPluralWordBank.map(word => ['6', word]),
  ],
  // 7
  [
    ...drinkPluralWordBank.map(word => ['7', word]),
  ],
  // 8
  [
    ...drinkPluralWordBank.map(word => ['8', word]),
  ],
  // 9
  [
    ...drinkPluralWordBank.map(word => ['9', word]),
  ],
  // 10
  [
    ...drinkPluralWordBank.map(word => ['10', word]),
  ],
  // 11
  [
    ...drinkPluralWordBank.map(word => ['11', word]),
  ],
  // 12
  [
    ...drinkPluralWordBank.map(word => ['12', word]),
    ...drinkPluralWordBank.map(word => ['A dozen', word]),
  ],
  // 13
  [
    ...drinkPluralWordBank.map(word => ['13', word]),
    ...drinkPluralWordBank.map(word => [`A baker's dozen`, word]),
  ],
  // Many
  [
    ['MANY', 'drinks'],
    ['A LOT', 'of booze']
  ]
]