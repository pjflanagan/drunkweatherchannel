
export type TemperatureUnit = 'f' | 'c' | 'k';

const convertToFahrenheit = (kelvin: number) => ((kelvin - 273.15) * 1.8) + 32

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
    return actualFeelsLikeKelvin + drinkCount;
  }
}