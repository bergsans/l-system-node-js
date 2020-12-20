import { makeLSystem } from '../src/make-lsys';
import { interpretKochLSystem, quadraticKochIsland } from '../src/koch-curves';
import { sanitizeLScreen, createLSystemVisualization } from '../src/format-output';
import { Direction } from '../typings/main';
import { makeLScreen } from '../src/helpers';

describe('QuadraticKochCurve', () => {
	test('0 generations', () => {
		const interpretQuadraticKochIslandGame = makeLSystem(0, 'F-F-F-F', quadraticKochIsland);
		const quadraticKochIslandOutput = sanitizeLScreen(
			createLSystemVisualization(
				interpretQuadraticKochIslandGame,
				{
					point: {
						x: 3,
						y: 3
					},
					direction: Direction.North,
					screen: makeLScreen(10, 10)
				},
				interpretKochLSystem
			)
		);
		const [_, ...expectedOutput] = `
   ██
   ██`.split('\n');
		const sanitizedexpectedOutput = expectedOutput.join('\n');
		expect(quadraticKochIslandOutput).toEqual(sanitizedexpectedOutput);
	});
	test('1 generations', () => {
		const interpretQuadraticKochIslandGame = makeLSystem(1, 'F-F-F-F', quadraticKochIsland);
		const quadraticKochIslandOutput = sanitizeLScreen(
			createLSystemVisualization(
				interpretQuadraticKochIslandGame,
				{
					point: {
						x: 20,
						y: 15
					},
					direction: Direction.North,
					screen: makeLScreen(40, 30)
				},
				interpretKochLSystem
			)
		);
		const [_, ...expectedOutput] = `
                      ██
                    █████
                   ██████
                   ███ ███
                    ██████
                    █████
                     ██`.split('\n');
		const sanitizedexpectedOutput = expectedOutput.join('\n');
		expect(quadraticKochIslandOutput).toEqual(sanitizedexpectedOutput);
	});
});
