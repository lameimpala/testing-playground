import { isDivisibleBy5 } from './challenge-3';

describe('isDivisibleBy5', () => {
    it('returns true if a number is divisible by 5', () => {
        // arrange
        const expectedResult = true;
        const valueUnderTest = 50;

        // act
        const actualResult = isDivisibleBy5(valueUnderTest);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});