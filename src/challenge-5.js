
/*************************
    *** Coding Challenge 5
        
        The Karaca's Encryption Algorithm - https://edabit.com/challenge/ccZBsRp6pX869gyqx    
    
        Make a function that encrypts a given input with these steps:
    
            Input: "apple"
                Step 1: Reverse the input: "elppa"
                Step 2: Replace all vowels using the following chart:
                    a => 0
                    e => 1
                    o => 2
                    u => 3
                    // "1lpp0"
                Step 3: Add "aca" to the end of the word: "1lpp0aca"
            Output: "1lpp0aca"
        
        Examples
            encrypt("banana") ➞ "0n0n0baca"
            encrypt("karaca") ➞ "0c0r0kaca"
            encrypt("burak") ➞ "k0r3baca"
            encrypt("alpaca") ➞ "0c0pl0aca"
        
        Notes
            All inputs are strings, no uppercases and all output must be strings
            Given a string, create a function to reverse the case.
            All lower-cased letters should be upper-cased, and vice versa.            
*/

export function encrypt(string) {
    
    let reversedString = string.split('').reverse().join('');
        
    reversedString = reversedString.replace(/a/g, '0').replace(/e/g, '1').replace(/o/g, '2').replace(/u/g, '3');

    reversedString = reversedString + 'aca';
        
    return reversedString;
    
}

console.log(encrypt('apple'));
console.log(encrypt('karaca'));
console.log(encrypt('burak'));
console.log(encrypt('alpaca'));