export type LScreen = string[][];

export type Turn = 'L' | 'R';

export type AxiomHandler = (s:State) => State;

export type LRules = Map<Axiom, Axiom>;

export type LRulesInstructions = Map<Instruction, AxiomHandler>;

export type Axiom = string;

export type Instruction = string;

export enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W'
}

export interface Point {
  y: number;
  x: number;
}

export interface State {
  point: Point;
  direction: Direction;
  screen: LScreen;
}

export type DirectionModifiers = {
  [key in Direction]: [number, number];
};
