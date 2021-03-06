
// Units and Conversions

export enum TemperatureUnit {
  F = 'f',
  C = 'c',
  K = 'k',
}
type Kelvin = number;
type Fahrenheit = number;

export const convertToFahrenheit = (k: Kelvin): Fahrenheit => ((k - 273.15) * 1.8) + 32

export const convertFahrenheitToKelvin = (f: Fahrenheit): Kelvin => (f - 32) / 1.8 + 273.15;

// Drunk Feels Like

export const IDEAL_TEMP_F = 86;

type StartFeelingWarmDrink = number;
type MaxDrunkFeelsLikeTempDeltaF = number;
type DrunkFeelsLikeFormulaConstantsTuple = [StartFeelingWarmDrink, MaxDrunkFeelsLikeTempDeltaF];

const getDrunkFeelsLikeFormulaConstants = (actualFeelsLikeF: Fahrenheit): DrunkFeelsLikeFormulaConstantsTuple => {
  switch (true) {
    case actualFeelsLikeF < 0:
    case actualFeelsLikeF < 10:
      return [6, 15];
    case actualFeelsLikeF < 20:
      return [6, 16];
    case actualFeelsLikeF < 30:
      return [5, 17];
    case actualFeelsLikeF < 40:
      return [5, 19];
    case actualFeelsLikeF < 50:
      return [4, 20];
    case actualFeelsLikeF < 60:
      return [4, 16];
    case actualFeelsLikeF < 70:
      return [3, 14];
    case actualFeelsLikeF < 80:
      return [3, 9];
    case actualFeelsLikeF < IDEAL_TEMP_F: // 86
      return [2, 6];
    default:
      return [0, 0];
  }
}

export const calculateDrunkFeelsLikeF = (actualFeelsLikeF: Fahrenheit, drinkCount: number): Fahrenheit => {
  const [minDrink, tempDelta] = getDrunkFeelsLikeFormulaConstants(actualFeelsLikeF);
  const multiplier = tempDelta / Math.PI;
  const constant = tempDelta / 2 + actualFeelsLikeF;
  return Math.floor(multiplier * Math.atan(drinkCount - minDrink) + constant);
}

export const Weather = {
  convertTemperature: (kelvin: Kelvin, unit: TemperatureUnit): number => {
    const newTemp = {
      f: convertToFahrenheit(kelvin),
      c: kelvin - 273.15,
      k: kelvin
    }[unit];
    return newTemp;
  },
  getLabelFromTemperature: (kelvin: Kelvin): string => {
    const fahrenheit = convertToFahrenheit(kelvin);
    switch (true) {
      case fahrenheit < 0:
        return 'deathly';
      case fahrenheit < 32:
        return 'freezing';
      case fahrenheit < 42:
        return 'frigid';
      case fahrenheit < 52:
        return 'cold';
      case fahrenheit < 62:
        return 'chilly';
      case fahrenheit < 72:
        return 'cool';
      case fahrenheit < 82:
        return 'mild';
      case fahrenheit < 92:
        return 'warm';
      default:
        return 'hot';
    }
  },
  calculateFeelsLike: (actualFeelsLikeKelvin: Kelvin, drinkCount: number): Kelvin => {
    if (drinkCount === 0) {
      // if no drinks, return original
      return actualFeelsLikeKelvin;
    }
    const actualFeelsLikeF: Fahrenheit = convertToFahrenheit(actualFeelsLikeKelvin);
    if (actualFeelsLikeF >= IDEAL_TEMP_F) {
      // if it is warmer than IDEAL_TEMP_F, then just return original
      return actualFeelsLikeKelvin;
    }
    const drunkFeelsLikeF: Fahrenheit = calculateDrunkFeelsLikeF(actualFeelsLikeF, drinkCount);
    if (drunkFeelsLikeF > IDEAL_TEMP_F && actualFeelsLikeF < IDEAL_TEMP_F) {
      // if the drunk feels like is higher than IDEAL_TEMP_F
      // and the actual temp is less than ideal temp, return IDEAL_TEMP_F
      // we will never get so drunk it gets hotter than ideal
      return convertFahrenheitToKelvin(IDEAL_TEMP_F);
    }
    return convertFahrenheitToKelvin(drunkFeelsLikeF);
  }
}