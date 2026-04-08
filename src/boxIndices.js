// Vertices.
// pz-nz order is reversed for the nx side.
export const px_py_pz = [0];
export const px_py_nz = [1];
export const px_ny_pz = [2];
export const px_ny_nz = [3];
export const nx_py_nz = [4];
export const nx_py_pz = [5];
export const nx_ny_nz = [6];
export const nx_ny_pz = [7];

// Edge vertices.
export const px_py = [0, 1];
export const px_ny = [2, 3];
export const nx_py = [4, 5];
export const nx_ny = [6, 7];

export const px_pz = [0, 2];
export const px_nz = [1, 3];
export const nx_nz = [4, 6];
export const nx_pz = [5, 7];

export const py_pz = [0, 5];
export const py_nz = [1, 4];
export const ny_pz = [2, 7];
export const ny_nz = [3, 6];

// Face vertices.
export const px = [0, 1, 2, 3];
export const nx = [4, 5, 6, 7];
export const py = [0, 1, 4, 5];
export const ny = [2, 3, 6, 7];
export const pz = [0, 2, 5, 7];
export const nz = [1, 3, 4, 6];

// All vertices.
export const all = [0, 1, 2, 3, 4, 5, 6, 7];

// Faces.
export const face_px = [0, 1];
export const face_nx = [2, 3];
export const face_py = [4, 5];
export const face_ny = [6, 7];
export const face_pz = [8, 9];
export const face_nz = [10, 11];
