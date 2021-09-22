
import assert from 'assert';

import { getTimeLabelFromTime } from '.';

type TestData = [Date, string];

describe('helpers/time.ts', function () {
  describe('getTimeLabelFromTime', function () {
    const td: TestData[] = [
      [new Date('Mon Sep 20 2021 21:30:46 GMT-0400'), 'night'],
      [new Date('Mon Sep 20 2021 20:30:46 GMT-0400'), 'evening'],
      [new Date('Mon Sep 20 2021 08:30:46 GMT-0400'), 'morning'],
    ];

    td.forEach(([now, expectedLabel]) => {
      it(`should return ${expectedLabel}`, function () {
        assert.equal(getTimeLabelFromTime(now), expectedLabel);
      });
    });
  });
});

