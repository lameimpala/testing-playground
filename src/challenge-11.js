/*

Challenge:
    Write a recursive function that takes an object as the first parameter, and a string as the second parameter
    This function will return true if the given string matches any key within the object, and return false otherwise.
    The objects may be nested, so you will need to *recurse* over the object keys in order to dive deep down into the object

    Steps:
        1. Get the keys and values of the input object using Object.entries()
        2. Iterate over those keys
        3. If a key equals the input string, return true
        4. If a key's *value* points to an object, repeat steps 1-4 on that object
        5. Otherwise, return false

Examples:

    objectHasKey({ a: 1}, 'a') = true because the 'a' key exists in the object
    objectHasKey({ a: 1, b: 0, c: 3}, 'c') = true because the 'c' key exists in the object
    objectHasKey({ parentKey: { childKey: 1 }}, 'childKey') = true because 'childKey' does exist in a child object
    objectHasKey({ grandparentKey: { parentKey: { childKey: 1 }}}, 'childKey') = true because 'childKey' does exist in the child of a child object
    objectHasKey({}, 'key') = false because there are no keys in the object
    objectHasKey({ a: 1}, 'b') = false because there is no 'b' key in the object

*/

export function objectHasKey(inputObject = {}, keyToFind = '') {
    return Object.entries(inputObject).reduce(function(hasKey, [key, value]){
        if (typeof value === 'object') {
            return objectHasKey(value, keyToFind);
        }
        else if (key === keyToFind) {
            return true;
        }
        return hasKey;
    }, false);
}