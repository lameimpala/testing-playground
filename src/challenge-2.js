/*************************
    *** Coding Challenge 2
    
        Given an array, create a function that returns only the
        last value in the array.
    
        Examples:
            function('robocop');        returns 'p'
            function('gadget');         returns 't'
        
        Notes:
        None
*/
export function lastItemOf(array) {
    return array.pop();
}
