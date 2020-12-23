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
} from './koch-transformation-rules';
import { directions } from '../constants/constants';

const transformationRules = [
	{ transformationRule: quadraticKochIsland, nGenerations: 3 },
	{ transformationRule: kochCurve1, nGenerations: 4 },
	{ transformationRule: kochCurve2, nGenerations: 4 },
	{ transformationRule: kochCurve3, nGenerations: 4 },
];
for(const { transformationRule, nGenerations } of transformationRules) {
	const interpretation = makeLSystem(
		nGenerations,
		'F-F-F-F',
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
				direction: Direction.North,
				screen: makeLScreen(160, 300),
				directionHandler: directionHandler(directions)
			},
			interpretKochLSystem
		)
	);
	console.log(`${output}\n\n`);
}
