import { LScreen } from '../typings/main';

export const head = (instructions:string):string => instructions[0] ?? '';

export const tail = (instructions:string):string => instructions.slice(1) ?? '';

export const id = <T>(v:T):T => v;

export const inc = (x:number):number => x + 1;

export const makeLScreen = (w:number, h:number):LScreen => Array.from(
	{ length: h }, (_) => Array.from(
		{ length: w }, (__) => ' '
	)
);
