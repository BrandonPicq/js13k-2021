import {describe, expect, it} from 'vitest';

import {lerp, mapLinear, randFloatSpread} from './math.js';

describe('randFloatSpread', () => {
  it('randFloatSpread(1) <= 1 returns true', () => {
    expect(randFloatSpread(1) <= 1).toBe(true);
  });

  it('randFloatSpread(1) >= -1 returns true', () => {
    expect(randFloatSpread(1) >= -1).toBe(true);
  });
});

describe('mapLinear', () => {
  it('mapLinear(1,2,3,4,5) returns 3', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });

  it('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
  });
});

describe('lerp', () => {
  it('lerp(1,3,20) returns 41', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });

  it('lerp(1.3,-7,2) returns -15.3', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
  });
});
