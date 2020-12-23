import { Lines, Direction, DirectionModifiers } from '../typings/typings';

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

export const verticalLine = '┃';

export const horizontalLine = '━';

export const leftDownBorder = '┗';

export const leftUpBorder = '┓';

export const rightDownBorder = '┛';

export const rightUpBorder = '┏';

export const empty = ' ';

export const lns:Lines = {
	[Direction.North]: {
		[Direction.West]: leftUpBorder,
		[Direction.East]: rightUpBorder,
	},
	[Direction.East]: {
		[Direction.North]: rightDownBorder,
		[Direction.South]: leftUpBorder
	},
	[Direction.South]: {
		[Direction.West]: rightDownBorder,
		[Direction.East]: leftDownBorder
	},
	[Direction.West]: {
		[Direction.North]: leftDownBorder,
		[Direction.South]: rightUpBorder
	},
};
