import { Direction } from '../typings/typings';
import { makeLSystem } from './make-l-system';
import { directionHandler, makeLScreen } from '../src/helpers';
import { createLSystemVisualization, sanitizeLScreen } from './format-output';
import {
	kochCurve1,
	kochCurve2,
	kochCurve3,
	interpretKochLSystem,
	quadraticKochIsland
} from './koch-transformation-and-instruction-rules';
import { directionModifiers, directions } from '../constants/constants';

const transformationRules = [
	{ transformationRule: quadraticKochIsland, nGenerations: 3 , initState: 'F-F-F-F'},
	{ transformationRule: kochCurve1, nGenerations: 4, initState: 'F-F-F-F'},
	{ transformationRule: kochCurve2, nGenerations: 4, initState: 'F-F-F-F' },
	{ transformationRule: kochCurve3, nGenerations: 4, initState: 'F-F-F-F' },
];
for(const { transformationRule, nGenerations, initState } of transformationRules) {
	const interpretation = makeLSystem(
		nGenerations,
		initState,
		transformationRule
	);
	const output = sanitizeLScreen(
		createLSystemVisualization(
			interpretation,
			{
				point: {
					x: 25,
					y: 130
				},
				screen: makeLScreen(160, 300),
				dir: directionHandler(Direction.N, directions, directionModifiers)
			},
			interpretKochLSystem
		)
	);
	console.log(`${output}\n\n`);
}
