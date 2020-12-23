export type LScreen = string[][];

export type Turn = 'L' | 'R';

export type AxiomHandler = (s:State) => State;

export type LRules = Map<Axiom, Axiom>;

export type LRulesInstructions = Map<Instruction, AxiomHandler>;

export type Axiom = string;

export type Instruction = string;

export enum Direction {
  North,
  East,
  South,
  West
}

type SubLines = {
  [key in Direction]?: string;
};

export type Lines = {
  [key in Direction]: SubLines;
};

export interface Point {
  y: number;
  x: number;
}

export interface State {
  point: Point;
  direction: Direction;
  screen: LScreen;
  directionHandler: DirFns<Direction>;
}

export type DirectionModifiers = {
  [key in Direction]: [number, number];
};

export interface DirFns<T> {
  next: () => T;
  prev: () => T;
}
