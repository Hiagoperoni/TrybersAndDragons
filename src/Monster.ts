import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public set lifePoints(newLifePoints: number) {
    this.lifePoints = newLifePoints;
  }

  public get strength(): number {
    return this._strength;
  }
  
  receiveDamage(attackPoints: number): number {
    const dmgReceived = this._lifePoints - attackPoints;
    if (dmgReceived === 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;