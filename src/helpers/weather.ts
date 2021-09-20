// import { makeArray } from ".";

export type TemperatureUnit = 'f' | 'c' | 'k';

const convertToFahrenheit = (kelvin: number) => ((kelvin - 273.15) * 1.8) + 32

const convertFahrenheitToKelvin = (f: number) => ((f - 32) / 1.8) + 273.15;

// actualFeelsLikeF: [ startFeelingWarmDrink, maxDrunkFeelsLikeTempDeltaF ]
// const weatherFormulaMap = [
//   // 0 and less - 10
//   ...makeArray(11, [9, 8]),
//   // 11 - 20
//   ...makeArray(10, [8, 9]),
//   // 21 - 30
//   ...makeArray(10, [7, 10]),
//   // 31 - 40
//   ...makeArray(10, [7, 11]),
//   // 41 - 50
//   ...makeArray(10, [6, 13]),
//   // 51 - 60
//   ...makeArray(10, [6, 15]),
//   // 61 - 70
//   ...makeArray(10, [5, 13]),
//   // 71 - 80
//   ...makeArray(10, [4, 9]),
// ];

export const Weather = {
  convertTemperature: (kelvin: number, unit: TemperatureUnit) => {
    const newTemp = (() => {
      switch (unit) {
        case 'f':
          return convertToFahrenheit(kelvin);
        case 'c':
          return kelvin - 273.15;
        case 'k':
        default:
          return kelvin;
      }
    })();
    return Math.round(newTemp);
  },
  getLabelFromTemperature: (kelvin: number) => {
    const fahrenheit = convertToFahrenheit(kelvin);
    switch (true) {
      case fahrenheit < 0:
        return 'deathly';
      case fahrenheit < 32:
        return 'freezing';
      case fahrenheit < 42:
        return 'fridgid';
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
  calculateFeelsLike: (actualFeelsLikeKelvin, drinkCount) => {
    if (drinkCount === 0) {
      // if no drinks, return original
      return actualFeelsLikeKelvin;
    }
    const actualFeelsLikeF = convertToFahrenheit(actualFeelsLikeKelvin);
    if (actualFeelsLikeF > 86) {
      // if it is warmer than 86, then just return original
      return actualFeelsLikeKelvin;
    }
    const drunkFeelsLikeF = actualFeelsLikeF + 6 * Math.atan((drinkCount - 2) / 6) + 2;
    if (drunkFeelsLikeF > 86 && actualFeelsLikeF < 86) {
      // if the drunk feels like is higher than 86, return 86
      return 86;
    }
    return convertFahrenheitToKelvin(drunkFeelsLikeF);
  }
}