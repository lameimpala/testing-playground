/**
 * Unit Test: Challenge-1.js
 * 
 */
import { sumOf } from './challenge-1';

describe('sumOf', () => {
    it('adds 2 numbers together', () => {
        // arrange
        const expectedResult = 5;

        // act
        const actualResult = sumOf(3, 2);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});