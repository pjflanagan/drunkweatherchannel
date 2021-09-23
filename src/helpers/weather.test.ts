
import assert from 'assert';

import {
  Weather,
  calculateDrunkFeelsLikeF,
  IDEAL_TEMP_F,
  convertFahrenheitToKelvin,
  convertToFahrenheit
} from '.';

// actualFeelsLikeF, drinkCount, expectedFeelsLikeF
type calculateDrunkFeelsLikeFTestData = [number, number, number];

describe('helpers/weather.ts', function () {
  describe('calculateDrunkFeelsLikeF', function () {
    const td: calculateDrunkFeelsLikeFTestData[] = [
      [68, 9, 79],
    ];

    td.forEach(([actualFeelsLikeF, drinkCount, expectedFeelsLikeF]) => {
      it(`should return ${expectedFeelsLikeF} F`, function () {
        assert.equal(
          calculateDrunkFeelsLikeF(actualFeelsLikeF, drinkCount),
          expectedFeelsLikeF
        );
      });
    });
  });

  // describe('convertToFahrenheit and convertToFahrenheit', function () {
  //   for (let i = 0; i < 100; i++) {
  //     it(`should return ${i} F`, function () {
  //       const k = convertFahrenheitToKelvin(i);
  //       const f = convertToFahrenheit(k);
  //       assert.equal(i, Math.round(f));
  //     });
  //   }
  // });

  describe('Weather', function () {
    describe('calculateFeelsLike', function () {
      const td: calculateDrunkFeelsLikeFTestData[] = [
        // no drinks, return the same
        [100, 0, 100],
        [0, 0, 0],
        [50, 0, 50],
        // greater than or equal to ideal temp, return temp
        [IDEAL_TEMP_F + 1, 10, IDEAL_TEMP_F + 1],
        [IDEAL_TEMP_F, 10, IDEAL_TEMP_F],
        // ideal temp and lower
        [54, 9, 67],
        [68, 9, 79],
      ];

      td.forEach(([actualFeelsLikeF, drinkCount, expectedFeelsLikeF]) => {
        it(`should return ${expectedFeelsLikeF} F`, function () {
          const actualFeelsLikeKelvin = convertFahrenheitToKelvin(actualFeelsLikeF);
          const drunkFeelsLikeF = convertToFahrenheit(
            Weather.calculateFeelsLike(actualFeelsLikeKelvin, drinkCount)
          );
          assert.equal(Math.round(drunkFeelsLikeF), expectedFeelsLikeF);
        });
      });
    });
  });
});

