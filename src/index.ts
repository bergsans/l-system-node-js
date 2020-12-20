import { Direction } from '../typings/main';
import { makeLSystem } from './make-lsys';
import { makeLScreen } from './helpers';
import { createLSystemVisualization, sanitizeLScreen } from './format-output';
import {
	kochCurve1,
	kochCurve2,
	kochCurve3,
	interpretKochLSystem,
	quadraticKochIsland
} from './koch-curves';

const interpretQuadraticKochIslandGame = makeLSystem(3, 'F-F-F-F', quadraticKochIsland);
const output1 = sanitizeLScreen(
	createLSystemVisualization(
		interpretQuadraticKochIslandGame,
		{
			point: {
				x: 25,
				y: 130
			},
			direction: Direction.North,
			screen: makeLScreen(160, 200)
		},
		interpretKochLSystem
	)
);
console.log(output1);

const interpretKochCurve1 = makeLSystem(4, 'F-F-F-F', kochCurve1);
const output2 = sanitizeLScreen(
	createLSystemVisualization(interpretKochCurve1, {
		point: {
			x: 10,
			y: 85
		},
		direction: Direction.North,
		screen: makeLScreen(190, 90)
	},
	interpretKochLSystem
	)
);
console.log('\n');
console.log(output2);

const interpretKochCurve2 = makeLSystem(3, 'F-F-F-F', kochCurve2);
const output3 = sanitizeLScreen(
	createLSystemVisualization(interpretKochCurve2, {
		point: {
			x: 10,
			y: 85
		},
		direction: Direction.North,
		screen: makeLScreen(160, 190)
	},
	interpretKochLSystem
	)
);
console.log('\n');
console.log(output3);

const interpretKochCurve3 = makeLSystem(3, 'F-F-F-F', kochCurve3);
const output4 = sanitizeLScreen(
	createLSystemVisualization(interpretKochCurve3, {
		point: {
			x: 10,
			y: 85
		},
		direction: Direction.North,
		screen: makeLScreen(190, 190)
	},
	interpretKochLSystem
	)
);
console.log('\n');
console.log(output4);
