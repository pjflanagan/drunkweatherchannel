
import { TemperatureUnit } from '../types';

export const Weather = {
  convertTemperature: (kelvin: number, unit: TemperatureUnit) => {
    const newTemp = (() => {
      switch (unit) {
        case 'f':
          return ((kelvin - 273.15) * 1.8) + 32;
        case 'c':
          return kelvin - 273.15;
        case 'k':
        default:
          return kelvin;
      }
    })();
    return Math.round(newTemp);
  },
}