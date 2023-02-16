import Race from './Race';

class Dwarf extends Race {
  public maxLifePoints: number;
  static numberOfDwarfs = 0;

  constructor(nome: string, destreza: number) {
    super(nome, destreza);
    this.maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    Dwarf.numberOfDwarfs += 1;
    return Dwarf.numberOfDwarfs;
  }
}

export default Dwarf;