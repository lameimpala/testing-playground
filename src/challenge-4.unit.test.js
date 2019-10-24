import { reverseCase } from './challenge-4';

describe('reverseCase', () => {
    it('reverses case of Happy Birthday', () => {
        // arrange
        const expectedResult = 'hAPPY bIRTHDAY';

        // act
        const actualResult = reverseCase('Happy Birthday');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('reverses case of gLaMoRoUs', () => {
        // arrange
        const expectedResult = 'GlAmOrOuS';

        // act
        const actualResult = reverseCase('gLaMoRoUs');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('reverses case of piggly wiggle', () => {
        // arrange
        const expectedResult = 'PIGGLY WIGGLY';

        // act
        const actualResult = reverseCase('piggly wiggle');
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('reverses case of DIDDLY', () => {
        // arrange
        const expectedResult = 'diddly';

        // act
        const actualResult = reverseCase('DIDDLY');
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});