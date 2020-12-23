import { State, Axiom, Turn, Direction } from '../typings/typings';
import { verticalLine, horizontalLine, directionModifiers, lns } from '../constants/constants';
import { putTraceAt } from './helpers';

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
					? verticalLine
					: horizontalLine
			)
			: screen
	};
};

export const turn = (
	state:State,
	rotate: Turn
):State => {
	const { screen, directionHandler, point } = state;
	const direction = rotate === 'R'
		? directionHandler.next()
		: directionHandler.prev();
	return {
		...state,
		direction,
		screen: putTraceAt(point, screen, lns[state.direction][direction])
	};
};
