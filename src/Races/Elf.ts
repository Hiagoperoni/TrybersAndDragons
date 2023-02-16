import Race from './Race';

class Elf extends Race {
  public maxLifePoints: number;
  static numberOfElfs = 0;

  constructor(nome: string, destreza: number) {
    super(nome, destreza);
    this.maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    Elf.numberOfElfs += 1;
    return Elf.numberOfElfs;
  }
}

export default Elf;