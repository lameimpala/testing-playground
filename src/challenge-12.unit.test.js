import { sumOfArgs } from './challenge-12';

describe('sumOfArgs', () => {
    it('sums up input values when there is one argument', () => {
        // arrange
        const expectedResult = 5;

        // act
        const actualResult = sumOfArgs(5);
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('sums up input values when there are 2 arguments', () => {
        // arrange
        const expectedResult = 8;

        // act
        const actualResult = sumOfArgs(5, 3);
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('sums up input values when there are 2 arguments', () => {
        // arrange
        const expectedResult = 4;

        // act
        const actualResult = sumOfArgs(2, 2);
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('sums up input values when there are 3 arguments', () => {
        // arrange
        const expectedResult = 6;

        // act
        const actualResult = sumOfArgs(2, 2, 2);
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('sums up input values when there are 8 arguments', () => {
        // arrange
        const expectedResult = 36;

        // act
        const actualResult = sumOfArgs(1,2,3,4,5,6,7,8);
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns 0 when no arguments are defined', () => {
        // arrange
        const expectedResult = 0;

        // act
        const actualResult = sumOfArgs();
        
        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('uses the reduce method', () => {
        // arrange
        const expectedResult = 'reduce';

        // act
        const actualResult = sumOfArgs.toString();
                
        // assert
        expect(actualResult.includes(expectedResult)).toBeTruthy();
    });
});