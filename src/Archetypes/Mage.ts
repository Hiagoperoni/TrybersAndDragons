import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  _energyType: EnergyType;
  static numberOfMages = 0;

  constructor(nome: string) {
    super(nome);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    Mage.numberOfMages += 1;
    return Mage.numberOfMages;
  }
}

export default Mage;