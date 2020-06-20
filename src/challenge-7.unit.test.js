/**
 * Unit Test: Challenge-7.js
 * 
 */
import { addUpTo } from './challenge-7';

describe('addUpTo', () => {
    it('adds the numbers 0 up to 6', () => {
        // arrange 
        const expectedResult = 21;

        // act
        const actualResult = addUpTo(6);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 5', () => {
        // arrange 
        const expectedResult = 15;

        // act
        const actualResult = addUpTo(5);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 4', () => {
        // arrange 
        const expectedResult = 10;

        // act
        const actualResult = addUpTo(4);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 3', () => {
        // arrange 
        const expectedResult = 6;

        // act
        const actualResult = addUpTo(3);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 up to 2', () => {
        // arrange 
        const expectedResult = 3;

        // act
        const actualResult = addUpTo(2);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });


    it('adds the numbers 0 down to -1', () => {
        // arrange 
        const expectedResult = -1;

        // act
        const actualResult = addUpTo(-1);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 down to -4', () => {
        // arrange 
        const expectedResult = -10;

        // act
        const actualResult = addUpTo(-4);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('adds the numbers 0 down to -2', () => {
        // arrange 
        const expectedResult = -3;

        // act
        const actualResult = addUpTo(-2);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 0 when called with 0', () => {
        // arrange 
        const expectedResult = 0;

        // act
        const actualResult = addUpTo(0);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});
