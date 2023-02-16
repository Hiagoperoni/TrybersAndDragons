import Race from './Race';

class Halfling extends Race {
  public maxLifePoints: number;
  static numberOfHalflings = 0;

  constructor(nome: string, destreza: number) {
    super(nome, destreza);
    this.maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    Halfling.numberOfHalflings += 1;
    return Halfling.numberOfHalflings;
  }
}

export default Halfling;