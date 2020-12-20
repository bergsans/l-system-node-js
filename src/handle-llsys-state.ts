import {
	State,
	Axiom,
	Point,
	LScreen,
	Turn,
	Direction,
	DirectionModifiers
} from '../typings/main';

const directionModifiers:DirectionModifiers = {
	[Direction.North]: [0, -1],
	[Direction.East]: [1, 0],
	[Direction.South]: [0, 1],
	[Direction.West]: [-1, 0]
};

const setPoint = (
	{ x, y }: Point, screen: LScreen, symbol = '█'
): LScreen => screen.map(
	(row, rowY) => row.map(
		(pntSymbol, pntX) => rowY === y && pntX === x
			? symbol
			: pntSymbol
	)
);

export const changeDirection = (
	currentDirection:Direction,
	rotate: Turn
):Direction => {
	const directions = [Direction.North, Direction.East, Direction.South, Direction.West];
	const index = directions.findIndex((direction) => direction === currentDirection);
	if(rotate === 'R' && index === 3) return Direction.North;
	if(rotate === 'R') return directions[index + 1];
	if(rotate === 'L' && index === 0) return Direction.West;
	else return directions[index - 1];
};

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
			? setPoint(newPoint, screen)
			: screen
	};
};

export const turn = (rotate:Turn, state:State):State => {
	const { screen, point } = state;
	const direction = changeDirection(state.direction, rotate);
	const newLScreen = setPoint({...point}, screen);
	return {
		...state,
		direction,
		screen: newLScreen
	};
};
