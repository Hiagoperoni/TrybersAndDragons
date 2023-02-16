import Race from './Race';

class Orc extends Race {
  public maxLifePoints: number;
  static numberOfOrcs = 0;

  constructor(nome: string, destreza: number) {
    super(nome, destreza);
    this.maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    Orc.numberOfOrcs += 1;
    return Orc.numberOfOrcs;
  }
}

export default Orc;