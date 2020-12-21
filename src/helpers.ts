import { Point, LScreen } from '../typings/main';

export const id = <T>(v:T):T => v;

export const dec = (x:number):number => x - 1;

export const inc = (x:number):number => x + 1;

export const makeLScreen = (w:number, h:number):LScreen => Array.from(
	{ length: h },
	(_) => Array.from( { length: w }, (__) => ' ')
);

const isPointsEq = (
	a:Point,
	b:Point
):boolean => a.x === b.x && a.y === b.y;

export const putTraceAt = (
	point: Point,
	screen: LScreen,
	symbol = '█'
):LScreen => screen.map(
	(ln:string[], y:number) => ln.map(
		(currPoint:string, x:number) => isPointsEq(point, {x,y})
			? symbol
			: currPoint
	)
);
