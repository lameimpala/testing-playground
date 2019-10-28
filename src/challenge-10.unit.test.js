import { numberOfArgs } from './challenge-10';

describe('numberOfArgs', () => {
    it('returns 0 when supplied with no arguments', () => {
        // arrange
        const expectedResult = 0;

        // act
        const actualResult = numberOfArgs();

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 1 when supplied with a argument', () => {
        // arrange
        const expectedResult = 1;

        // act
        const actualResult = numberOfArgs('a');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 2 when supplied with 2 arguments', () => {
        // arrange
        const expectedResult = 2;

        // act
        const actualResult = numberOfArgs('a', 'b');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 5 when supplied with 5 arguments', () => {
        // arrange
        const expectedResult = 5;

        // act
        const actualResult = numberOfArgs('a', 'b', 'c', 'd', 'e');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 10 when supplied with 10 arguments', () => {
        // arrange
        const expectedResult = 10;

        // act
        const actualResult = numberOfArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});