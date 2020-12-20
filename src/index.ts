import { LRules, Direction } from '../typings/main';
import { makeLSystem } from './make-l-system';
import { makeLScreen } from './helpers';
import { createLSystemVisualization, sanitizeLScreen } from './format-output';
import {
	kochCurve1,
	kochCurve2,
	kochCurve3,
	interpretKochLSystem,
	quadraticKochIsland
} from './koch-transformation-rules';

const games:LRules[] = [ quadraticKochIsland, kochCurve1, kochCurve2, kochCurve3 ];
for(const [index, game] of games.entries()) {
	const interpretation = makeLSystem(index === 0 ? 3 : 4, 'F-F-F-F', game);
	const output = sanitizeLScreen(
		createLSystemVisualization(
			interpretation,
			{
				point: {
					x: 25,
					y: 130
				},
				direction: Direction.North,
				screen: makeLScreen(160, 300)
			},
			interpretKochLSystem
		)
	);
	console.log(`${output}\n\n`);
}
