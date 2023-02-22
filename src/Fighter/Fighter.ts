import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  receiveDamage(attackPoints: number): number;
  special?: (enemy: Fighter | SimpleFighter) => void;
  levelUp(): void;
}