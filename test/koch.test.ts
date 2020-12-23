import { makeLSystem } from '../src/make-l-system';
import { interpretKochLSystem, quadraticKochIsland } from '../src/koch-transformation-and-instruction-rules';
import { sanitizeLScreen, createLSystemVisualization } from '../src/format-output';
import { Direction } from '../typings/typings';
import { directions, directionModifiers } from '../constants/constants';
import { directionHandler, makeLScreen } from '../src/helpers';

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
					screen: makeLScreen(10, 10),
					dir: directionHandler(Direction.N, directions, directionModifiers)
				},
				interpretKochLSystem
			)
		);
		const [_, ...expectedOutput] = `
   ┏┓
   ━┛`.split('\n');
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
					screen: makeLScreen(40, 30),
					dir: directionHandler(Direction.N, directions, directionModifiers)
				},
				interpretKochLSystem
			)
		);
		const [_, ...expectedOutput] = `
                      ┏┓
                    ┏┓┃┗┓
                   ┏┛┗┛┏┛
                   ┗━┓ ┗━┓
                    ┏┛┏┓┏┛
                    ━┓┃┗┛
                     ┗┛`.split('\n');
		const sanitizedexpectedOutput = expectedOutput.join('\n');
		expect(quadraticKochIslandOutput).toEqual(sanitizedexpectedOutput);
	});
});
