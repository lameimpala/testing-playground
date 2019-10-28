import { cityFacts } from './challenge-9';

describe('cityFacts', () => {
    it('formats a string for tokyo', () => {
        // arrange
        const expectedResult = 'Tokyo has a population of 13,929,286 and is situated in Asia';

        // act
        const actualResult = cityFacts({ name: 'Tokyo', population: 13929286, continent: 'Asia' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('formats a string for NYC', () => {
        // arrange
        const expectedResult = 'New York City has a population of 90000000 and is situated in North America';

        // act
        const actualResult = cityFacts({ name: 'New York City', population: 90000000, continent: 'North America' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is undefined', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = cityFacts();

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is missing name', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = cityFacts({ population: 3000, continent: 'South America' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is missing continent', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = cityFacts({ population: 3000, name: 'Mendota' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is missing population', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = cityFacts({ name: 'Bejing', continent: 'Asia' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});
    