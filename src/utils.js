export const flow = (...fns) => (initialValue) =>
  fns.reduce((value, fn) => fn(value), initialValue);

export const rearg = (fn) => (...args) => (value) => fn(value, ...args);

export const remove = (array, element) => {
  const index = array.indexOf(element);
  if (index >= 0) array.splice(index, 1);
};

export const sample = (array) => array[(Math.random() * array.length) | 0];
