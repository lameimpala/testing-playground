import { getKeysValueFromObject } from './challenge-6';

describe('getKeysValueFromObject', () => {

    it("should get a key's value from an object", () => {
        // arrange
        const expectedResult = 'value';

        // act
        const actualResult = getKeysValueFromObject('key', { key: 'value' } );

        // assert
        expect(actualResult).toEqual(expectedResult);
    });


    it('should return null if the key does not exist in the object', () => {
        // arrange
        // act
        const actualResult = getKeysValueFromObject('someKey', { someOtherKey: 'value' } );

        // assert
        expect(actualResult).toBeNull();
    });

});
    