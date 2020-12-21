import { State, Axiom, Turn, Direction, DirectionModifiers } from '../typings/main';
import { putTraceAt, inc, dec } from './helpers';

const directionModifiers:DirectionModifiers = {
	[Direction.North]: [0,-1],
	[Direction.East]:  [1, 0],
	[Direction.South]: [0, 1],
	[Direction.West]:  [-1,0]
};

export const move = (state:State, mv:Axiom):State => {
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
			? putTraceAt(newPoint, screen)
			: screen
	};
};

const isDirsEq = (a:Direction) => (b:Direction) => a === b;

const directions = [
	Direction.North,
	Direction.East,
	Direction.South,
	Direction.West
];

export const changeDirection = (
	currentDirection:Direction,
	rotate: Turn
):Direction => {
	const index = directions.findIndex(isDirsEq(currentDirection));
	if(rotate === 'R' && index === 3) return Direction.North;
	if(rotate === 'R') return directions[inc(index)];
	if(rotate === 'L' && index === 0) return Direction.West;
	else return directions[dec(index)];
};

export const turn = (state:State, rotate:Turn):State => ({
	...state,
	direction: changeDirection(state.direction, rotate)
});
