import { LScreen, Axiom, State, AxiomHandler, Instruction } from '../typings/main';
import { head, tail, id } from './helpers';

export const createLSystemVisualization = (
	axiom:Axiom,
	state:State,
	interpretation:Map<Instruction, AxiomHandler>
):LScreen => {
	if(axiom.length === 0) return state.screen;
	const getExecution = interpretation.get(head(axiom)) ?? id;
	const newState = getExecution(state);
	return createLSystemVisualization(tail(axiom), newState, interpretation);
};

export const sanitizeLScreen = (
	screen: LScreen
):string => {
	const withoutBlankLns = screen.filter((ln) => !ln.every((c) => c === ' '));
	const joined = withoutBlankLns.map((ln) => ln.join('').trimEnd()).join('\n');
	return joined;
};
