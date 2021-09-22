
import assert from 'assert';

import { calculateDrunkFeelsLikeF } from '.';

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
});

