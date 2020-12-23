import { DirectionModifiers, Direction, DirFns, Point, LScreen } from '../typings/typings';

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

export const directionHandler = (
	currDir:Direction,
	dirs:Direction[],
	mods:DirectionModifiers
):DirFns => {
	let i = dirs.findIndex((dir) => dir === currDir) ?? 0;
	const last = dirs.length - 1;
	const first = 0;
	return {
		next() {
			i = inc(i) > last
				? first
				: inc(i);
			return dirs[i];
		},
		prev() {
			i = dec(i) < first
				? last
				: dec(i);
			return dirs[i];
		},
		curr() {
			return dirs[i];
		},
		getPos() {
			return {
				x: mods[dirs[i]][0],
				y: mods[dirs[i]][1]
			};
		}
	};
};
