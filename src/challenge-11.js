/*

Challenge:
    Write a recursive function that takes an object as the first parameter, and a string as the second parameter
    This function will return true if the given string matches any key within the object, and return false otherwise.
    The objects may be nested, so you will need to *recurse* over the object keys in order to dive deep down into the object

Examples:

    objectHasKey({ a: 1}, 'a') = true because the 'a' key exists in the object
    objectHasKey({ a: 1, b: 0, c: 3}, 'c') = true because the 'c' key exists in the object
    objectHasKey({ parentKey: { childKey: 1 }}, 'childKey') = true because 'childKey' does exist in a child object
    objectHasKey({ grandparentKey: { parentKey: { childKey: 1 }}}, 'childKey') = true because 'childKey' does exist in the child of a child object
    objectHasKey({}, 'key') = false because there are no keys in the object
    objectHasKey({ a: 1}, 'b') = false because there is no 'b' key in the object

*/

export function objectHasKey() {
    throw new Error('Not Implemented');
}