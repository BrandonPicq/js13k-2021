import { describe, expect, it } from 'vitest';

import {
  vec3_create,
  vec3_dot,
  vec3_equals,
  vec3_length,
  vec3_negate,
} from './vec3.js';

describe('vec3_create', () => {
  it('créé un vecteur avec les valeurs données comme prévu', () => {
    expect(vec3_create(1, 2, 3)).toEqual({ x: 1, y: 2, z: 3 });
  });
});

describe('vec3_length', () => {
  it('renvoie 5 pour un vecteur 3-4-0 (triplet pythagoricien)', () => {
    expect(vec3_length(vec3_create(3, 4, 0))).toBe(5);
  });
});

describe('vec3_dot', () => {
  it('renvoie 0 pour deux vecteurs perpendiculaires', () => {
    expect(vec3_dot(vec3_create(1, 0, 0), vec3_create(0, 1, 0))).toBe(0);
  });
});

describe('vec3_equals', () => {
  it('renvoie true pour deux vecteurs avec des composants identiques', () => {
    expect(vec3_equals(vec3_create(1, 2, 3), vec3_create(1, 2, 3))).toBe(true);
  });
});

describe('vec3_negate', () => {
  it("inverse tous les composants d'un vecteur", () => {
    expect(vec3_negate(vec3_create(1, -2, 3))).toEqual({ x: -1, y: 2, z: -3 });
  });
});
