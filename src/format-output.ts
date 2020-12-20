import {
	LScreen,
	Axiom,
	State,
	LRulesInstructions
} from '../typings/main';
import { id } from './helpers';

const transformCharacter = (
	instructions:LRulesInstructions
) => (axiom: Axiom) => (state:State) => (instructions.get(axiom) ?? id)(state);

const transformReducer = (
	instructions:LRulesInstructions
) => (acc:State, v:Axiom) => transformCharacter(instructions)(v)(acc);

export const createLSystemVisualization = (
	axiom:Axiom,
	state:State,
	instructions:LRulesInstructions
):LScreen => axiom
	.split('')
	.reduce(transformReducer(instructions), state)
	.screen;

const fixLn = (ln:string[]) => ln.join('').trimEnd();

const isCharacterBlankSpace = (char:string) => char === ' ';

const rmBlankLns = (ln:string[]) => !ln.every(isCharacterBlankSpace);

export const sanitizeLScreen = (screen:LScreen):string => screen
	.filter(rmBlankLns)
	.map(fixLn)
	.join('\n');
