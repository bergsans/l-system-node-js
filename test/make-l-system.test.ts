import { LRules } from '../typings/main';
import { makeLSystem } from '../src/make-l-system';

const rules1:LRules = new Map().set('A', 'B').set('B', 'AB');
const rules2:LRules = new Map().set('F', 'F-F++F-F');

describe('Rules: A -> B | B -> AB', () => {
	test('no axiom', () => expect(makeLSystem(4, '', rules1)).toEqual(''));
	test('A, 1 generation', () => expect(makeLSystem(1, 'A', rules1)).toEqual('B'));
	test('A, 4 generations', () => expect(makeLSystem(4, 'A', rules1)).toEqual('ABBAB'));
});
describe('Rules: F -> F-F++F-F', () => {
	test('no axiom', () => expect(makeLSystem(4, '', rules2)).toEqual(''));
	test('F, 1 generation', () => expect(makeLSystem(1, 'F', rules2)).toEqual('F-F++F-F'));
	test('F, 4 generations', () => expect(makeLSystem(4, 'F', rules2)).toEqual('F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F-F-F++F-F-F-F++F-F++F-F++F-F-F-F++F-F'));
});
