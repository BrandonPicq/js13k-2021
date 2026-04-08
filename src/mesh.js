import {object3d_create} from './object3d.js';

export const mesh_create = (geometry, material) => ({
  ...object3d_create(),
  geometry,
  material,
});
