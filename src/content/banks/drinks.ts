import { PhraseBank } from '..';

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
    ['2', 'double shots'],
    ['1', 'swig of moonshine'],
    ['1', 'flight of beers'],
    ...drinkPluralWordBank.map(word => ['4', word]),
  ],
  // 5
  [
    ...drinkPluralWordBank.map(word => ['5', word]),
    ['1', 'flight of strong beers']
  ],
  // 6
  [
    ['1', 'six pack'],
    ...drinkPluralWordBank.map(word => ['6', word]),
  ],
  // 7
  [
    ...drinkPluralWordBank.map(word => ['7', word]),
    ['1', 'brewery tour']
  ],
  // 8
  [
    ...drinkPluralWordBank.map(word => ['8', word]),
    ['1', 'vinyard trip'],
    ['1', 'six pack of fancy beers']
  ],
  // 9
  [
    ...drinkPluralWordBank.map(word => ['9', word]),
    ['1', 'half of a fifth'],
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
    ['1', 'tweleve pack'],
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
    ['A LOT', 'of booze'],
    ['1', 'twenty-first birthday party'],
    ['1', '30-rack'],
  ]
]