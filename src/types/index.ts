
export type Coordinates = {
  lat: Number,
  lon: Number
}

export type GifEndpointParams = {
  query?: string,
  tag?: string,
}

export type TemperatureUnit = 'f' | 'c' | 'k';

type PhraseBankLabeled = {
  [key: string]: string[]
}

type PhraseBankIndexed = string[][];

export type PhraseBank = PhraseBankLabeled | PhraseBankIndexed;