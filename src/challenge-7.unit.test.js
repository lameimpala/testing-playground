/**
 * Unit Test: Challenge-7.js
 * 
 */
import { addUp } from './challenge-7';

describe('addUp', () => {
    it('adds the numbers 0 up to 6', () => {
        // arrange 
        const expectedResult = 21;

        // act
        const actualResult = addUp(6);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 5', () => {
        // arrange 
        const expectedResult = 15;

        // act
        const actualResult = addUp(5);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 4', () => {
        // arrange 
        const expectedResult = 10;

        // act
        const actualResult = addUp(4);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 3', () => {
        // arrange 
        const expectedResult = 6;

        // act
        const actualResult = addUp(3);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 2', () => {
        // arrange 
        const expectedResult = 3;

        // act
        const actualResult = addUp(2);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });


    it('adds the numbers 0 down to -1', () => {
        // arrange 
        const expectedResult = -1;

        // act
        const actualResult = addUp(-1);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 down to -4', () => {
        // arrange 
        const expectedResult = -10;

        // act
        const actualResult = addUp(-4);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 down to -2', () => {
        // arrange 
        const expectedResult = -3;

        // act
        const actualResult = addUp(-2);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 0 when called with 0', () => {
        // arrange 
        const expectedResult = 0;

        // act
        const actualResult = addUp(0);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});
