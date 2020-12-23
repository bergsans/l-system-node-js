import { State, Axiom, Turn, Direction } from '../typings/typings';
import { verticalLine, horizontalLine, lns } from '../constants/constants';
import { putTraceAt } from './helpers';

export const move = (s:State, mv:Axiom):State => {
	const point = {
		x: s.point.x + s.dir.getPos().x,
		y: s.point.y + s.dir.getPos().y
	};
	const symbol = s.dir.curr() === Direction.N || s.dir.curr() === Direction.S
		? verticalLine
		: horizontalLine;
	return {
		...s,
		point,
		screen: mv === 'F'
			? putTraceAt(point, s.screen, symbol)
			: s.screen
	};
};

export const turn = (s:State, rotate: Turn):State => ({
	...s,
	screen: putTraceAt(
		s.point,
		s.screen,
		lns[s.dir.curr()][rotate === 'R' ? s.dir.next() : s.dir.prev()]
	)
});
