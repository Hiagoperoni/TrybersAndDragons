import Monster from './Monster';

class Dragon extends Monster {
  private _lifePointsDragon: number;
  constructor() {
    super();
    this._lifePointsDragon = 999;
  }
}

export default Dragon;