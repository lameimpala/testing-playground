import { printCityFacts } from './challenge-9';

describe('printCityFacts', () => {
    it('formats a string for tokyo', () => {
        // arrange
        const expectedResult = 'Tokyo has a population of 13,929,286 and is situated in Asia';

        // act
        const actualResult = printCityFacts({ name: 'Tokyo', population: '13,929,286', continent: 'Asia' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('formats a string for NYC', () => {
        // arrange
        const expectedResult = 'New York City has a population of 9,000,000 and is situated in North America';

        // act
        const actualResult = printCityFacts({ name: 'New York City', population: '9,000,000', continent: 'North America' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is undefined', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = printCityFacts();

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is missing name', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = printCityFacts({ population: 3000, continent: 'South America' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is missing continent', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = printCityFacts({ population: 3000, name: 'Mendota' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });

    it('returns invalid string when object is missing population', () => {
        // arrange
        const expectedResult = 'Invalid Input. Please enter an object that contains a name, population, and continent property.';

        // act
        const actualResult = printCityFacts({ name: 'Bejing', continent: 'Asia' });

        // assert
        expect(actualResult).toEqual(expectedResult);
    });
});
    