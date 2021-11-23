/**
 * Unit Test: Challenge-1.js
 */
import { sumOf } from './challenge-1';

describe('sumOf', () => {
    it('should add 3 and 2', () => {
        // arrange
        const expectedResult = 5;

        // act
        const actualResult = sumOf(3, 2);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('should add 6 and 8', () => {
        // arrange
        const expectedResult = 14;

        // act
        const actualResult = sumOf(6, 8);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('should add 5 and -1', () => {
        // arrange
        const expectedResult = 4;

        // act
        const actualResult = sumOf(5, -1);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});