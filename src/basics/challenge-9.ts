/*
    *** Challenge 9

    Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

    name
    population
    continent

    The string should have the following format: `${name} has a population of ${population} and is situated in ${continent}.`

    If the input object or any of its fields are undefined, the function should return the following string:
    'Invalid Input. Please enter an object that contains a name, population, and continent property.'

    Examples:
        printCityFacts({
            name: "Paris",
            population: "2,140,526",
            continent: "Europe"
        }) returns "Paris has a population of 2,140,526 and is situated in Europe"

        printCityFacts({
            name: "Tokyo",
            population: "13,929,286",
            continent: "Asia"
        }) returns "Tokyo has a population of 13,929,286 and is situated in Asia"
*/

export function printCityFacts(city: {
  name: string;
  population: string;
  continent: string;
}) {
  throw new Error("Not Implemented");
}
