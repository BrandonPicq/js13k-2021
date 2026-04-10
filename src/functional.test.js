import {describe, expect, it, vi} from 'vitest';

import {findTarget} from './ai.js';
import {
  component_create,
  entity_add,
  entity_has,
  entity_remove,
} from './entity.js';
import {off, on, trigger} from './events.js';

// --- events.js ---
// Test fonctionnel du cycle d'eventements
describe('cycle de vie des événements — on / trigger / off', () => {
  it('On écoute l\'événement', () => {
    const target = {};
    const listener = vi.fn(); // vi.fn() crée un espion pour suivre les appels

    on(target, 'fire', listener);
    trigger(target, 'fire');

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('Le listener n\'est pas appelé si il a été supprimé avec off()', () => {
    const target = {};
    const listener = vi.fn();

    on(target, 'fire', listener);
    off(target, 'fire', listener);
    trigger(target, 'fire');

    expect(listener).toHaveBeenCalledTimes(0);
  });
});

// --- entity.js ---
// Test fonctionnel: cycle de vie complet d'un composant dans une entité.
// On crée une entité, on ajoute un composant, on vérifie sa présence,
// on le retire, et on vérifie qu'il a bien disparu.
describe('cycle de vie entité — add / has / remove', () => {
  it('un composant ajouté est détecté par entity_has', () => {
    const entity = {components: []};
    const comp = component_create(() => {});

    entity_add(entity, comp);
    expect(entity_has(entity, comp)).toBe(true);
  });

  it('un composant retiré n\'est plus détecté par entity_has', () => {
    const entity = {components: []};
    const comp = component_create(() => {});

    entity_add(entity, comp);
    entity_remove(entity, comp);
    expect(entity_has(entity, comp)).toBe(false);
  });

  it('le parent est assigné à l\'ajout et retiré à la suppression', () => {
    const entity = {components: []};
    const comp = component_create(() => {});

    entity_add(entity, comp);
    expect(comp.parent).toBe(entity);

    entity_remove(entity, comp);
    expect(comp.parent).toBeUndefined();
  });
});

// --- ai.js ---
// Test fonctionnel: findTarget() décide si un ennemi attaque une cible.
// l'ennemi n'attaque pas si la cible est trop loin (FAR),
// attaque en mêlée sans vérifier la direction,
// et n'attaque pas si la cible est NEAR mais pas en face.
describe('findTarget — décision d\'attaque de l\'IA', () => {
  const enemy = {position: {x: 0, y: 0, z: 0}};

  it('retourne false si la cible est trop loin (FAR)', () => {
    const target = {position: {x: 2000, y: 0, z: 0}};
    expect(findTarget(enemy, target)).toBe(false);
  });

  it('retourne true si la cible est à portée de mêlée (< 64)', () => {
    const target = {position: {x: 30, y: 0, z: 0}};
    expect(findTarget(enemy, target)).toBe(true);
  });

  it('retourne false si la cible est NEAR mais pas en face de l\'ennemi', () => {
    // Quaternion identité : l'ennemi regarde vers +Z
    // La cible est sur l'axe X → sur le côté, pas devant
    const enemyFacingZ = {
      position: {x: 0, y: 0, z: 0},
      quaternion: {x: 0, y: 0, z: 0, w: 1},
    };
    const target = {position: {x: 100, y: 0, z: 0}};
    expect(findTarget(enemyFacingZ, target)).toBe(false);
  });
});
