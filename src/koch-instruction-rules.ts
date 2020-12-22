import { State, Axiom, Turn, Direction } from '../typings/typings';
import { directions, directionModifiers, borders } from '../constants/constants';
import { putTraceAt, inc, dec } from './helpers';

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
			? putTraceAt(
				newPoint,
				screen,
				direction === Direction.North || direction === Direction.South
					? '┃'
					: '━'
			)
			: screen
	};
};

const isDirsEq = (a:Direction) => (b:Direction) => a === b;

export const turn = (
	state:State,
	rotate: Turn
):State => {
	const { screen, point } = state;
	const index = directions.findIndex(isDirsEq(state.direction));
	let direction;
	if(rotate === 'R' && index === 3) direction = Direction.North;
	else if(rotate === 'L' && index === 0) direction = Direction.West;
	else direction = rotate === 'R'
		? directions[inc(index)]
		: directions[dec(index)];
	return {
		...state,
		direction,
		screen: putTraceAt(point, screen, borders[state.direction][direction])
	};
};
