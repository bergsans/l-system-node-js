import { Borders, Direction, DirectionModifiers } from '../typings/typings';

export const directions = [
	Direction.North,
	Direction.East,
	Direction.South,
	Direction.West
];

export const directionModifiers:DirectionModifiers = {
	[Direction.North]: [0,-1],
	[Direction.East]:  [1, 0],
	[Direction.South]: [0, 1],
	[Direction.West]:  [-1,0]
};

export const borders:Borders = {
	[Direction.North]: {
		[Direction.West]: '┓',
		[Direction.East]: '┏'
	},
	[Direction.East]: {
		[Direction.North]: '┛',
		[Direction.South]: '┓'
	},
	[Direction.South]: {
		[Direction.West]: '┛',
		[Direction.East]: '┗'
	},
	[Direction.West]: {
		[Direction.North]: '┗',
		[Direction.South]: '┏'
	},
};
