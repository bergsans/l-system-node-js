import {
	State,
	Axiom,
	Point,
	LScreen,
	Turn,
	Direction,
	DirectionModifiers
} from '../typings/main';
import { inc, dec } from './helpers';

const directionModifiers:DirectionModifiers = {
	[Direction.North]: [0,-1],
	[Direction.East]:  [1, 0],
	[Direction.South]: [0, 1],
	[Direction.West]:  [-1,0]
};

const fillPoint = (
	{ x, y }: Point, screen: LScreen, symbol = '█'
): LScreen => screen.map(
	(row:string[], rowY:number) => row.map(
		(pntSymbol:string, pntX:number) => rowY === y && pntX === x
			? symbol
			: pntSymbol
	)
);

export const move = (mv:Axiom, state:State):State => {
	const { point, direction, screen } = state;
	const [x,y] = directionModifiers[direction];
	const newPoint = {
		x: point.x + x,
		y: point.y + y
	};
	return {
		...state,
		point: { ...newPoint },
		screen: mv === 'F'
			? fillPoint(newPoint, screen)
			: screen
	};
};

const isDirsEq = (dir1:Direction) => (dir2:Direction) => dir1 === dir2;

export const changeDirection = (
	currentDirection:Direction,
	rotate: Turn
):Direction => {
	const directions = [
		Direction.North,
		Direction.East,
		Direction.South,
		Direction.West
	];
	const index = directions.findIndex(isDirsEq(currentDirection));
	if(rotate === 'R' && index === 3) return Direction.North;
	if(rotate === 'R') return directions[inc(index)];
	if(rotate === 'L' && index === 0) return Direction.West;
	else return directions[dec(index)];
};

export const turn = (
	rotate:Turn,
	state:State
):State => ({
	...state,
	direction: changeDirection(state.direction, rotate)
});
