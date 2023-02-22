import Fighter from '../Fighter/Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _character01: Fighter;
  private _character02: Fighter;

  constructor(Character1: Fighter, Character2: Fighter) {
    super(Character1);
    this._character01 = Character1;
    this._character02 = Character2;
  }

  fight(): number {
    if (this._character01.lifePoints > 0 && this._character02.lifePoints > 0) {
      this._character01.attack(this._character02);
      this._character02.attack(this._character01);
    }
    return super.fight();
  }
}

export default PVP;