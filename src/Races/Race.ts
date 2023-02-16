abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _numberOfRace = 0;

  constructor(protected nome: string, protected destreza: number) {
    this._name = nome;
    this._dexterity = destreza;
  }

  static createdRacesInstances(): void {
    throw new Error('Not implemented');
  }

  public get name(): string {
    return this.nome;
  }

  public get dexterity(): number {
    return this.destreza;
  }

  abstract get maxLifePoints(): number;
}

export default Race;