import { Lines, Direction, DirectionModifiers } from '../typings/typings';

export const directions:Direction[] = [
	Direction.N,
	Direction.E,
	Direction.S,
	Direction.W
];

export const directionModifiers:DirectionModifiers = {
	[Direction.N]: [0,-1],
	[Direction.E]:  [1, 0],
	[Direction.S]: [0, 1],
	[Direction.W]:  [-1,0]
};

export const verticalLine = '┃';

export const horizontalLine = '━';

export const leftDownLine = '┗';

export const leftUpLine = '┓';

export const rightDownLine = '┛';

export const rightUpLine = '┏';

export const empty = ' ';

export const lns:Lines = {
	[Direction.N]: {
		[Direction.W]: leftUpLine,
		[Direction.E]: rightUpLine,
	},
	[Direction.E]: {
		[Direction.N]: rightDownLine,
		[Direction.S]: leftUpLine
	},
	[Direction.S]: {
		[Direction.W]: rightDownLine,
		[Direction.E]: leftDownLine
	},
	[Direction.W]: {
		[Direction.N]: leftDownLine,
		[Direction.S]: rightUpLine
	},
};
