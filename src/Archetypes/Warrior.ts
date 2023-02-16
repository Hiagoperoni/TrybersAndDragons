import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  _energyType: EnergyType;
  static numberOfWarriors = 0;

  constructor(nome: string) {
    super(nome);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    Warrior.numberOfWarriors += 1;
    return Warrior.numberOfWarriors;
  }
}

export default Warrior;