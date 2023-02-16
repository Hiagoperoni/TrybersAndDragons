import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  _energyType: EnergyType;
  static numberOfNecromancers = 0;

  constructor(nome: string) {
    super(nome);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    Necromancer.numberOfNecromancers += 1;
    return Necromancer.numberOfNecromancers;
  }
}

export default Necromancer;