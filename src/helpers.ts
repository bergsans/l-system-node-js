import { LScreen } from '../typings/main';

export const id = <T>(v:T):T => v;

export const dec = (x:number):number => x - 1;

export const inc = (x:number):number => x + 1;

export const makeLScreen = (w:number, h:number):LScreen => Array.from(
	{ length: h },
	(_) => Array.from( { length: w }, (__) => ' ')
);
