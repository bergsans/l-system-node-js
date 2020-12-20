import {
	LRulesInterpretation,
	State,
	LRules
} from '../typings/main';
import { turn, move } from './handle-llsys-state';

export const quadraticKochIsland:LRules = new Map()
	.set('F', 'F-F+F+FF-F-F+F');

export const kochCurve1:LRules = new Map()
	.set('F', 'FF-F--F-F');

export const kochCurve2:LRules = new Map()
	.set('F', 'FF-F-F-F-FF');

export const kochCurve3:LRules = new Map()
	.set('F', 'FF-F-F-F-F-F+F');

export const interpretKochLSystem: LRulesInterpretation = new Map()
	.set('+', (state:State) => turn('L', state))
	.set('-', (state:State) => turn('R', state))
	.set('F', (state:State) => move('F', state))
	.set('f', (state:State) => move('f', state));
