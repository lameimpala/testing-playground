/**
 * Unit Test: Challenge-5.js
 * 
 */
import { encrypt } from './challenge-5';

describe('encrypt', () => {
    it('Encrypts a string', () => {
        // arrange
        const expectedResult = 'ypp0haca';

        // act
        const actualResult = encrypt('happy');

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});

describe('encrypt', () => {
    it('Encrypts a string that contains double vowels', () => {
        // arrange
        const expectedResult = '11rt1nipaca';
        // act
        const actualResult = encrypt('pinetree');
        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});

describe('encrypt', () => {
    it('Encrypts a string that contains consecutive vowels', () => {
        // arrange
        const expectedResult = '13lbaca';
        // act
        const actualResult = encrypt('blue');
        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});