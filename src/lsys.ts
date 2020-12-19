export type LRules = Map<string, string>;

type LSystem = string;

const inc = (x:number) => x + 1;

const nextGeneration = (rules:LRules) => (
  acc:LSystem,
  str:LSystem
) => acc.concat(rules.get(str) ?? str);

const makeGeneration = (prevGenerations:LSystem, rules:LRules) =>
	prevGenerations
		.split('')
		.reduce(nextGeneration(rules), '');

export const makeLSystem = (
  generations:number = 0,
  axiom:LSystem = '',
  lrules:LRules
) => {
	const mLS = (generation:number = 0, newAxiom:LSystem = ''): LSystem =>
		generation === generations
			? newAxiom
			: generation === 0
				? mLS(inc(generation), makeGeneration(axiom, lrules))
				: mLS(inc(generation), makeGeneration(newAxiom, lrules));
	return mLS();
};
