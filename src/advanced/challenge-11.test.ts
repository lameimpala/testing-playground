import { objectHasKey } from './challenge-11';

describe('objectHasKey',() => {
    it('returns true when object has the given key', () => {
        // arrange
        const expectedResult = true;

        // act
        const actualResult = objectHasKey({ a : 1 }, 'a');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns false when object does not have the given key', () => {
        // arrange
        const expectedResult = false;

        // act
        const actualResult = objectHasKey({ b : 1 }, 'a');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns true when object has the key and the object is nested', () => {
        // arrange
        const expectedResult = true;

        // act
        const actualResult = objectHasKey({ b : { c: { d: { a: 1, r: 1, u: 2 } }, x: 1, f: 2, g: 3 } }, 'a');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });


    it('returns true when object has the key and the object is deeply nested', () => {
        // arrange
        const expectedResult = true;

        // act
        const actualResult = objectHasKey({ b : { c: { d: { e: { f: { g: { a: 1 } } } }, y: 8 }, p: 2, }, z: 1 }, 'a');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns false when object does not have key and the object is nested', () => {
        // arrange
        const expectedResult = false;

        // act
        const actualResult = objectHasKey({ b : { c: { d: { a: 1 } } } }, 'o');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('should return false if either parameter is undefined', () => {
        // arrange
        const expectedResult = false;

        // act
        const actualResult = objectHasKey();
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});