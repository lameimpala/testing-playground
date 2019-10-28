import { pythagoreanTheorem } from './challenge-8';

describe('pythagoreanTheorem', () => {
    it('returns 5 when supplied with 3 and 4', () => {
        // arrange
        const expectedResult = 5;

        // act
        const actualResult = pythagoreanTheorem(3, 4);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 13 when supplied with 5 and 12', () => {
        // arrange
        const expectedResult = 13;

        // act
        const actualResult = pythagoreanTheorem(5, 12);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 17 when supplied with 8 and 15', () => {
        // arrange
        const expectedResult = 17;

        // act
        const actualResult = pythagoreanTheorem(8, 15);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('should not throw error when first argument is undefined', () => {
        // arrange
        // act
        // assert
        expect(() => {
            pythagoreanTheorem(undefined, 1);
        }).not.toThrow();
    });

    it('should not throw error when second argument is undefined', () => {
        // arrange
        // act
        // assert
        expect(() => {
            pythagoreanTheorem(1, undefined);
        }).not.toThrow();
    });

    it('should not throw error when both arguments are undefined', () => {
        // arrange
        // act
        // assert
        expect(() => {
            pythagoreanTheorem();
        }).not.toThrow();
    });

});

