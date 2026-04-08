export const component_create = (update, options) => ({
  parent: undefined,
  update,
  ...options,
});

export const entity_add = (entity, component) => {
  component.parent = entity;
  entity.components.push(component);
  return entity;
};

export const entity_has = (entity, component) =>
  entity.components.includes(component);

export const entity_find = (entity, predicate) =>
  entity.components.find(predicate);

export const entity_filter = (entity, predicate) =>
  entity.components.filter(predicate);

export const entity_remove = (entity, component) => {
  const index = entity.components.indexOf(component);

  if (index >= 0) {
    entity.components
        .splice(index, 1)
        .map((component) => (component.parent = undefined));
  }
};

export const entity_update = (entity, ...args) =>
  entity.components.map((component) => component.update(...args));
