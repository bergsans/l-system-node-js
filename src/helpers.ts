import { DirFns, Point, LScreen } from '../typings/typings';

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
	symbol = 'E'
):LScreen => screen.map(
	(ln:string[], y:number) => ln.map(
		(currPoint:string, x:number) => isPointsEq(point, {x,y})
			? symbol
			: currPoint
	)
);

export const directionHandler = <T extends unknown>(dirs:T[]):DirFns<T> => {
	let i = 0;
	return {
		next() {
			i = i + 1 >= dirs.length
				? 0
				: i + 1;
			return dirs[i];
		},
		prev() {
			i = i - 1 < 0
				? dirs.length - 1
				: i - 1;
			return dirs[i];
		}
	};
};
