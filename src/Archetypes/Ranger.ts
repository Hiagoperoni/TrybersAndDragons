import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  _energyType: EnergyType;
  static numberOfRangers = 0;

  constructor(nome: string) {
    super(nome);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    Ranger.numberOfRangers += 1;
    return Ranger.numberOfRangers;
  }
}

export default Ranger;