import { lastItemOf } from './challenge-2';

describe('lastItemOf', () => {
    it('returns the last item in an array', () => {
        // arrange
        const expectedResult = 1;
        const arrayUnderTest = [0, 2, 3, 1];

        // act
        const actualResult = lastItemOf(arrayUnderTest);

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});